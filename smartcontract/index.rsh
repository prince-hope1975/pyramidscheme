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
    registerForScheme: Fun([Address], Address),
    timesUp: Fun([], Bool),
    checkBalance: Fun([], UInt),
    withdraw: Fun([], UInt),
  });
  
  const T = API("Thief", {
    steal: Fun([], Bool),
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
  const Users = new Map(
    Object({
      address: Address,
      numberOfChildren: UInt,
      totalUnder: UInt,
      parent: Address,
      allowedToWithdraw: UInt,
    })
  );
  const deployerObj = {
    address: D,
    numberOfChildren: 0,
    totalUnder: 0,
    parent: D,
    allowedToWithdraw: 0,
  };

  Users[D] = deployerObj;
  // This is where the main logic of our application is
  const [keepGoing, howMany, total] = parallelReduce([true, 0, 0])
    .define(() => {
      /**
       * @param parent_address is the address used to register under
       * @param current_user_address is your own address
       * @returns
       */
      const register = (parent_address, current_user_address) => {
        const parent = fromSome(Users[parent_address], deployerObj);
        check(!(current_user_address == D), "cannot register as deployer");
        check(isNone(Users[current_user_address]), "Already a member sorry");
        check(parent.numberOfChildren < 2, "No empty slots for that user");
        return () => {
          const currentUser = fromSome(
            Users[current_user_address],
            deployerObj
          );

          Users[parent_address] = {
            ...parent,
            numberOfChildren: parent.numberOfChildren + 1,
            totalUnder: parent.totalUnder + 1,
            allowedToWithdraw: parent.allowedToWithdraw + price,
          };
          Users[current_user_address] = {
            ...currentUser,
            address: current_user_address,
            parent: parent_address,
          };

          return [keepGoing, howMany + 1, total + price];
        };
      };
      const user_balance = (current_user_address) => {
        check(isSome(Users[current_user_address]), "Not a member");
       
        return () => {
          const currentUser = fromSome(
            Users[current_user_address],
            deployerObj
          );
          return currentUser.allowedToWithdraw;
        };
      };
      const withdraw_accumulated_funds = (current_user_address, confirm) => {
        const user = fromSome(Users[current_user_address], deployerObj);
        const parent = fromSome(Users[user.parent], deployerObj);
        check(!(current_user_address == D), "You cannot withdraw as deployer");
        check(!(user.allowedToWithdraw == 0), "Insufficient Balance");
        check(parent.numberOfChildren >= 2, "Need at least two down lines");
        check(balance() > price);
        return () => {
          const amt = (user.allowedToWithdraw * 30) / 100;
          const amount = returnTheGreater(balance(), amt);
          //   We are adding the remaining 60% to the parent's balance
          Users[parent.address] = {
            ...parent,
            allowedToWithdraw: parent.allowedToWithdraw + amount * 2,
          };
          Users[current_user_address] = { ...user, allowedToWithdraw: 0 };

          transfer(amount).to(current_user_address);
          confirm(amount);
          const final = total - amount;
          return [keepGoing, howMany, final];
        };
      };
    })
    .invariant(balance() == total)
    .while(keepGoing)
    .api(
      S.registerForScheme,
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
    .api(
      T.steal,
      () => check(this == D, "You are not the deployer, stop trying"),
      () => 0,
      (k) => {
        check(this == D, "You are not the deployer ma boy");
        k(true)
        return [false, howMany, total];
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
