<p align="center">
  <a href="" rel="noopener">
 <img src="https://docs.reach.sh/assets/logo.png" alt="Project logo"></a>
</p>
<h3 align="center">Pyramid Scheme </h3>

<div align="center">


</div>

## Tutorial: Pyramid Scheme

Simply put a pyramid/Ponzi scheme is a fraudulent investment that is set up in a way, that requires using new members' deposits to pay out old members. More on that [here](https://www.investopedia.com/insights/what-is-a-pyramid-scheme/).  

 If you've ever wondered what it would be like to build your very own fully functional, money-making pyramid scheme, that's also blockchain-based, and you would like to join the ranks of the great Ponzi Schemers, then this is the tutorial for you. 
 
 The tutorial will walk you through how to get started using `Reach`, `Javascript`, and `Next` to build your very own pyramid scheme and deploy it to the Algorand chain or any of the chains supported by reach.

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

AWe also assume that you've gone through the installation process or have a copy of Reach pre-installed in ~/reach so you can write

`$ ../reach version`

You should start by initializing your project. In the current directory start by pasting the below command in the terminal.

`$ ../reach init`

This initializes a new Reach project and creates two files, `index.rsh` and `index.mjs`.

Open your code editor of choice( Recommended : Vs code). And navigate to the

Your folder structure should look something like this, with the `Scheme` folder bing nested in the `Reach` folder.

<div align="center">
  <img alt="Pyramid Scheme App" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1657796311865/8kDImR2fp.png" width="1000"><br>
  <sup>Folder Structure <sup>
</div>

For our frontend to access the backend code we would need to create a build that contains our ABI and other binaries.  
Run the following command without the `$` in your terminal to create a build folder in your repo.

```bash
$ ../reach compile
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

- Line 1 specifies the version of Reach that the compiler will use during the compilation process.

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
- Line 2 imports everything from the build folder we generated by running `$ ..Reach compile` in our terminal earlier. It gives us access to a variable `backend` that accesses all the generated code from our `.rsh` file.
- On line 5 we parse a number into blockchain readable format, which will be used for processing transactions using network tokens. Most blockchains use minuscule units when processing transactions on their consensus networks, for Algorand it's the micro Algo and ETH it's the Wei or Gwei. We are basically doing a conversion of units.
- On line 7 we create test (blockchain) accounts we can use to interact with our local blockchain and our contract in our `.rsh` file(Yes Reach helps you test your code by running a dev-net). We store these accounts in variables `accAlice` and `accBob`
- On line 12 we are deploying a contract to the blockchain using the generated backend file.We store the contract instance in a const `ctcAlice`
- On line 13 we attach to that contract by giving the `contract` method a second input which is the contract info of the deployed contract in the earlier step.
- On line 16 we await a `promise.all` statement that resolves two promises, that houses all the function, methods and variables our participants access in the `rsh` file. The promises begin on lines 15 and 19. More on promises [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- We log goodbye to our participants at the end of the file to signify the end of the code execution.

This is now enough for Reach to compile and run our program. Let's try running

```bash
../reach run
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
We will focus on our smart contract logic initially and then mimick its functionality in the test (index.mjs) file.  

Proceed to replace the code in the `index.mjs` file with the code below.  
 We start by creating our helper function and our interface object for the deployer. Essentially, the interface object is an object that contains all the functions and variables that are accessible to a participant, in this case, our deployer.

**Note the comments that start at line 3, they are very useful in understanding what we're building. They are a form of pseudo-code and are highly recommended when building out software**

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
11. const returnTheLess = (x, y) => (x > y ? y : x);
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

- We create a helper function `returnTheLess` on line 11 which simply takes in two numbers (UInts in the case of reach) and outputs the smaller number. We make use of the function later in the contract.
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

Merely looking at the above code block you'd notice that we use the keyword, `API` as opposed to `Participant`. You might be wondering what the difference is. Well put simply `API`s allow greater flexibility, and is very much preferred over `participant` or `participantClass`(deprecated) for this use case, at least for us. _Find out more about [APIs here](https://docs.reach.sh/rsh/appinit/#rsh_API)_.  
Getting into the code, we notice a few things

