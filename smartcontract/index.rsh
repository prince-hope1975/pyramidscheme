"reach 0.1";

// Users register and deposit a fee
// when 2 users deposit the fee the upline gets paid
// for each deposit or withdrawal the contract deployer gets 2%
// once the upline is paid the upline pays the upline an amount
// the value paid to the upline is dependant 75% of what is recieved
// once 100 people join then end the program and run away with the rest

export const main = Reach.App(() => {
  // This person sets the price
  const D = Participant("Deployer", {
    price: UInt,
    ready: Fun([], Null),
    // The deadline will be used to determine when the contract
    // Execution would end
    deadline: UInt,
  });

  const S = API("Schemers", {
    joinPyramid: Fun([UInt], Bool),
    timesUp: Fun([], Bool),
    // printObj : Fun([Data], null)
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
  const downLines = new Map(Address, UInt);
  const upLine = new Map(Address, UInt);
  const Line = new Map(Object({
    parent:Address,
    children : Array(UInt, 2)
  }));

  downLines[D] = 0
  upLine[D] = 0

  D.interact.ready();
  const [keepGoing, howMany] = parallelReduce([true, 0])
    .define(() => {
      const register = (index) => {
        return () => {
          downLines[this] = 0;
          // const val = fromSome(SchemeMembers[index], D);
          // upLine[val] = fromSome(upLine[val], 0) + 1;          
          return [keepGoing, howMany + 1];
        };
      };
      //
      const sendToUpline = (who) => {
        check(SchemeMembers.member(who), "Is a member");
        return () => {};
      };
    })
    .invariant(balance() == howMany * price)
    .while(keepGoing)
    .api(
      S.joinPyramid,
      (k) => {
        const _ = register(k);
      },
      (k) => price,
      (h, k) => {
        k(true);
        
        return register(h)();
      }
    )
    // .api()
    .timeout(deadlineBlock, () => {
      const [[], k] = call(S.timesUp);
      k(true);
      return [false, howMany];
    });
  transfer(balance()).to(D);
  commit();
  exit();
})
// .case(PART_EXPR,
//   (() => ({
//           when: PUBLISH_WHEN_EXPR,
//           msg: PUBLISH_MSG_EXPR
//   })),
//   ((msg) => PAY_EXPR),
//   ((msg) => {
//     CONSENSUS_EXPR
//   }))

