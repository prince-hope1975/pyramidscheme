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