- Line 22 begins the initialization of an **API** called Schemers, that's stored in the S const. The `API` has access to the following functions
  - `registerForScheme`: This takes and returns an address that will be used in the registration process
  - `timesUp`: This is used to notify participants when the contract ends due to time constraints.
  - `checkBalnce`: This takes in no argument but returns the balance of the user in the contract.
  - `withdraw`: This allows users to collect rewards based on the people referred into the Pyramid scheme.
- Line 29 initializes our malicious API `T` that will enable the removal of all the funds stored in the contract. It houses only one function in its interact object.
  - `steal`: This takes in no argument and simply returns a bool to signify that it's been done.
- On line 32 we initialize the contract execution by calling `init()`.

The application is beginning to take shape. We have defined the parameters and helper functions that will be used throughout the Reach contract, now we begin the implementation.

```js
33. // Members of the pyramid scheme
34.   D.only(() => {
35.     // The deployer gets the price and deadline and publishes them to the entire contract
36.     const price = declassify(interact.price);
37.     const deadline = declassify(interact.deadline);
38.   });
39.   D.publish(price, deadline);
40.   commit();
41.   D.publish();
42.
43.   const deadlineBlock = relativeTime(deadline);
44.
45.   D.interact.ready();
46.   /**
47.    * @definition
48.    * Defining maps to store all my data that will be used through out the app
49.    */
50.   const Users = new Map(
51.     Object({
52.       address: Address,
53.       numberOfChildren: UInt,
54.       totalUnder: UInt,
55.       parent: Address,
56.       allowedToWithdraw: UInt,
57.     })
58.   );
59.   const deployerObj = {
60.     address: D,
61.     numberOfChildren: 0,
62.     totalUnder: 0,
63.     parent: D,
64.     allowedToWithdraw: 0,
65.   };
66.
67.   Users[D] = deployerObj;
```

Some elements of the above code snippet had been explored earlier so we won't spend too much time here. Regardless a refresher is in order before we proceed.

REFRESHER AND NEW CONCEPTS:

- `PARTICIPANT.ONLY` block defines blockchain logic that is specific to that participant. Any code written inside the only block is locally scoped unless explicitly declared otherwise
- `PUBLISH` is used to make a variable declared in the only block, accessible to other participants. This moves the application from a Step to a Consensus step.
- `COMMIT` helps in moving the Consensus step back to a Step.

That being said we can commence

- Lines 34 through 41 show how the deployer gets the `price` and `deadline` from the frontend using the interact method, declassifies it making it accessible and readable, then proceeds to store the values in their respective variables and publish the values to the contract.  
  We publish a price and deadline because they would need to be accessed by the rest of the application.
