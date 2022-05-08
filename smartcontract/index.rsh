"reach 0.1";

// Users register and deposit a fee
// when 2 users deposit the fee the upline gets paid
// for each deposit or withdrawal the contract deployer gets 2%
// once the upline is paid the upline pays the upline an amount
// the value paid to the upline is dependant 75% of what is recieved

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
    // withDrawPayout: Fun([], Null),
    timesUp: Fun([], Bool),
    checkBalance: Fun([], UInt),
    withdraw: Fun([], UInt),
  });

  init();
  // const price = 20;
  // Members of the pyramid scheme
  D.only(() => {
    const price = declassify(interact.price);
    // check(price <= 20,"Price must be 20");
    const deadline = declassify(interact.deadline);
  });
  D.publish(price,deadline);
  commit();
  D.publish();

  const deadlineBlock = relativeTime(deadline);

  D.interact.ready();

  const users = new Map(Address, Address);
  const numChildren = new Map(Address, UInt);
  const totalKids = new Map(Address, UInt);
  const parentMap = new Map(Address, Address);
  const allocatedAmount = new Map(Address, UInt);

  users[D] = D;
  parentMap[D] = D;
  allocatedAmount[D] = 0;
  const [keepGoing, howMany, total] = parallelReduce([true, 0, 0])
    .define(() => {
      const register = (k, that) => {
        check(!(that == D), "cannot register as deployer");
        check(!(fromSome(users[that], D) == that), "Already a member sorry");
        check(fromSome(numChildren[k], 0) < 2, "No empty slots for that user");

        return () => {
          numChildren[k] = fromSome(numChildren[k], 0) + 1;
          parentMap[that] = k;
          users[that] = that;
          totalKids[k] = fromSome(totalKids[k], 0) + 1;
          allocatedAmount[that] = 0;
          allocatedAmount[k] = fromSome(allocatedAmount[k], 0) + price;
          return [keepGoing, howMany + 1, total + price];
        };
      };
      //
      const userBalance = (that) => {
        check(!(fromSome(users[that], D) == D), "Not a member");

        check(!(that == D), "Unable to check balance");
        return () => {
          const val = fromSome(allocatedAmount[that], 0);
        };
      };
      const withdrawPayout = (that, k) => {
        check(!(that == D), "You have no uplines");
        check(
          !(fromSome(allocatedAmount[that], 0) == 0),
          "Insufficient Balance"
        );

        // netBalance()
        check(
          fromSome(numChildren[fromSome(parentMap[that], D)], 0) >= 2,
          "Need at least two down lines"
        );
        check(balance() > price);
        return () => {
          const amt = fromMaybe(
            allocatedAmount[that],
            () => 0,
            (x) => (x * 30) / 100
          );
          const amount = returnTheGreater(balance(), amt);
          check(balance() >= amount, "Balance Empty");

          // check(amount <= 0, "Check")
          k(amount);
          transfer(amount).to(that);
          allocatedAmount[fromSome(parentMap[that], D)] =
            fromSome(allocatedAmount[fromSome(parentMap[that], D)], 0) +
            amount * 2;
          allocatedAmount[that] = 0;
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
        const _ = userBalance(this);
      },
      () => 0,
      (k) => {
        const amount = fromSome(allocatedAmount[this], 0); //* price * 30) / 100;
        k(amount);
        return [keepGoing, howMany, total];
      }
    )
    .api(
      S.withdraw,
      () => {
        const _ = withdrawPayout(this, () => 0);
      },
      () => 0,
      (k) => {
        // k(this);
        return withdrawPayout(this, k)();
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
// .case(PART_EXPR,
//   (() => ({
//           when: PUBLISH_WHEN_EXPR,
//           msg: PUBLISH_MSG_EXPR
//   })),
//   ((msg) => PAY_EXPR),
//   ((msg) => {
//     CONSENSUS_EXPR
//   }))
