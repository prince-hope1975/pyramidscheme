import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const users = await stdlib.newTestAccounts(6, startingBalance);
const deadline = stdlib.connector === "CFX" ? 500 : 250;
const [one, two, three] = users;

const [accAdmin, accBob] = await stdlib.newTestAccounts(2, startingBalance);
console.log("Hello admin and Participants!");

console.log("Launching...");
const ctcAdmin = accAdmin.contract(backend);

try {
  await ctcAdmin.p.Deployer({
    price: stdlib.parseCurrency(10),
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
      await ctc.apis.Schemers.joinPyramid(stdlib.formatAddress(address));
      console.log("Registration of ", stdlib.formatAddress(whoi));
    }
  } catch (error) {
    console.error(error);
  }
};
// const willError = async (f) => {
//   let e;
//   try {
//     await f();
//     e = false;
//   } catch (te) {
//     e = te;
//   }
//   if (e === false) {
//     console.log(`Expected to error, but didn't`);
//     return;
//   }
//   console.log(`That last call errored and that's okay`);
// };

console.log("Starting backends...");

await register(accBob, accAdmin);
await register(one, accAdmin);
await register(one, three);
await register(two, accBob);
await register(three, one);
// await register(four, one);

// await register(4);
console.log("Goodbye, Everyone!");

// await Promise.all([
//   backend.Alice(ctcAdmin, {
//     ...stdlib.hasRandom,
//     // implement Alice's interact object here
//   }),
//   backend.Bob(ctcBob, {
//     ...stdlib.hasRandom,
//     // implement Bob's interact object here
//   }),
// ]);
