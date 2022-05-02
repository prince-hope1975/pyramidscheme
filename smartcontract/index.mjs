import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const users =await  stdlib.newTestAccounts(6, startingBalance);
const deadline = stdlib.connector === "CFX" ? 500 : 250;

const [accAdmin, accBob] = await stdlib.newTestAccounts(2, startingBalance);
console.log("Hello admin and Participants!");

console.log("Launching...");
const ctcAdmin = accAdmin.contract(backend);

try {
  await ctcAdmin.p.Deployer({
    price: stdlib.parseCurrency(10),
    ready: () => {
      console.log("The contract is ready to interact");
      throw 42
    },
    deadline: deadline,
  });
} catch (e) {
  if (e !== 42) throw e;
}
console.log("Starting interactions soon with APis");
const ctcWho = (whoi) => users[whoi].contract(backend, ctcAdmin.getInfo());

const register = async (whoi) => {
  try {
    const who = users[whoi];
    console.log("Registration of ", stdlib.formatAddress(who));
    const ctc = ctcWho(whoi);
    const returned = await ctc.apis.Schemers.joinPyramid(whoi);
    console.log(returned);
  } catch (error) {
    console.error(error);
  }
};
const willError = async (f) => {
  let e;
  try {
    await f();
    e = false;
  } catch (te) {
    e = te;
  }
  if (e === false) {
    throw Error(`Expected to error, but didn't`);
  }
  console.log(`That last call errored and that's okay`);
};
console.log("Starting backends...");
await register(0);
await willError(()=>register(0))
await register(1);
await register(2);
await register(3);
await register(4);
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
