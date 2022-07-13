# Tutorial: Pyramid Scheme

Simply put a pyramid/Ponzi scheme is a fraudulent investment that is set up in a way, that requires using new members' deposits to pay out old members. More on that [here](https://www.investopedia.com/insights/what-is-a-pyramid-scheme/).  
 If you've ever wondered what it would be like to build your very own fully functional, money-making pyramid scheme, that's also blockchain-based, and you would like to join the ranks of the great Ponzi Schemers, then this is the tutorial for you. The tutorial will walk you through how to get started using `Reach`, `Javascript`, and `Next` to build your very own pyramid scheme and deploy it to the Algorand chain or any of the chains supported by reach.

## Aim

The tutorial aims to give you the solid knowledge required to get you started building protocols and DApps on the blockchain. It will give you an overview of what it takes to create a smart contract and create User Interfaces that interact with such contracts, all with the help of a powerful tool called `Reach`.  
_To get a better idea of what Reach is please visit [here](https://docs.reach.sh)_

<div align="center">
  <img alt="Pyramid Scheme App" src="https://media.giphy.com/media/e1zbZCtDYigoDaGUJq/giphy.gif" width="1000"><br>
  <sup>Pyramid Scheme Visual Representation <sup>
</div>

The tutorial assumes Zero knowledge of working with `Reach` but will advise you to at least know the basics of programming, before going through this tutorial. This is to enable you to get the best out of this tutorial but is not a prerequisite.

## Prerequisites

If you need help installing Reach and its prerequisites then get started at our [Quick Installation Guide](https://docs.reach.sh/quickstart/#quickstart)

## Application Structure

Before writing a single line of code, it is common practice to outline the flow of your application either through writing Pseudo code in the form of comments or visualizations of the app flow/structure. In this tutorial, we will go with both to help us better understand what we're building.

<div align="center">
  <img alt="Pyramid Scheme App" src="https://i.ibb.co/T4h2CRx/flow.png" width="1000"><br>
  <sup>The above figure gives us a general view of the application flow, rules and participants.  <sup>
</div>

The above figure gives us a general view of the application flow, rules and participants.

- A Person "Deployer" creates the contract and deploys it. They allow a maximum of two people "users" to connect and deposit directly under them.
- The "users" can in turn refer two people under them and have the ability to withdraw a fraction of the deposits, once they have referred their two users.
- "Users" are not allowed to refer more than 2 people directly under them else the contract will throw an error.

## Getting Started

We assume that you’ll go through this tutorial in a directory named ~/reach/scheme. Create the directory by typing the following command in your terminal without the `$`.

`$ mkdir -p ~/reach/scheme`

AWe also assume that you've gone through the installation process or have a copy of Reach pre-installed in ~/Reach so you can write

`$ ../Reach version`

You should start by initializing your project. In the current directory start by pasting the below command in the terminal.

`$ ../Reach init`

This initializes a new Reach project and creates two files, `index.rsh` and `index.mjs`.

Open your code editor of choice( Recommended : Vs code). And navigate to the

Your folder structure should look something like this, with the `Scheme` folder bing nested in the `Reach` folder.

<div align="center">
  <img alt="Pyramid Scheme App" src="assets/folder.png" width="1000"><br>
  <sup>Folder Structure <sup>
</div>

For our frontend to access the backend code we would need to create a build that contains our ABI and other binaries.  
Run the following command without the `$` in your terminal to create a build folder in your repo.

```bash
$ ../Reach compile
```

After running the above command a build folder will be generated which you can now use in our frontend.

### Exploring our `.rsh` file

The `index.rsh` file should look something like this after running the above command.

```js
1.   'Reach 0.1';
2.
3.  export const main = Reach.App(() => {
4.   const A = Participant('Alice', {
5.    // Specify Alice's interact interface here
6.   });
7.   const B = Participant('Bob', {
8.     // Specify Bob's interact interface here
9.   });
10.  init();
11.  // The first one to publish deploys the contract
12.  A.publish();
13.  commit();
14.  // The second one to publish always attaches
15.  B.publish();
16.  commit();
17.  // write your program here
19.  exit();
20. });
```

<b>NOTE</b>: Reach programs are divided into four modes, namely `Init mode`, `Step Mode`, `Local Step Mode`, `Consensus Step Mode`.  
_The official Reach [wisdom for sale](https://docs.reach.sh/tut/wfs/#wfs-3) tutorial does a great job at explaining Reach modes in-depth_

The index.rsh file contains the blockchain logic of our application and is what will house most of the business logic for our pyramid scheme.
Let's break down the above code block.

- Line 1. specifies the version of Reach that the compiler will use during the compilation process.

- Lines 3 creates a Reach module and exports it as `main`. This syntax allows Reach contracts to import different Reach modules and use their code.

- Lines 4 and 7 occur in the `Init step` and they define the various participants of the application and store the participants "Alice" and "Bob" in constants "A" and "B" respectively. That is, it tells the Reach program who has access to the contract, what methods they can call and what actions they can perform. _We will be changing this shortly_

- Line 10 initializes the contract by calling `init()` and allows for custom logic (End of the `Init Step`).

- Line 12 and 15 are used to make private variables of each participant public by publishing them, and on lines 13 and 16, the "commit" statement ends the current consensus step and allows more local steps.

### Exploring our `.mjs` file

_Let's look at the generated `index.mjs` file next_

```ts
1. import {loadStdlib} from '@reach-sh/stdlib';
2. import * as backend from './build/index.main.mjs';
3. const stdlib = loadStdlib(process.env);
4.
5. const startingBalance = stdlib.parseCurrency(100);
6.
7. const [ accAlice, accBob ] = await stdlib.newTestAccounts(2, startingBalance);
8.
9. console.log('Hello, Alice and Bob!');
10.
11. console.log('Launching...');
12. const ctcAlice = accAlice.contract(backend);
13. const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
14.
15. console.log('Starting backends...');
16. await Promise.all([
15.  backend.Alice(ctcAlice, {
16.    ...stdlib.hasRandom,
17.    // implement Alice's interact object here
18.  }),
19.  backend.Bob(ctcBob, {
20.    ...stdlib.hasRandom,
21.    // implement Bob's interact object here
22.  }),
23. ]);

console.log('Goodbye, Alice and Bob!');
```

The magic javascript or mjs extension file in Reach is used for testing our Reach smart contract code that was written in the `.rsh` file.

- Line 1 gets/imports a module called `loadstdlib`. This module is used to tell your Reach front-end what consensus network it's working with, among other things by loading the environment variable, which is done in line 3. _Environment variables are beyond the scope of this tutorial but you can read about them more [here](https://en.wikipedia.org/wiki/Environment_variable)_
- Line 2 imports everything from the build folder we generated by running `..Reach compile` in our terminal earlier. It gives us access to a variable `backend` that accesses all the generated code from our `.rsh` file.
- On line 5 we parse a number into blockchain readable format, which will be used for processing transactions using network tokens. Most blockchains use minuscule units when processing transactions on their consensus networks, for Algorand it's the micro Algo and ETH it's the Wei or Gwei. We are basically doing a conversion of units.
- On line 7 we create test (blockchain) accounts we can use to interact with our local blockchain and our contract in our `.rsh` file(Yes Reach helps you test your code by running a dev-net). We store these accounts in variables `accAlice` and `accBob`
- On line 12 we are deploying a contract to the blockchain using the generated backend file.We store the contract instance in a const `ctcAlice`
- On line 13 we attach to that contract by giving the `contract` method a second input which is the contract info of the deployed contract in the earlier step.
- On line 16 we await a `promise.all` statement that resolves two promises, that houses all the function, methods and variables our participants access in the `rsh` file. The promises begin on lines 15 and 19. More on promises [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- We log goodbye to our participants at the end of the file to signify the end of the code execution.

This is now enough for Reach to compile and run our program. Let's try running

```bash
../Reach run
```

Reach should now build and launch a Docker container for this application. Since the application doesn't do anything, you'll just see a lot of diagnostic messages though, so that's not very exciting

## Implementing Pyramid Scheme logic

Our Pyramid Scheme has multiple participants that perform different actions during the program. Let's go ahead and define them.

- The contract will have a participant Deployer `D`, that sets all the necessary parameters the pyramid scheme will need, such as Price, How long the scheme will run and a host of variables.
- The Contract will have an API, Schemers `S`, that will allow multiple users to join the pyramid scheme.
- `S` will have multiple functions they can call to perform various actions, such as;
  - `register` which allows people to register for the scheme
  - `balance` which will get the balance of the user in the contract according to the number of users referred.
  - `withdraw` which allows a user to withdraw their funds into their wallet of choice.
- We will also be adding a malicious API function `T`(thief) that will allow the contract deployer to end the contract execution prematurely (keep an eye out for this, as we can use it at any time to remove all the money in the contract)
<!-- - The contract ma -->

## Implementation

Now we should implement the code logic for our `index.rsh` and `index.mjs`.
We will focus on our smart contract logic initially and then mimick its functionality in the test file.  
 We start by creating our helper function and our interface object for the deployer. Essentially, the interface object is an object that contains all the functions and variables that are accessible to a participant, in this case, our deployer.

**Note the comments that start at line 3, they are very useful in understanding what we're building. They are a form of pseudo-code, and are highly recommended when building out software**

```js
1. "reach 0.1";
2.
3. // Users register and deposit a fee
4. // when 2 users deposit the fee the upline gets paid
5. // for each deposit or withdrawal the contract deployer gets a percentage
6. // once the upline is paid the upline pays the upline an amount
7. // the value paid to the upline is dependant on what is recieved
8.
9.
10. // Helper function
11. const returnTheGreater = (x, y) => (x > y ? y : x);
12.
13. export const main = Reach.App(() => {
14.     // This person sets the price
15.     const D = Participant("Deployer", {
16.         price: UInt,
17.         // The deadline will be used to determine when the contract
18.         ready: Fun([], Null),
19.         // Execution would end
20.         deadline: UInt,
21.     });
22. })
```

- We create a helper function `returnGreaterThan` on line 11 which simply takes in two numbers (UInts in the case of reach) and outputs the larger number. We make use of the function later in the contract.
- Our line 13 creates a Reach module called main which allows us to export our code execution.
- We create a participant object named `Deployer` and store its instance in a const `D`.

_Before we move on, it is important to note that Reach has what we call "`Types`". These types help Reach know what data a variable should expect and thus will know how to handle such. Taking some time to glance through the various types might be beneficial to you. [Go here](https://docs.reach.sh/rsh/compute/#ref-programs-types)_

- The Deployer D has what we call a Participant Interact object. The Object houses all the functions and variables including the types for each variable or function. that perpetuate communication between the contract and our front-end. In our case these parameters are.
  - Price: This receives a UInt(number) that will tell our contract how much each user is allowed to deposit in the contract.
  - ready: A function that takes no arguments and returns nothing. It will be used to notify our participants when certain actions have been performed on the contract.
  - deadline: This takes a UInt that will help our contract know how long to run before the contract execution ends.  
This is all the deployer will need to initialize the contract.

Now we move on to adding the interface the users will use to communicate with the contract, as well as adding an interface that our malicious Deployer can use to end the contract if they wanted.

Below Line 21 in the above snippet, we will add the following code.

```js
22. const S = API("Schemers", {
23.    registerForScheme: Fun([Address], Address),
24.    timesUp: Fun([], Bool),
25.    checkBalance: Fun([], UInt),
26.    withdraw: Fun([], UInt),
27.  });
28.  
29.  const T = API("Thief", {
30.    steal: Fun([], Bool),
31.  });
32.  init();
```

- Lines 14 to 18 create Participant `Alice` and give it its participant interface.
- Lines 19 to 21 define the participant `Bob` and give it its participant interface
- Line 15 and 20 use the spread operator to add all the properties of `common` to the respective participant classes
- Line 25 initializes a function `informTimeout` that when called will call each participant's timeout Function that was defined in the `common` object.
- Line 30 initializes a function `countShips` that takes in an array of booleans and counts the number of true elements, to help determine if all the ships have been hit.
- Line 33 initializes a function `winner` that calculates the winner of the game.

The application is beginning to take shape. We have defined the parameters and helper functions that will be used throughout the Reach contract, now we begin the implementation.

```js
36.  Alice.only(() => {
37.    const board = declassify(interact.getBoard());
38.    const wager = declassify(interact.wager);
39.    const deadline = declassify(interact.deadline);
40.    const shipAlice = declassify(interact.Ship);
41.  });
42.
43.  Alice.publish(wager, deadline, shipAlice).pay(wager);
44.  commit();
45.
46.  Bob.only(() => {
47.    const board = declassify(interact.getBoard());
48.    interact.acceptWager(wager);
49.  });
50.
51.
52.   // Make sure neither parties have acces to each other board
53.
54.  unknowable(Bob, Alice(board));
55.  unknowable(Alice, Bob(board));
56.
57.
58.  Bob.pay(wager).timeout(relativeTime(deadline), () =>
59.    closeTo(Alice, informTimeout)
60.  );
61.
```

- Lines 36 to 42 indicate that it is an action that only Alice performs. Alice gets the `board`, `wager`, `deadline` and `AliceShip` from the front end of our application.
- Line 43 Alice publishes the `wager`, `deadline`, and `shipAlice` variables, and makes them available to the entire application. Alice also pays the wager amount gotten from the front-end into the contract, by appending the `pay` method to the `publish`.

If you'd notice alice makes every other variable available but, keeps the board to only herself. The reason is Bob isn't supposed to know what is on Alice's board and vice versa. So the board of each participant mustn't be shared.

- Lines 46 to 49 indicate an action that only Bob performs. Bob gets the board from the front end and keeps it to himself by not publishing it. Bob also informs the front-end that the wager should be accepted by calling `interact.acceptWager(wager)`.
- Lines 54 and 55 do a check and make sure that neither Alice nor Bob know the contents of the opponent's board. Just an extra layer of security to ensure honesty.
- Line 58 Bob is prompted to pay the wager amount specified by Alice if he accepts the wager. The timeout method ensures that if Bob refuses to pay the wager or for some reason is unable to pay; when the timer runs out, the code block will be executed.

Moving forward to the main application logic, we have a loop that will run until the application execution ends and a winner is decided. It will look something like this.

```js
62.  var statement = [true, 0, 0, shipAlice, shipAlice];
63.  invariant(balance() == 2 * wager);
64.  while (statement[0]) {
65.    const [isTrue, aliceShipCount, BobShipsCount, A, B] = statement
66.    commit();
67.
68.    // Get Alice's Hand
69.    Alice.only(() => {
70.      const handAlice = declassify(interact.getHand());
71.    });
72.    Alice.publish(handAlice);
73.    commit();
74.
75.    // Bob Plays his Hand
76.    // Compare with bobs Board and check if it's been hit
77.
78.    Bob.only(() => {
79.      const bobHand = declassify(interact.getHand());
80.      const BobVal = board[handAlice % 100] == 1;
81.      if (BobVal) {
82.        interact.updateShip();
83.      }
84.      const BobShips = declassify(interact.getShip());
85.      check(countShips(BobShips) <= BobShipsCount + 1, "Dishonest front")
86.    });
87.    Bob.publish(bobHand, BobShips);
88.    commit();
89.
90.    // Alice Checks if the she has been hit and then publishes the result
91.    Alice.only(() => {
92.      const val = board[bobHand % 100] == 1;
93.      if (val) {
94.        interact.updateShip();
95.      }
96.      const AliceShips = declassify(interact.getShip());
97.      check(countShips(AliceShips) <= aliceShipCount + 1, "Dishonest front")
98.
99.    });
100.    Alice.publish(AliceShips);
101.
102.    const countBob = countShips(BobShips)
103.    const countAlice = countShips(AliceShips);
104.
105.    statement = [
106.      AliceShips[14] || BobShips[14] ? false : true,
107.      countAlice,
108.      countBob,
109.      AliceShips, BobShips
110.    ]
111.    continue;
112.  }

```

**NOTE: Reach VARIABLES ARE IMMUTABLE BY DEFAULT AND CAN NOT BE CHANGED EXCEPT PRECEDING THE CONTINUATION OF A LOOP (i.e BEFORE A `CONTINUE`). VARs CAN ONLY BE DECLARED AT THE BEGINING OF A LOOP. THIS RESTRICTION IS PUT IN PLACE FOR SECURITY REASONS**  
Moving on in our application implementation...

- Line 62 declares a Tuple named `statement` that stores different variables used thorough out the execution of the code.
- Line 63 declares the `invariant` block of the loop. This is a condition that will remain true regardless of the steps taken in the loop. As for our use, we declare that the balance in the contract will always be equal to twice the wager amount.
- Line 64 begins the execution of the while loop and ends in line 112.
- Line 65 destructures the `statement` variable and assigns individual variables to each parameter.
- Lines 69 to 72 get Alice's hand and publish it so Bob can use it to compare with his board.
- Lines 78 to 87, Bob gets his hand from the front end as well as doing a comparison to check if Alice's hand was correct. If it's correct Bob updates his `Ship` variable. After all the steps Bob publishes both the updated value of the ship and his hand, that is `BobShips` and `BobHand`.
- Lines 91 to 100, Alice also does a comparison with her board and Bob's hand. After all the checks and comparisons, Alice publishes the "ship" variable to be used elsewhere in the application.
- Lines 102 and 103 use the function declared earlier on line 30, to count and store the number of ships that have been hit on each participant board.
- Lines 105 to 110 show how we mutate the statement variable and input new values.

That is all the logic needed in the loop, for the game to run.

Our application needs a way to determine the winner and pay the total funds to the winner. We will implement that below.

```js
114.  const [isTrue, aliceShipCount, BobShipsCount, AliceShips, BobShips] = statement
115.
116.  const outcome = winner(AliceShips, BobShips);
117.  transfer(2 * wager).to(outcome ? Alice : Bob);
118.  commit();
119.
120.  each([Alice, Bob], () => {
121.    interact.seeOutcome(outcome);
122.  });
123. });
```

- Line 114 destructures all the values from the `statement` variable.
- On line 116 we determine the outcome of the game and return stores a "true" if Alice wins and a "false" if Bob wins
- Line 117 transfers the total amount in the contract to the winner and then performs a commit.
- Lines 120 t0 123, each participant is notified of the outcome of the game.

And that's it with our blockchain implementation.

Running...

```bash
  ../Reach compile
```

we should see an output on the terminal like this

```bash
Verifying knowledge assertions
Verifying for generic connector
  Verifying when ALL participants are honest
  Verifying when NO participants are honest
Checked 43 theorems; No failures!

```

Bringing the application together; will look something like this...

```js
1.  "Reach 0.1";
2.
3. const common = {
4.  getBoard: Fun([], Array(UInt, 100)),
5.  Ship: Array(Bool, 15),
6.  updateShip: Fun([], Null),
7.  seeOutcome: Fun([Bool], Null),
8.  informTimeout: Fun([], Null),
9.  getShip: Fun([], Array(Bool, 15)),
10.  getHand: Fun([], UInt),
11. };
12.
13. export const main = Reach.App(() => {
14.  const Alice = Participant("Alice", {
15.    ...common,
16.    wager: UInt,
17.    deadline: UInt,
18.  });
19.  const Bob = Participant("Bob", {
20.    ...common,
21.    acceptWager: Fun([UInt], Null),
22.  });
23.  init();
24.
25.  const informTimeout = () => {
26.    each([Alice, Bob], () => {
27.      interact.informTimeout();
28.    });
29.  };
30.  const countShips = (ships) => Array.count(ships, (item) => {
31.    return item == true;
32.  });
33.  const winner = (AliceShips, BobShips) => AliceShips[14] ? true : BobShips[14] ? false : true
34.
35.
36.  Alice.only(() => {
37.    const board = declassify(interact.getBoard());
38.    const wager = declassify(interact.wager);
39.    const deadline = declassify(interact.deadline);
40.    const shipAlice = declassify(interact.Ship);
41.  });
42.
43.  Alice.publish(wager, deadline, shipAlice).pay(wager);
44.  commit();
45.
46.  Bob.only(() => {
47.    const board = declassify(interact.getBoard());
48.    interact.acceptWager(wager);
49.  });
50.
51.  /**
52.   * Make sure neither parties have acces to each other board
53.   */
54.  unknowable(Bob, Alice(board));
55.  unknowable(Alice, Bob(board));
56.
57.
58.  Bob.pay(wager).timeout(relativeTime(deadline), () =>
59.    closeTo(Alice, informTimeout)
60.  );
61.
62.  var statement = [true, 0, 0, shipAlice, shipAlice];
63.  invariant(balance() == 2 * wager);
64.  while (statement[0]) {
65.    const [isTrue, aliceShipCount, BobShipsCount, A, B] = statement
66.    commit();
67.
68.    // Get Alice's Hand
69.    Alice.only(() => {
70.      const handAlice = declassify(interact.getHand());
71.    });
72.    Alice.publish(handAlice);
73.    commit();
74.
75.    // Bob Plays his Hand
76.    // Compare with bobs Board and check if it's been hit
77.
78.    Bob.only(() => {
79.      const bobHand = declassify(interact.getHand());
80.      const BobVal = board[handAlice % 100] == 1;
81.      if (BobVal) {
82.        interact.updateShip();
83.      }
84.      const BobShips = declassify(interact.getShip());
85.      check(countShips(BobShips) <= BobShipsCount + 1, "Dishonest front")
86.    });
87.    Bob.publish(bobHand, BobShips);
88.    commit();
89.
90.    // Alice Checks if the she has been hit and then publishes the result
91.    Alice.only(() => {
92.      const val = board[bobHand % 100] == 1;
93.      if (val) {
94.        interact.updateShip();
95.      }
96.      const AliceShips = declassify(interact.getShip());
97.      check(countShips(AliceShips) <= aliceShipCount + 1, "Dishonest front")
98.
99.    });
100.    Alice.publish(AliceShips);
101.
102.    const countBob = countShips(BobShips)
103.    const countAlice = countShips(AliceShips);
104.
105.    statement = [
106.      AliceShips[14] || BobShips[14] ? false : true,
107.      countAlice,
108.      countBob,
109.      AliceShips, BobShips
110.    ]
111.    continue;
112.  }
113.
114.  const [isTrue, aliceShipCount, BobShipsCount, AliceShips, BobShips] = statement
115.
116.  const outcome = winner(AliceShips, BobShips);
117.  transfer(2 * wager).to(outcome ? Alice : Bob);
118.  commit();
119.
120.  each([Alice, Bob], () => {
121.    interact.seeOutcome(outcome);
122.  });
123. });
```

## Assertion Insertion

Due to the simplicity of the program, there's no need for assertions in the code.

## Possible Additions

Our code works perfectly fine as it is now. But can be implemented and represented better by using APIs instead of Participants for the player interactions

## Testing

We test our application by editing the `index.mjs` file that was created when we ran

```bash
../Reach init
```

We define our test data to use for simulating user input and data

```js
4. export const Data = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
5. export const playerChoice = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 8, 8,
];
```

On the Data array "0"s represent spaces on the board without ships and the "1"s represent ships.

The player choice array contains all the moves the test suite will guess on the board.

```js
9. const stdlib = loadStdlib();
10. const startingBalance = stdlib.parseCurrency(100);
11.
12. const accAlice = await stdlib.newTestAccount(startingBalance);
13. const accBob = await stdlib.newTestAccount(startingBalance);
14.
15. const getBalance = async (who) =>
16.  stdlib.formatCurrency(await stdlib.balanceOf(who), 4);
17. const beforeAlice = await getBalance(accAlice);
18. const beforeBob = await getBalance(accBob);
19.
20. const ctcAlice = accAlice.contract(backend);
21. const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
```

The above code block does the following

- We load the Reach standard library on line 9
- On line 10 we create a starting balance for each player
- On lines 12 and 13 we create two test accounts and fund them programmatically
- On line 15 we create a `getBalance` helper function we use later in the application.
- On lines 17 and 18 we get the balances of the accounts before they interact with the contract we wrote in the `index.rsh`.
- On line 20 participant `Alice deploys the contract and Bob attaches to that contract on line 21

Now let's define the equivalent of the `common` variable in our `index.rsh` file. We name it `Player` instead and it will mirror the `common` variable.
The Player function will return an object and will be spread to both participant's interact objects.

```js
1. const Player = () => {
2.  let Ship = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
3.  let i =0
4.  const getBoard = () => {
5.    console.log(`Bob asked to give the preimage.`);
6.    return Data;
7.  };
8.  const updateShip = () => {
9.    for (let singleShip in Ship) {
10.      if (Ship[singleShip] === false) {
11.        Ship[singleShip] = true;
12.        break;
13.      }
14.    }
15.  };
16.  const getShip = () => {
17.    return Ship;
18.  };
19.  const informTimeout = () => {
20.    console.log(`someone observed a timeout`);
21.  };
22.  const seeOutcome = () => {
23.    console.log(`someone saw outcome `);
24.  };
25.  const getHand = ()=>{
26.    i++
27.    return  playerChoice[(i-1)%10]
28.  }
29.  return {
30.    Ship,
31.    getBoard,
32.    updateShip,
33.    informTimeout,
34.    seeOutcome,
35.    getShip,
36.    getHand
37.  };
38. };
```

In the code block above, we have a factory function that returns all the needed parameters which we defined during the implementation of the Reach code.
we have

- `Ship` variable that will be updated when given the orders from the contract.
- `getBoard` function that returns the player board with the position where ships are placed.
- `updateShip` which updates the `Ship` variable by changing a single value from false to true.
- `informTimeout` which just logs a warning to the console.
- `seeOutcome` that prints the outcome of the game to the console.
- `getShip` which is used in the contract to determine the current state of the `Ship` variable.
- `getHand` that gets the current hand of the player.

We start interacting with the contract and fill up the participant's interface with the mirror of the smart contract equivalent, and wrap it in a "promise.all" statement to make sure they both run and resolve simultaneously.

```js
61. await Promise.all([
62.  backend.Alice(ctcAlice, {
63.    ...Player(),
64.    amt: stdlib.parseCurrency(25),
65.    deadline: 10,
66.    wager: stdlib.parseCurrency(10),
67.  }),
68.  backend.Bob(ctcBob, {
69.    ...Player(),
70.    acceptWager: async () => {
71.      if (Math.random() >= 1) {
72.        for (let i = 0; i < 10; i++) {
73.          console.log(`  Bob takes his sweet time...`);
74.          await stdlib.wait(1);
75.        }
76.      } else {
77.          await stdlib.wait(1);
78.        console.log(`Bob accepts the wager .`);
79.      }
80.    },
81.  }),
82. ]);
```

The final applcaition should look like this:

```js
1. import { loadStdlib } from "@reach-sh/stdlib";
2. import * as backend from "./build/index.main.mjs";
3.
4. export const Data = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
5. export const playerChoice = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 8, 8
];
6.
7. const stdlib = loadStdlib();
8. const startingBalance = stdlib.parseCurrency(100);
9.
10. const accAlice = await stdlib.newTestAccount(startingBalance);
11. const accBob = await stdlib.newTestAccount(startingBalance);
12.
13. const getBalance = async (who) =>
14.   stdlib.formatCurrency(await stdlib.balanceOf(who), 4);
15. const beforeAlice = await getBalance(accAlice);
16. const beforeBob = await getBalance(accBob);
17.
18. const ctcAlice = accAlice.contract(backend);
19. const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
20. const Player = () => {
21.   let Ship = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
22.   let i =0
23.   const getBoard = () => {
24.     console.log(`Bob asked to give the preimage.`);
25.     return Data;
26.   };
27.   const updateShip = () => {
28.     for (let singleShip in Ship) {
29.       if (Ship[singleShip] === false) {
30.         Ship[singleShip] = true;
31.         break;
32.       }
33.     }
34.   };
35.   const getShip = () => {
36.     return Ship;
37.   };
38.   const informTimeout = () => {
39.     console.log(`someone observed a timeout`);
40.   };
41.   const seeOutcome = () => {
42.     console.log(`someone saw outcome `);
43.   };
44.   const getHand = ()=>{
45.     i++
46.     return  playerChoice[(i-1)%10]
47.   }
48.   return {
49.     Ship,
50.     getBoard,
51.     updateShip,
52.     informTimeout,
53.     seeOutcome,
54.     getShip,
55.     getHand
56.   };
57. };
58.
59. await Promise.all([
60.   backend.Alice(ctcAlice, {
61.     ...Player(),
62.     amt: stdlib.parseCurrency(25),
63.     deadline: 10,
64.     wager: stdlib.parseCurrency(10),
65.   }),
66.   backend.Bob(ctcBob, {
67.     ...Player(),
68.     acceptWager: async () => {
69.       if (Math.random() >= 1) {
70.         for (let i = 0; i < 10; i++) {
71.           console.log(`  Bob takes his sweet time...`);
72.           await stdlib.wait(1);
73.         }
74.       } else {
75.           await stdlib.wait(1);
76.         console.log(`Bob accepts the wager .`);
77.       }
78.     },
79.   }),
80. ]);
81.
82. const afterAlice = await getBalance(accAlice);
83. const afterBob = await getBalance(accBob);
84.
85. console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
86. console.log(`Bob went from ${beforeBob} to ${afterBob}.`);
87. //

```

Now run

```
../Reach run
```

That is it. You should have an implementation of scheme and a test file running on your local machine.

## Further Learning

If you want to implement a more complex front-end Application using a front-end library (REACT, Vue, Angular, etc). Continue to get an idea of how Reach can be used when building fullstack blockchain applications.

NOTE: To fully utilize this section you need to have the repo locally [link](https://github.com/prince-hope1975/scheme)

Now we have a complete contract backend and test suite, now we can write the frontend. You can use any frontend library of your choice. In our case, we have chosen to use React.  
In the React App navigate to `scheme/src/factories/playerFactory.js`. We are defining the logic for the participants

```js
1. import Gameboard from "./gameboardFactory";
2. import * as backend from "../build/index.main.mjs";
3. import { loadStdlib } from "@reach-sh/stdlib";
4.
5. // Helper Funtions
6.
7. const callbackFn = () => {
8.   let fn;
9.   const setFn = (fxn) => {
10.     fn = fxn;
11.     console.log("fxn", fxn);
12.   };
13.   const callFn = (val) => {
14.     fn(val);
15.   };
16.   return {
17.     setFn,
18.     callFn,
19.   };
20. };
21. const Fxn = callbackFn();
22. const Waiter = callbackFn();
23.
24. const Reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));
25.
26. // Participant classes
27.
28. class Player {
29.   constructor(name, acc) {
30.     this.name = name;
31.     this.ctc = null;
32.     this.Ship = [
33.       false,
34.       false,
35.       false,
36.       false,
37.       false,
38.       false,
39.      false,
40.      false,
41.      false,
42.      false,
43.      false,
44.      false,
45.      false,
46.      false,
47.      false,
48.    ];
49.    this.acc = acc;
50.    this.gameBoard = new Gameboard();
51.  }
52.  updateShip() {
53.    for (let singleShip in this.Ship) {
54.      if (this.Ship[singleShip] === false) {
55.        this.Ship[singleShip] = true;
56.        break;
57.      }
58.    }
59.  }
60.  getBoard() {
61.    return this.gameBoard.board.map((item) => {
62.      if (item.hasShip !== false) return 1;
63.      return 0;
64.    });
65.  }
66.  getShip() {
67.    return this.Ship;
68.  }
69.  informTimeOut() {
70.    console.log("You observed a timeout");
71.  }
72.  setPlayer(Bool) {
73.    this.currentPlayer = Bool;
74.  }
75.  async getHand() {
76.    console.log(`Please Play your hand ${this.name}`);
77.    if (this.name.toLowerCase() !== "computer") {
78.      alert("All systems go! go! go!, Fireeeeee");
79.    }
80.    const hand = await new Promise((resolveHandP) => {
81.      if (this.name.toLowerCase() === "computer") {
82.        Waiter.callFn(true);
83.      }
84.      this.resolveHandP = resolveHandP;
85.      Fxn.setFn(resolveHandP);
86.    });
87.    return hand;
88.  }
89.  async waitTillHandGot() {
90.    const hand = await new Promise((resolveHandP) => {
91.      Waiter.setFn(resolveHandP);
92.    });
93.    return hand;
94.  }
95.  playHand(hand) {
96.    console.log("hand,", hand);
97.    Fxn.callFn(hand);
98.    if (this.name.toLowerCase() === "computer") {
99.      alert(
100.        "Enemy has fired, we are sendig the intel to HQ\n Please do not shoot until instructed to"
101.      );
102.    }
103.   }
104.  fireShot(location, gameboard) {
105.    if (gameboard.opponentBoard()[location] === "empty") {
106.      gameboard.receiveShot(location);
107.    }
108.  }
109. }
110.
111.
112. // Deployer class which inherits from general player class
113.
114. export class Deployer extends Player {
115.  setWager(wager) {
116.    this.wager = wager;
117.    console.log(this);
118.  }
119.   async deploy(reach) {
120.     this.ctc = this.acc.contract(backend);
121.     this.wager = reach.parseCurrency(this.wager); // UInt
122.     this.deadline = {
123.       ETH: 10,
124.       ALGO: 100,
125.       CFX: 1000,
126.     }[reach.connector]; // UInt
127.     backend.Alice(this.ctc, this);
128.     alert("Contract is being deployed... Please wait");
129.     const ctcInfoStr = JSON.stringify(await this.ctc.getInfo(), null, 2);
130.     console.log("info", ctcInfoStr);
131.     alert("Contract successfully deployed, Please wait for someone to attach");
132.     this.ctcInfoStr = ctcInfoStr;
133.   }
134. }
135.
136. export class Attacher extends Player {
137.   acceptWager(wagerAtomic) {
138.     const wager = reach.formatCurrency(wagerAtomic, 4);
139.     console.log("Accepted Wager, ", wager);
140.   }
141.
142.   async attach(ctcInfoStr) {
143.     this.ctc = this.acc.contract(backend, JSON.parse(ctcInfoStr));
144.     backend.Bob(this.ctc, this);
145.     await this.ctc.getInfo();
146.     alert(
147.       "Contract has been sucessfully attached to, Please wait till you are given orders to fire"
148.     );
149.   }
150. }
151.
152. export default Player;
```

We'll navigate to the `scheme/src/components/game_window/GameWindow.js` which houses the initial game logic

```js
1.  import React, {
2.   useState,
3.   useContext,
4.   useEffect,
5.   useRef,
6.   useCallback,
7. } from "react";
8. import Init from "./Init";
9. import GameSetup from "./GameSetup";
10. import GameStart from "./GameStart";
11. import WinnerScreen from "./WinnerScreen";
12. import { store } from "../../GameController";
13. import {
14.   MainWindow,
15.   VolumeContainer,
16. } from "../styled_components/gameControllerStyles";
17. import music from "../../assets/sounds/music.mp3";
18. import backgroundSound from "../../assets/sounds/background_sound.mp3";
19. import fireShot from "../../assets/sounds/fire_shot.mp3";
20. import shotHit from "../../assets/sounds/shot_hit.mp3";
21. import shotMiss from "../../assets/sounds/shot_miss.mp3";
22. import VolumeOn from "../icons/VolumeOn";
23. import VolumeOff from "../icons/VolumeOff";
24.
25. import secret from "../../secret";
26.
27.
28.  // REACH
29.
30. import { loadStdlib } from "@reach-sh/stdlib";
31. import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
32. const Reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO-live"));
33.
34. reach.setWalletFallback(
35.   reach.walletFallback({
36.     providerEnv: "TestNet",
37.     MyAlgoConnect,
38.   })
39. );
40.
41. export default function GameWindow() {
42.   const { state, dispatch } = useContext(store);
43.   const { timeline, winner } = state;
44.   const [dismount, setDismount] = useState(false);
45.   const [volume, setVolume] = useState(true);
46.
47.   // pass to props to avoiding directly passing a setState function
48.   const setVolumeProps = (value) => {
49.     value
50.       ? (musicPlayer.current.volume = 0.5)
51.       : (musicPlayer.current.volume = 0);
52.     setVolume(value);
53.   };
54.
55.   const musicPlayer = useRef();
56.   // I provide two sound players so sound effects can "overlap"
57.   const soundPlayer = useRef();
58.   const soundPlayer2 = useRef();
59.
60.   // cancel animation coming into this component
61.   useEffect(() => {
62.     setDismount(false);
63.     console.log("hi");
64.   }, [setDismount]);
65.
66.   useEffect(() => {
67.     (async () => {
68.       try {
69.         const newAccount = await reach.newAccountFromMnemonic(secret);
70.         console.log("newAccount", newAccount);
71.
72.         dispatch({ type: "SET_ACC", payload: newAccount });
73.         dispatch({ type: "SET_BOB", payload: newAccount });
74.       } catch (error) {
75.         console.error(error);
76.       }
77.     })();
78.   }, []);
79.
80.   // to avoid passing a setState directly, pass this helper function
81.   const setDismountProp = (state) => {
82.     setDismount(state);
83.   };
84.
85.   const playBgSound = useCallback(
86.     (sound, customVolume) => {
87.       if (volume) {
88.         const newVol = customVolume || 0.5;
89.         if (!musicPlayer.current.paused) musicPlayer.current.pause();
90.         musicPlayer.current.src =
91.           sound === "music"
92.             ? music
93.             : sound === "bgSound"
94.             ? backgroundSound
95.             : null;
96.         musicPlayer.current.load();
97.         musicPlayer.current.volume = newVol;
98.         musicPlayer.current.play();
99.       }
100.     },
101.    [volume]
102.  );
103.
104.  const playSound = useCallback(
105.    (sound, customVolume) => {
106.      if (volume) {
107.        const newVol = customVolume || 0.5;
108.        let player = soundPlayer;
109.        if (!soundPlayer.current.paused) {
110.          player = soundPlayer2;
111.        }
112.        player.current.src =
113.          sound === "fireShot"
114.            ? fireShot
115.            : sound === "shotMiss"
116.            ? shotMiss
117.            : sound === "shotHit"
118.            ? shotHit
119.            : null;
120.        player.current.load();
121.        player.current.volume = newVol;
122.        player.current.play();
123.      }
124.    },
125.    [volume]
126.  );
127.
128.  const checkIfMusicPaused = () => {
129.    return musicPlayer.current.paused;
130.  };
131.
132.  const fadeOutMusic = () => {
133.    const fadeOut = setInterval(() => {
134.      if (musicPlayer.current.volume <= 0.04) {
135.        musicPlayer.current.volume = 0;
136.        clearInterval(fadeOut);
137.      } else {
138.        musicPlayer.current.volume = musicPlayer.current.volume - 0.03;
139.      }
140.    }, 30);
141.  };
142.
143.  // conditionally render based on the app state "timeline"
144.  const renderChild = (timeline) => {
145.    return timeline === "init" ? (
146.      <Init
147.        playBgSound={playBgSound}
148.        checkIfMusicPaused={checkIfMusicPaused}
149.        dismount={dismount}
150.        setDismount={setDismountProp}
151.      />
152.    ) : timeline === "setup" ? (
153.      <GameSetup
154.        dismount={dismount}
155.        fadeOutMusic={fadeOutMusic}
156.        setDismount={setDismountProp}
157.      />
158.    ) : winner ? (
159.      <WinnerScreen playBgSound={playBgSound} />
160.    ) : !winner ? (
161.      <GameStart
162.        playSound={playSound}
163.        playBgSound={playBgSound}
164.        setDismount={setDismount}
165.      />
166.    ) : null;
167.  };
168.
169.  return (
170.    <MainWindow>
171.      <VolumeContainer timeline={timeline}>
172.        {volume ? (
173.          <VolumeOn setVolume={setVolumeProps} />
174.        ) : (
175.          <VolumeOff setVolume={setVolumeProps} />
176.        )}
177.      </VolumeContainer>
178.      {renderChild(timeline)}
179.      <>
180.        <audio onEnded={() => musicPlayer.current.play()} ref={musicPlayer} />
181.        <audio ref={soundPlayer} />
182.        <audio ref={soundPlayer2} />
183.      </>
184.    </MainWindow>
185.  );
186. }
```

The front-end structure is fairly complex so you'll have to properly go through the repository to get the pieces together.

## Discussion

Congrats on finishing this tutorial. You implemented Your very own Pyramid scheme and are on your way to becoming one of the greats.

If you found this tutorial rewarding please let us know on [the Discord Community](https://discord.gg/AZsgcXu).

Thanks!!
