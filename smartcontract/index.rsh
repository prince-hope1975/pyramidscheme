"reach 0.1";

// Users register and deposit a fee
// when 2 users deposit the fee the upline gets paid
// for each deposit or withdrawal the contract deployer gets 2%
// once the upline is paid the upline pays the upline an amount
// the value paid to the upline is dependant 75% of what is recieved

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
    // checkBalance: Fun([], UInt),
    withdraw: Fun([], Address),
  });

  init();

  // Members of the pyramid scheme
  D.only(() => {
    const price = declassify(interact.price);
    const deadline = declassify(interact.deadline);
  });
  D.publish(price, deadline);
  commit();
  D.publish();

  const deadlineBlock = relativeTime(deadline);

  D.interact.ready();

  const users = new Map(Address, Address);
  const numChildren = new Map(Address, UInt);
  const parentMap = new Map(Address, Address);
  const allocatedPrice = new Map(Address, UInt);

  users[D] = D;
  parentMap[D] = D;
  allocatedPrice[D] = 0;
  const [keepGoing, howMany, total] = parallelReduce([true, 0, 0])
    .define(() => {
      const register = (k, that) => {
        check(!(that == D), "cannot register as deployer");
        // check(
        //   (fromSome(users[k], D) == D),
        //   "The person you are trying to register under is not registered"
        // );
        check(!(fromSome(users[that], D) == that), "Already a member sorry");
        check(fromSome(numChildren[k], 0) < 2, "No empty slots for that user");

        return () => {
          numChildren[k] = fromSome(numChildren[k], 0) + 1;
          parentMap[that] = k;
          users[that] = that;
          allocatedPrice[that] = price;
          return [keepGoing, howMany + 1, total + price];
        };
      };
      //
      // const userBalance = (that) => {
      //   check(fromSome(users[that], D) == D, "Not a member");

      //   check(this == D, "Unable to check balance");
      //   return () => {
      //     const val = fromSome(allocatedPrice[that], 0);
      //     // k(this);
      //   };
      // };
      const withdrawPayout = (that) => {
        check(!(that == D), "You have no uplines");
        check(
          !(fromSome(allocatedPrice[that], 0) == 0),
          "Insufficient Balance"
        );
        return () => {
         const tfAmt = fromMaybe(
           allocatedPrice[that],
           () => 0,
           (x) => x
         );
         const parentAmt = fromSome(
           allocatedPrice[fromSome(parentMap[that], D)],
           0
         );
         const thirtyPercent = (tfAmt * 30) / 100;
         const sixtyPercent = (tfAmt * 60) / 100;
         transfer(0).to(that);

         allocatedPrice[fromSome(parentMap[that], D)] =
           parentAmt + sixtyPercent;
         allocatedPrice[that] = 0;
        // //  k(that);
         const final = total - thirtyPercent;
         return [keepGoing, howMany, total];
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
    // .api(
    //   S.checkBalance,
    //   () => {
    //     const _ = userBalance(this);
    //   },
    //   () => 0,
    //   (k) => {
    //     k(fromSome(allocatedPrice[this], 0));
    //     return [keepGoing, howMany, total];
    //   }
    // )
    .api(
      S.withdraw,
      () => {
        const _ = withdrawPayout(this);
      },
      () => 0,
      (k) => {
        k(this)
       return withdrawPayout(this)();
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
