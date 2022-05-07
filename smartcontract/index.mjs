import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const users = await stdlib.newTestAccounts(6, startingBalance);
const deadline = stdlib.connector === "CFX" ? 500 : 250;
const [one, two, three, four, five, six] = users;

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
      console.log("Acc ", 20);
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
      "\nBalance",
      stdlib.formatCurrency(accc),
      "\nAddress from frontend",
      stdlib.formatAddress(whoi),
      "\n"
    );
  } catch (error) {
    console.log(error);
  }
};

console.log("Starting backends...");

await register(accBob, accAdmin);
await register(four, accAdmin);
// // await register(one, three);
// await register(two, accBob);

// await register(three, accBob);
await getContractBalance(accAdmin);
await getContractBalance(accBob);
await getContractBalance(four);
await getContractBalance(five);
console.log(await stdlib.formatCurrency(await stdlib.balanceOf(five)));
console.log(await stdlib.formatCurrency(await stdlib.balanceOf(six)));
console.log(await stdlib.formatCurrency(await stdlib.balanceOf(five)));
// await register(four, one);

// await register(4);
console.log("Goodbye, Everyone!");
