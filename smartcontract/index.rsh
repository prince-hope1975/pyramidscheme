"reach 0.1";

// Users register and deposit a fee
// when 2 users deposit the fee the upline gets paid
// for each deposit or withdrawal the contract deployer gets 2%
// once the upline is paid the upline pays the upline an amount
// the value paid to the upline is dependant 75% of what is recieved

// Helper function
const returnTheGreater = (x, y) => (x > y ? y : x);

export const main = Reach.App(() => {
  // This person sets the price
  const D = Participant("Deployer", {
    price: UInt,
    // The deadline will be used to determine when the contract
    ready: Fun([], Null),
    // Execution would end
    deadline: UInt,
  });

  const S = API("Schemers", {
    joinPyramid: Fun([Address], Address),
    timesUp: Fun([], Bool),
    checkBalance: Fun([], UInt),
    withdraw: Fun([], UInt),
  });

  init();
  // Members of the pyramid scheme
  D.only(() => {
    // The deployer gets the price and deadline and publishes them to the entire contract
    const price = declassify(interact.price);
    const deadline = declassify(interact.deadline);
  });
  D.publish(price, deadline);
  commit();
  D.publish();

  const deadlineBlock = relativeTime(deadline);

  D.interact.ready();

  /**
   * @definition
   * Defining maps to store all my data that will be used through out the app
   */
  const registeredUser = new Map(
    Object({
      address: Address,
      numberOfChildren: UInt,
      totalUnder: UInt,
      parent: Address,
      allowedToWithdraw: UInt,
    })
  );
  const users = new Map(Address, Address);
  const numChildren = new Map(Address, UInt);
  const totalKids = new Map(Address, UInt);
  const parentMap = new Map(Address, Address);
  const allocatedAmount = new Map(Address, UInt);

  users[D] = D;
  parentMap[D] = D;
  allocatedAmount[D] = 0;

  registeredUser[D] = {
    address: D,
    numberOfChildren: 0,
    totalUnder: 0,
    parent: D,
    allowedToWithdraw: 0,
  };

  // This is where the main logic of our application is
  const [keepGoing, howMany, total] = parallelReduce([true, 0, 0])
    .define(() => {
      /**
       *
       * @param parent_address is the address used to register under
       * @param user_address is your own address
       * @returns
       */
      const register = (parent_address, user_address) => {
        check(!(user_address == D), "cannot register as deployer");
        check(isSome(registeredUser[user_address]), "Already a member sorry");
        check(
          fromSome(numChildren[parent_address], 0) < 2,
          "No empty slots for that user"
        );

        return () => {
          numChildren[parent_address] =
            fromSome(numChildren[parent_address], 0) + 1;
          parentMap[user_address] = parent_address;
          users[user_address] = user_address;
          totalKids[parent_address] =
            fromSome(totalKids[parent_address], 0) + 1;
          allocatedAmount[user_address] = 0;
          allocatedAmount[parent_address] =
            fromSome(allocatedAmount[parent_address], 0) + price;
          return [keepGoing, howMany + 1, total + price];
        };
      };
      const user_balance = (user_address) => {
        check(!(fromSome(users[user_address], D) == D), "Not a member");
        check(!(user_address == D), "Unable to check balance");
        return () => {
          const val = fromSome(allocatedAmount[user_address], 0);
          return val;
        };
      };
      const withdraw_accumulated_funds = (user_address, confirm) => {
        check(!(user_address == D), "You have no uplines");
        check(
          !(fromSome(allocatedAmount[user_address], 0) == 0),
          "Insufficient Balance"
        );
        check(
          fromSome(numChildren[fromSome(parentMap[user_address], D)], 0) >= 2,
          "Need at least two down lines"
        );
        check(balance() > price);
        return () => {
          const amt = fromMaybe(
            allocatedAmount[user_address],
            () => 0,
            (x) => (x * 30) / 100
          );
          const amount = returnTheGreater(balance(), amt);
          check(balance() >= amount, "Balance Empty");
          confirm(amount);
          transfer(amount).to(user_address);
          allocatedAmount[fromSome(parentMap[user_address], D)] =
            fromSome(allocatedAmount[fromSome(parentMap[user_address], D)], 0) +
            amount * 2;
          allocatedAmount[user_address] = 0;
          allocatedAmount[this] = fromSome(totalKids[this], 0);

          const final = total - amount;
          return [keepGoing, howMany, final];
        };
      };
    })
    .invariant(balance() == total)
    .while(keepGoing)
    .api(
      S.joinPyramid,
      (k) => {
        const _ = register(k, this);
      },
      (_) => price,
      (h, k) => {
        k(this);
        return register(h, this)();
      }
    )
    .api(
      S.checkBalance,
      () => {
        const _ = user_balance(this);
      },
      () => 0,
      (k) => {
        const amount = user_balance(this)();
        k(amount);
        return [keepGoing, howMany, total];
      }
    )
    .api(
      S.withdraw,
      () => {
        const _ = withdraw_accumulated_funds(this, () => 0);
      },
      () => 0,
      (k) => {
        return withdraw_accumulated_funds(this, k)();
      }
    )
    .timeout(deadlineBlock, () => {
      const [[], k] = call(S.timesUp);
      k(true);
      return [false, howMany, total];
    });
  transfer(balance()).to(D);
  commit();
  exit();
});