- Line 43 we create a const `deadlineBlock` and pass our deadline as a parameter to a reach inbuilt function `relativeTime` that returns a time argument that can be used to tell our contract when to end its execution.
- Line 45 notifies our Front-end that most parameters have been set.
- On line 50 we create a new map `User` and provide a data structure that will fit into the map. Maps in reach by default use `Address` type for its key, then the value can be specified. In our case, the value is an object that contains 5 parameters each with its unique type.  
  _Learn more about Maps [Here](https://docs.reach.sh/rsh/consensus/#rsh_Map)_  
  _Learn more about Types [Here](https://docs.reach.sh/rsh/compute/#rsh_Object)_
- On line 59 we create a const `deployerObj` which houses the params, we will use as a default value for our APIs that are interacting with the contract.

## MAIN LOGIC

This is where things get serious, We have been working on our application so far but have not really implemented any logic used in an actual pyramid scheme. Pay close attention because this is where things get serious.

Reach By default is Immutable, this is done to ensure that your programs are the safest they can be. But our application would need a way to store, append, delete, change or mutate data. You might be wondering if a Reach variable that is declared with `const` is immutable then how do we go about storing;

- Who registers under who
- How many people have registered under a user
- When a user can withdraw
- How much a user can withdraw, etc.

Luckily, the Reach creators are smart. And they give us the ability to mutate values only within a while loop. Note that this is still under strict conditions and not every variable in a while loop is mutable.

There are two ways to implement our logic `Plane while loop` & `parallelReduce`, but for the sake of this tutorial we will use the second method.

`The code will look something like this`
<div id="this"></div>
```js
const LHS =
  parallelReduce(INIT_EXPR)
  .define(() => DEFINE_BLOCK)
  .invariant(INVARIANT_EXPR, ?INVARIANT_MSG)
  .while(COND_EXPR)
  .api(API_EXPR,
    ASSUME_EXPR,
    PAY_EXPR,
    CONSENSUS_EXPR)
  .timeout(DELAY_EXPR, () =>
    TIMEOUT_BLOCK);
```

**EXPLANATION:**  
 Let's go through simple explanatios for each block.

- `LHS` and `INIT_EXPR`: The are initialization components of the while loop. At the beginning of the execution of the while loop `LHS` = `INIT_EXPR`. But the value in the `LHS` can be modified at the end of every concensus step in the parallelReduce, by returning a new value, provided the Types remain the same
- `Parallel Reduce` : Essentially this is just a fancy loop in reach.
- `.define`: This encloses a block `DEFINE_BLOCK` you can use to define multiple functions that your participants can call. So every function that is defined in this block can be called anywhere in the parallelReduce except for the `INIT_EXPR`.
- `.invariant`: The invariant houses a expression `INVARIANT_EXPR` that should alway evaluate to true no matter the loops execution. i.e, before, within and after the loop's execution.
- `.while`: This takes a `COND_EXPR` that's either true or false, and it will define if the loop execution will continue or stop.
- `.api`: This method handles the steps and api api method takes 4 parameters
  - `API_EXPR` which defines the specific function call in an api. eg. `Alice.getHand`
  - `ASSUME_EXPR` which is a block that contains all the assumptions that the API will make
  - `PAY_EXPR` which is a function call that specifies how much the `api` caller will pay into the contract.
  - `CONSENSUS_EXPR` will specify all the steps the caller will take in the consensus step of the contract.

### **Main Logic BreakDown**:

Moving on we seperate our logic into blocks to help you get a better understanding. You can use the above example to sort of get a feel of what we're doing.

```js
69.   const [keepGoing, howMany, total] = parallelReduce([true, 0, 0])
```

- We initialize the `LHS` and `INIT_EXPR` with a tuple of types _Bool_, _UInt_ and _UInt_ respectively.

### The Define Block

lets start defining all the functions our participants will call; `register`, `user_balance` and `withdraw_accumulated_funds`.

```js
70.     .define(() => {
71.       const register = (parent_address, current_user_address) => {
72.         const parent = fromSome(Users[parent_address], deployerObj);
73.         check(!(current_user_address == D), "cannot register as deployer");
74.         check(isNone(Users[current_user_address]), "Already a member sorry");
75.         check(parent.numberOfChildren < 2, "No empty slots for that user");
76.         return () => {
77.           const currentUser = fromSome(
78.             Users[current_user_address],
79.             deployerObj
80.           );
81.
82.           Users[parent_address] = {
83.             ...parent,
84.             numberOfChildren: parent.numberOfChildren + 1,
85.             totalUnder: parent.totalUnder + 1,
86.             allowedToWithdraw: parent.allowedToWithdraw + price,
87.           };
88.           Users[current_user_address] = {
89.             ...currentUser,
90.             address: current_user_address,
91.             parent: parent_address,
92.           };
93.          return [keepGoing, howMany + 1, total + price];
94.            };
95.        };
96.      
97.
98.        const user_balance = (current_user_address) => {
99.            check(isSome(Users[current_user_address]), "Not a member");
100.         return () => {
101.           const currentUser = fromSome(
102.             Users[current_user_address],
103.             deployerObj
104.           );
105.           return currentUser.allowedToWithdraw;
106.         };
107.       };
108.       const withdraw_accumulated_funds = (current_user_address, confirm) => {
109.         const user = fromSome(Users[current_user_address], deployerObj);
110.         const parent = fromSome(Users[user.parent], deployerObj);
111.         check(!(current_user_address == D), "You cannot withdraw as deployer");
112.         check(!(user.allowedToWithdraw == 0), "Insufficient Balance");
113.         check(user.numberOfChildren >= 2, "Need at least two down lines");
114.         check(balance() > price);
115.         return () => {
116.           const amt = (user.allowedToWithdraw * 30) / 100;
117.           const amount = returnTheLess(balance(), amt);
118.           //   We are adding the remaining 60% to the parent's balance
119.           Users[parent.address] = {
120.             ...parent,
121.             allowedToWithdraw: parent.allowedToWithdraw + amount * 2,
122.           };
123.           Users[current_user_address] = { ...user, allowedToWithdraw: 0 };
124.
125.          transfer(amount).to(current_user_address);
126.          confirm(amount);
127.          const final = total - amount;
128.          return [keepGoing, howMany, final];
129.        };
130.      };
131.    })

```
#### register
- On line 71 we create our function `register` that will take in two arguments `parent_address` and `current_user_address`.
- On line 72 inside in our `register` function we create a const `parent` that uses `fromSome` to check if the `Users` Map we defined on line 50 contains data on the `parent_address` and returns the stored value if it exists, if it doesn't exist we default to the `DeployerObj` that we defined in line 55.
- On line 71 we check if the address calling the function is that of the deployer, on 74 we confirm that the user isn't already part of the pyramid scheme, on line 75 we confirm that the user isn't registerinng under a parent whose slot is full.
- The function `register` returns an anonymous function. This is to aid us during our api calls later in the contract.
- Lines 82 through to 92 involve us appending the necessary data to the values that correspond to the `parent_address` and `user_address`. It's very similar to how we would do this in a language like javascript.
- Finally on line 94 we return a Tuple with the same length and types as that of the `INIT_EXPR`. We use this return value to modify the value of our `LHS` in our case we are modifying the values of `keepGoing`, `howMany`, & `total` that we initialized on line 69.

#### user_balance
-  On line 98 we initilaze the `user_balance` function that allow each participant to check their balance. 
- We only run one check on line 99 that checks if the current caller is a member of the `Users` map, using the `isSome` method that returns true if a value exists for that address.
- we return an anonymous function on line 100, that checks for the current balance of that user by calling `currentUser.allowedToWithdraw`

#### withdraw_accumulated_funds
- on line 108 we create a fucntion `withdraw_accumulated_funds` that will transfer a specified amount to the caller of the API function according to the amount of users registerd under.
- We run a couple checks 
  - we ensure the deployer cannot call this function.
  - we ensure that the user at least has some allocated amount to withdraw before calling the function
  - we ensure the user trying to withdraw has referred at least two people before trying to make a withdrawal.
  - we ensure the balance of the contract is always more than the money being transferred out.
- On line 115 we return a function that runs a couple steps
  - On line 116 we create a variable `amt` that gets 30% of their allocated amount. 
  - On line 117 we create a const `amount` and pass some argument through our helper function we created before the contract's intitialization on line 11. The function takes the balance of the contract and the `amt` and returns the smaller amount, to ensure we are never transferring more than what is available in the contract. This is just an extra precaution.
- On line 119 we update the amount that the current caller's parent can withdraw by increamenting the value by `amount *2` .
- On line 123 we reset the caller's balance to 0.
- On line 125 we transfer the `amount` to the current caller.
- On line 128 we return a modified Tuple with the same length and types as that initialized in the beginning of the `parallelReduce`.

### ivariant, while and api
We proceed to using the constants, variables and function that we defined earlier in our contract executuion.  
Recall we defined what all these methods do in reach, feel free to make refernce to [this](#this)
```js
132.    .invariant(balance() == total)
133.    .while(keepGoing)
134.    .api(
135.      S.registerForScheme,
136.      (k) => {
137.        const _ = register(k, this);
138.      },
139.      (_) => price,
140.      (h, k) => {
141.        k(this);
142.        return register(h, this)();
143.      }
144.    )
145.    .api(
146.      S.checkBalance,
147.      () => {
148.        const _ = user_balance(this);
149.      },
150.      () => 0,
151.      (k) => {
152.        const amount = user_balance(this)();
153.        k(amount);
154.        return [keepGoing, howMany, total];
155.      }
156.    )
157.    .api(
158.      S.withdraw,
159.      () => {
160.        const _ = withdraw_accumulated_funds(this, () => 0);
161.      },
162.      () => 0,
163.      (k) => {
164.        return withdraw_accumulated_funds(this, k)();
165.      }
166.    )
167.    .api(
168.      T.steal,
169.      () => check(this == D, "You are not the deployer, stop trying"),
170.      () => 0,
171.      (k) => {
172.        check(this == D, "You are not the deployer ma boy");
173.        k(true);
174.        return [false, howMany, total];
175.      }
176.    )
177.    .timeout(deadlineBlock, () => {
178.      const [[], k] = call(S.timesUp);
179.      k(true);
180.      return [false, howMany, total];
181.    });
182.  transfer(balance()).to(D);
183.  commit();
184.  exit();
185.});
```

#### invariant
- The invariant as explained earlier is a condition that should always evaluate to true before and after the loop execution. 
- We proceed on line 132 to create our invariant which says that the balance in the contract will always equal the const `total` that we defined at the beginning of the `parallelReduce` on the `LHS`. Essentially anywhere we transfer money in or out of the contract we also proceed to update the `total`, which we did in our `withdraw_accumulated_funds` funtion. If you do not do this reach will not allow you compile your code and will throw a bunch error when compiling.
#### while
- The while loop is given the const `keepGoing` as it's argument. 
#### api
We have 4 api calls in our parallel reduce `S.registerForScheme `,` S.checkBalance`,` S.withdraw`, ` T.steal`. Lets proceed to explaining them.
Because we already defined most of our functions in the `.define` block, our api logic will be relatively simple.
- Line 135 contains the api call `S.registerForScheme`.
  - On line 137 we run checks by calling the `register` function once 
  - On line 139 we request the caller pay the price into the contract
  - On line 139 we begin the consensus expression. We return the users address to the frontend by calling `k(this)` where `this` is the address of the user currently calling the contract.
  - On line 142 we call the register function twice and pass the parameter `h` which is gotten from the frontend and is the address of the parent. The value that is actually returned is the tuple that the funciton `register` returns.
- On Line 145 we begin our api call `S.checkBalance`.
 - We run all our checks on line 148 by calling the `user_balance` function once
 - We request that 0 be paid into the contract.
 - On line 152 we get balance of the user by calling the `user_balance` function twice and passing `this` as the param.
 - We send this balance to our frontend that we are yet to implement, calling k(amount).
- On line 157 we simply repeat similar steps above with the api `S.withdraw`.
  - we run checks in the assert block by calling `withdraw_accumulated_funds` once 
  - We pay 0 into the contract
  - We return the value gotten from calling `withdraw_accumulated_funds` twice.
- Finally we implement our malicious api call on line 167 `T.steal` that'll allow us as the deployer of contract, end the contract prematurely and transfer all the funds that have not been claimed to our address.
  - The only check we make is to ensure that it's the deployer calling it
  - We make no payment into the contract
  - On line 174 we return a tuple that returns false for our keepGoing const. This in turn causes our loop execution to end. 
- On line 177 we initialize the timeout block and pass our deadline variable which will tell our loop how long it will run.
- Line 182 happens after the parallelReduce has ended. It transfers all the remaining balance in the contract to the Deployer (us).
- On line 183 we commit()  and line 184 signals the end of the contract.


Proceed to runnung the following command in your terminal to compile your code.

```bash
  ../reach compile
```

we should see an output on the terminal like this

```bash
WARNING: Compiler instructed to emit for Algorand, but the conservative analysis found these potential problems:
 * This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.
Verifying knowledge assertions
Verifying for generic connector
  Verifying when ALL participants are honest
  Verifying when NO participants are honest
Checked 110 theorems; No failures!
```

Our whole `index.rsh` file should look something like this...

```js
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
        check(user.numberOfChildren >= 2, "Need at least two down lines");
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
        k(true);
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

```

## Testing of functionaliy (index.mjs)

The functions in the `.mjs` file have to mimick that of our`.rsh` file else we would have an error.
We test our application by editing the `index.mjs` file that was created when we ran.
```bash
../reach init
```

We import the needed modules, create the test accounts we'll use for running our tests and initialize them with a starting balance.

```js
1. import { loadStdlib } from "@reach-sh/stdlib";
2. import * as backend from "./build/index.main.mjs";
3. const stdlib = loadStdlib(process.env);
4.
5. const startingBalance = stdlib.parseCurrency(100);
6.
7. // Created 12 users/ test accounts
8. const [accAdmin, accBob,one, two, three, four, five, six, seven, eight, nine, ten] = await stdlib.newTestAccounts(12, startingBalance);
9. 
10. const deadline = stdlib.connector === "CFX" ? 500 : 250;
11.
12. console.log("Hello admin and Participants!");
13. console.log("Launching...");
```
- On line 10 we check the concensus network connector. If connected to "ETH" or "ALGO" the deadline is 250 else if "CFX" the deadline is 500.


## Interacting with our particpants
Let us proceed to creating and deploying our contract on the devnet.
```js
14. const ctcAdmin = accAdmin.contract(backend);
15. 
16. // Deployer deploys the contract
17. try {
17.   await ctcAdmin.p.Deployer({
18.     price: stdlib.parseCurrency(20),
19.     ready: () => {
20.       console.log("The contract is ready to interact");
21.       throw 42;
22.     },
23.     deadline: deadline,
24.   });
25. } catch (e) {
26.   if (e !== 42) throw e;
27. }
28. console.log("Starting interactions with APIs soon");
```
- Line 14 creates a contract `ctcAdmin` 
- We try to deploy the contract by passing `ctcAdmin.p.Deployer` an interact object.
Notice how the keys of the object mimick that of the `index.rsh` file. If they don't match then reach will throw an error.

```js   
const D = Participant("Deployer", {
    price: UInt,
    // The deadline will be used to determine when the contract
    ready: Fun([], Null),
    // Execution would end
    deadline: UInt,
  });
  ```

- We wrap the above execution in a `try catch` so we can handle any errors that happen during code execution.

#### Interacting using APIs
We will create helper functions we will use to interact with our API from our contract. They will have a consistent pattern through out, and will look something like this
```js
const functionName = (who) =>{
  try {
    
      const ctc = who.contract(backend, ctcAdmin.getInfo());
      const accc = await ctc.apis.API_NAME.API_FUNCTION(/* OPTIONAL ARAMETERS*/);
      console.log(INFORMATION ABOUT WHAT WE DID);
    
  } catch (error) {
    // ERROR HANDLING 
    console.error(error);
  }
}
```
As you can see from the above code example, we get the contract info from the contract deployer and attach to the contract.
We proceed with calling the apis using the returned contract and logging information relating to the api call on the console.

The api names and function will also correspond to that in the rsh file. And since we had 4 api calls in our contract we will create 4 functions gere
- register
- getContractBalance
- withdraw 
- stealAllFunds (😈️)

```js
29. const register = async (who, address) => {
30.   try {
31.     
32.       const ctc = who.contract(backend, ctcAdmin.getInfo());
33.       const accc = await ctc.apis.Schemers.registerForScheme(
34.         stdlib.formatAddress(address)
35.       );
36.       console.log("Registration of ", stdlib.formatAddress(who), accc);
37.     
38.   } catch (error) {
39.     console.error(error);
40.   }
41. };
42. 
43. const withdraw = async (whoi) => {
44.   try {
45.     const ctc = whoi.contract(backend, ctcAdmin.getInfo());
46.     const withdrawn = await ctc.apis.Schemers.withdraw();
47.     console.log("Successfully withdrawn", stdlib.formatCurrency(withdrawn));
48.   } catch (error) {
49.     console.log(error);
50.   }
51. };
52. 
53. const getContractBalance = async (whoi) => {
54.   try {
55.     const ctc = whoi.contract(backend, ctcAdmin.getInfo());
56.     const accc = await ctc.apis.Schemers.checkBalance();
57.     console.log(
58.       "\nBalance in contract",
59.       stdlib.formatCurrency(accc),
60.       "\nBalance in wallet",
61.       stdlib.formatCurrency(await stdlib.balanceOf(whoi)),
62.       "\n"
63.     );
64.   } catch (error) {
65.     console.log(error);
66.   }
67. };
68. 
69. const StealAllFunds = async (who) => {
70.   try {
71.     const ctc = who.contract(backend, ctcAdmin.getInfo());
72.     await getContractBalance(who);
73.     const steal = await ctc.apis.Thief.steal();
74.     console.log("Successfully stole the hell outta here")
75.       console.log(
76.         "\nBalance in wallet",
77.         stdlib.formatCurrency(await stdlib.balanceOf(who)),
78.         "\n"
79.       );
80. 
81.   } catch (error) {
82.     console.log(error)
83.   }
84. };
```

Basically each of the functions take in an account and attach to our deployed contract. They call the corresponding api methods that we defined in our `index.rsh` file and pass in the needed parameters.

Let's proceed to calling our functions. Write the following lines of code below the function definitions.

```js
console.log("Calling Apis...");

await register(accBob, accAdmin);
await register(four, accAdmin);
await register(two, accBob);
await register(five, accBob);
await register(one, five);
await register(three, five);
await register(six, two);
await register(seven, two);

await getContractBalance(two);
await withdraw(two);
await getContractBalance(two);

await getContractBalance(five);
await withdraw(five);
await getContractBalance(five);

await getContractBalance(accBob);
await withdraw(accBob);
await getContractBalance(accBob);


await StealAllFunds(accBob)  //! Will error because accBob is not deployer
await StealAllFunds(five)  //! will error because five is not deployer
await StealAllFunds(accAdmin) // This will succeed and emd the contract with the funds

console.log("Goodbye, Everyone!");
```

Proceed to writing the following command on your terminal.
```bash
  ../reach run
```
 You should see the following printed on your terminal. 
- registration messages
- User balance befor and after withdrawal
- Error messages 
- The deployer stealing the funds and ending the contract execution.

*if you are having problem with the code running. Make sure you have node.js installed, and reference the full code snippet below*
```js
import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

// Created 10 users/ test accounts
const [accAdmin, accBob,one, two, three, four, five, six, seven, eight, nine, ten] = await stdlib.newTestAccounts(12, startingBalance);

const deadline = stdlib.connector === "CFX" ? 500 : 250;

console.log("Hello admin and Participants!");
console.log("Launching...");

const ctcAdmin = accAdmin.contract(backend);

// Deployer deploys the contract
try {
  await ctcAdmin.p.Deployer({
    price: stdlib.parseCurrency(20),
    ready: () => {
      console.log("The contract is ready to interact");
      throw 42;
    },
    deadline: deadline,
  });
} catch (e) {
  if (e !== 42) throw e;
}
console.log("Starting interactions soon with APis");

const register = async (who, parent) => {
  try {
    
      const ctc = who.contract(backend, ctcAdmin.getInfo());
      const accc = await ctc.apis.Schemers.registerForScheme(
        stdlib.formatAddress(parent)
      );
      console.log("Registration of ", stdlib.formatAddress(who), accc);
    
  } catch (error) {
    console.error(error);
  }
};

const withdraw = async (whoi) => {
  try {
    const ctc = whoi.contract(backend, ctcAdmin.getInfo());
    const withdrawn = await ctc.apis.Schemers.withdraw();
    console.log("Successfully withdrawn", stdlib.formatCurrency(withdrawn));
  } catch (error) {
    console.log(error);
  }
};

const getContractBalance = async (whoi) => {
  try {
    const ctc = whoi.contract(backend, ctcAdmin.getInfo());
    const accc = await ctc.apis.Schemers.checkBalance();
    console.log(
      "\nBalance in contract",
      stdlib.formatCurrency(accc),
      "\nBalance in wallet",
      stdlib.formatCurrency(await stdlib.balanceOf(whoi)),
      "\n"
    );
  } catch (error) {
    console.log(error);
  }
};

const StealAllFunds = async (who) => {
  try {
    const ctc = who.contract(backend, ctcAdmin.getInfo());
    await getContractBalance(who);
    const steal = await ctc.apis.Thief.steal();
    console.log("Successfully stole the heck outta here")
      console.log(
        "\nBalance in wallet",
        stdlib.formatCurrency(await stdlib.balanceOf(who)),
        "\n"
      );

  } catch (error) {
    console.log(error)
  }
};


console.log("Starting backends...");

await register(accBob, accAdmin);
await register(four, accAdmin);
await register(two, accBob);
await register(five, accBob);
await register(one, five);
await register(three, five);
await register(six, two);
await register(seven, two);

await getContractBalance(two);
await withdraw(two);
await getContractBalance(two);

await getContractBalance(five);
await withdraw(five);
await getContractBalance(five);

await getContractBalance(accBob);
await withdraw(accBob);
await getContractBalance(accBob);


await StealAllFunds(accBob)  //! Will error because accBob is not deployer
await StealAllFunds(five)  //! will error because five is not deployer
await StealAllFunds(accAdmin) // This will succeed and emd the contract with the funds

console.log("Goodbye, Everyone!");
```
That is it with our basic tests.

## Creating A Graphical user interface (Using React)
We have built and checked that our Smart contract works using our `index.rsh` and `index.mjs` files respectively. In this section we are going to focus on making a user interface which you and your friends can use to interact with your smart contract on testnet. For this purpose we will be running this on Algorand, although you can implement this on ETH and CFX

Download the Starter project [here](https://)

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
