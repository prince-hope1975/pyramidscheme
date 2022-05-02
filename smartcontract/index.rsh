"reach 0.1";

// Users register and deposit a fee
// when 2 users deposit the fee the upline gets paid
// for each deposit or withdrawal the contract deployer gets 2%
// once the upline is paid the upline pays the upline an amount
// the value paid to the upline is dependant 75% of what is recieved
// once 50 people join then end the program and run away with the rest

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
    joinPyramid: Fun([UInt], UInt),
    // withDrawPayout: Fun([], Null),
    timesUp: Fun([], Bool),
    // printObj : Fun([Bool], Null)
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
  const participantsInfo = Array.iota(50).map((_) => ({
    participantAddr: D,
    parent: D,
    children: 0,
  }));

  const deadlineBlock = relativeTime(deadline);
  // const downLines = new Map(Address, UInt);
  
  const checkStatement = (addr) => {
    participantsInfo.mapWithIndex((item, index) => {});
  };
  // downLines[D] = 0
  // upLine[D] = 0

  D.interact.ready();
  const [keepGoing, howMany, object] = parallelReduce([
    true,
    0,
    participantsInfo,
  ])
    .define(() => {
      const register = (k) => {
        check(k < 50,"Out of range") ;
        check(object[k].children < 2, "Cannot register under this user, They have no available downlines");
        return () => {

          const parent = {
            parent: object[k].participantAddr,
            children: 0,
            participantAddr: this
          };
          const updatedParent = {
            ...object[k], children: object[k].children+1
          }
          const updateParent = object.set(k, updatedParent)
          const newArr = updateParent.set(howMany, parent);
          return [keepGoing, howMany + 1, newArr];
        };
      };
      //
      const sendToUpline = (who) => {
        check(SchemeMembers.member(who), "Is a member");
        return () => {};
      };
    })

    .invariant(balance() == howMany * price)
    .while(keepGoing && howMany<50)
    .api(
      S.joinPyramid,
      (k) => {
        const _ = register(k);
      },
      (_) => price,
      (h, k) => {
        check(h<50)
        k(object[h].children);
        // k(howMany)
        return register(h)();
      }
    )
    // .api()
    .timeout(deadlineBlock, () => {
      const [[], k] = call(S.timesUp);
      k(true);
      return [false, howMany, object];
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
