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
    joinPyramid: Fun([Address], Bool),
    // withDrawPayout: Fun([], Null),
    timesUp: Fun([], Bool),
    checkBalance: Fun([UInt], UInt),
    withdraw: Fun([], Bool),
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
      const register = (k) => {
        check(this == D, "cannot register as deployer");
        check(
          fromMaybe(
            users[k],
            () => D,
            (x) => x
          ) == D,
          "The person you are trying to register under is not registered"
        );
        check(
          fromMaybe(
            users[this],
            () => D,
            (x) => x
          ) == this,
          "Already a member sorry"
        );
        check(
          fromMaybe(
            numChildren[k],
            () => 0,
            (x) => x
          ) < 2,
          "No empty slots for this user"
        );

        return () => {
          numChildren[k] =
            fromMaybe(
              numChildren[k],
              () => 0,
              (x) => x
            ) + 1;
          parentMap[this] = k;
          users[this] = this;
          allocatedPrice[this] = price;
          return [keepGoing, howMany + 1, total + price];
        };
      };
      //
      const userBalance = (k) => {
        check(
          fromMaybe(
            users[this],
            () => D,
            (x) => x
          ) == D,
          "Not a member"
        );
        return () => {
          k(
            fromMaybe(
              allocatedPrice[this],
              () => 0,
              (x) => x
            )
          );
        };
      };
      const withdrawPayout = () => {
        check(!(this == D), "You have no uplines");
        return () => {
          const tfAmt = fromMaybe(
            allocatedPrice[this],
            () => 0,
            (x) => x
          );
          const parentAmt = fromMaybe(
            allocatedPrice[
              fromMaybe(
                parentMap[this],
                () => D,
                (x) => x
              )
            ],
            () => 0,
            (x) => x
          );
          transfer((tfAmt * 45) / 100).to(this);
          allocatedPrice[
            fromMaybe(
              parentMap[this],
              () => D,
              (x) => x
            )
          ] = parentAmt + (tfAmt * 55) / 100;
          allocatedPrice[this] = 0;

          const final = total - (tfAmt * 45) / 100;
          return [keepGoing, howMany, final];
        };
      };
    })

    .invariant(balance() == total)
    .while(keepGoing)
    .api(
      S.joinPyramid,
      (k) => {
        const _ = register(k);
      },
      (_) => price,
      (h, k) => {
        k(true);
        return register(h)();
      }
    )
    .api(
      S.checkBalance,
      (k) => {
        const _ = userBalance(k);
      },
      (s) => 0,
      (s, k) => {
        userBalance(k)();
        return [keepGoing, howMany, total]; 

      }
    )
    .api(
      S.withdraw,
      () => {
        const _ = withdrawPayout();
      },
      () => 0,
      (k) => {
        k(true)
       return withdrawPayout()();

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
