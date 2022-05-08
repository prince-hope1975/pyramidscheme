import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const users = await stdlib.newTestAccounts(10, startingBalance);
const deadline = stdlib.connector === "CFX" ? 500 : 250;
const [one, two, three, four, five, six, seven , eight, nine, ten] = users;

const [accAdmin, accBob] = await stdlib.newTestAccounts(2, startingBalance);
console.log("Hello admin and Participants!");

console.log("Launching...");
const ctcAdmin = accAdmin.contract(backend);

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
const ctcWho = (whoi) => users[whoi].contract(backend, ctcAdmin.getInfo());

const register = async (whoi, address) => {
  try {
    if (typeof whoi == typeof 0) {
      const who = users[whoi];
      const ctc = ctcWho(whoi);
      console.log("Acc ", whoi);
      const returned = await ctc.apis.Schemers.joinPyramid(
        stdlib.formatAddress(address)
      );
      console.log("Registration of ", stdlib.formatAddress(who));

      console.log(returned);
    } else {
      console.log("Acc ", 0);
      const ctc = whoi.contract(backend, ctcAdmin.getInfo());
      const accc = await ctc.apis.Schemers.joinPyramid(
        stdlib.formatAddress(address)
      );
      console.log("Registration of ", stdlib.formatAddress(whoi), accc);
    }
  } catch (error) {
    console.error(error);
  }
};
const withdraw = async (whoi) => {
  try {
    const ctc = whoi.contract(backend, ctcAdmin.getInfo());
    const withdrawn = await ctc.apis.Schemers.withdraw();
    console.log("Successfully withdrawn", withdrawn);
  } catch (error) {
    console.log(error);
  }
};
const getContractBalance = async (whoi) => {
  try {
    const ctc = whoi.contract(backend, ctcAdmin.getInfo());
    const accc = await ctc.apis.Schemers
      .checkBalance
      // stdlib.formatAddress(address)
      ();
    console.log(
      "\nBalance in contract",
      (accc), 
      "\nBalance in wallet",
      stdlib.formatCurrency(await stdlib.balanceOf(whoi)),
      "\n"
    );
  } catch (error) {
    console.log(error);
  }
};

const Withdraw = async (whoi) => {
  try {
    const ctc = whoi.contract(backend, ctcAdmin.getInfo());
    const accc = await ctc.apis.Schemers
      .withdraw
      // stdlib.formatAddress(address)
      ();
    console.log(
      "\Address in contract",
      stdlib.formatAddress(accc),
      "\Address in wallet",
      stdlib.formatAddress((whoi)),
      "\n"
    );
  } catch (error) {
    console.log(error);
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
await getContractBalance(accAdmin);
await withdraw(accAdmin);
await getContractBalance(accAdmin);

console.log("Goodbye, Everyone!");
