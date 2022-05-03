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
    joinPyramid: Fun([Address], Bool),
    // withDrawPayout: Fun([], Null),
    timesUp: Fun([], Bool),
    checkBalance: Fun([UInt], UInt),
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
  const users = new Set();
  const numChildren = new Map(Address, UInt);
  const parentMap = new Map(Address, Address);
  const allocatedPrice = new Map(Address, UInt);
  users.insert(D);
  parentMap[D] = D;
  allocatedPrice[D] = 0;
  const [keepGoing, howMany] = parallelReduce([true, 0])
    .define(() => {
      const register = (k) => {
        check(
          (users.member(k)),
          "The person you are trying to register under is not registered"
        );
        // check((users.member(this)), "Already a member sorry");
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
          users.insert(this);
          allocatedPrice[this] = price;
          return [keepGoing, howMany + 1];
        };
      };
      //
      const userBalance = (k) => {
        check(users.member(this), "Not a member");
        return () => {
          k(fromMaybe(allocatedPrice[this],()=>0, (x)=>x));
         
        };
      };
      const withdrawPayout =()=>{
        check(!(this == D), "You have no uplines")
      }
    })

    .invariant(balance() == howMany * price)
    .while(keepGoing && howMany < 50)
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
      (k) => {const _ = userBalance(k);},
      (s) => 0,
      (s,k)=>{
        userBalance(k)()
        return [keepGoing, howMany];
      }
    )
    .timeout(deadlineBlock, () => {
      const [[], k] = call(S.timesUp);
      k(true);
      return [false, howMany];
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
