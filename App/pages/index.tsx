import React, { useState, useEffect } from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import { useGlobalContext } from "../context";
import * as backend from "../build/index.main.mjs";
import { Container, Button } from "../Components/Components";
import styled from "styled-components";
import { GiGreatPyramid } from "react-icons/gi";
import { ALGO_WalletConnect as WalletConnect } from "@reach-sh/stdlib";
import FormDialog from "../Components/formDialogue";

const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));
// reach.providerEnvByName("TestNet") 
const deadline = reach.connector === "CFX" ? 500 : 250;
const ctcInfo = `{
  "type": "BigNumber",
  "hex": "0x057b60c4"
}`;

const Home = () => {
  const { dispatch, state } = useGlobalContext();
  const [account, setAccount] = useState(null);
  const [isMyAlgo ,setMyAlgo] = useState(false);
  const [isConnected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ctc, setContract] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async() => {
    setOpen(false);
    await register(address)

  };
  const connectAcct = async () => {
    try {
      const newAccount = await reach.getDefaultAccount();
      setConnected(true);
      const ctc = newAccount.contract(backend, JSON.parse(ctcInfo));
      setContract(ctc);
      setAccount(newAccount);
    } catch (error) {
      setLoading(!loading);
      console.log(error);
    }
  };



  // const deploy = async () => {
  //   // const { networkAccount } = state;
  //   const acc = account.contract(backend);
  //   try {
  //     await acc.p.Deployer({
  //       price: reach.parseCurrency(20),
  //       ready: () => {
  //         console.log("The contract is ready to interact");
  //         throw 42;
  //       },
  //       deadline: deadline,
  //     });
  //   } catch (e) {
  //     if (e !== 42) throw e;
  //   }
  //   dispatch({ type: "SET_ACCOUNT", payload: account });
  //   const info = await acc.getInfo();
  //   setContractInfo(JSON.stringify(info, null, 2));
  //   console.log(JSON.stringify(info, null, 2));
  // };

  const register = async (address) => {
    try {
      const accc = ctc.apis.Schemers.joinPyramid(address);
      console.log("Registration of ", reach.formatAddress(account), accc);
    } catch (error) {
      console.error(error);
    }
  };

  const withdraw = async () => {
    try {
      const ctc = account.contract(backend, JSON.parse(ctcInfo));
      const withdrawn = await ctc.apis.Schemers.withdraw();
      console.log("Successfully withdrawn", withdrawn);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch({ type: "SET_ACCOUNT", payload: account });
    console.log(state);
  }, [account, state, dispatch]);
    useEffect(() => {
      if (isMyAlgo) {
        reach.setWalletFallback(
          reach.walletFallback({
            providerEnv: "TestNet",
            MyAlgoConnect,
          })
        );
        console.log("My Algo");
      } else {
        reach.setWalletFallback(
          reach.walletFallback({
            providerEnv: "TestNet",
            WalletConnect,
          })
        );
        console.log("Wallet connect");
      }
    }, [isMyAlgo]);

  return (
    <>
      <Container style={{ paddingTop: "5.5rem" }}>
        <Header
          style={{
            position: "absolute",
            top: 0,
            width: "100vw",
            display: "flex",
            // borderBottom: "3px solid hsl(0, 0%, 0%, 0.3)",
            boxShadow: "2px 2px 2px hsl(0, 0%, 20%, 0.5)",
            padding: "1rem 2rem",
          }}
        >
          <p>
            <GiGreatPyramid style={{ fontSize: "1.3rem", color: "white" }} />
          </p>
          <div
            style={{
              marginLeft: "auto",
              gap: "2rem",
              display: "flex",
              marginRight: "2rem",
              alignItems: "center",
              textTransform: "uppercase",
              fontWeight: "lighter",
            }}
          >
            <a href="#register">register</a>
            <a href="#balance">balance</a>
          </div>
          <Button style={{}} onClick={connectAcct}>
            {!isConnected ? "connect" : "Connected"}
          </Button>
        </Header>
        <div>
          <section
            style={{
              display: "flex",
              maxWidth: "800px",
              margin: "auto",
              alignItems: "center",
              minHeight: "85vh",
              padding: "0 2rem",
            }}
          >
            <h1
              style={{
                width: "50%",
                color: "hsl(0, 40.00000000000017%, 98.03921568627452%)",
                // padding: "0.7rem",
                paddingTop: "4.6rem",
                fontSize: "var(--font)",
              }}
            >
              Invest, refer & grow your income.
            </h1>
            <div
              style={{
                position: "relative",
                width: "230px",
                height: "11rem",
                margin: "65px",
                borderRadius: "10px",
                background: "hsla(0, 0%, 100%, 0.1)",
                backdropFilter: "blur(50px)",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  width: "140%",
                  left: "-55%",
                  top: -80,
                }}
                src={"/BTC.png"}
              />
              <img
                style={{
                  position: "absolute",
                  width: "80%",
                  right: "-30%",
                  top: 50,
                }}
                src={"/Eth.png"}
              />
            </div>
          </section>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "90vh",
            }}
          >
            <span style={{ textAlign: "center", padding: "1rem" }}>
              Join Ranks
            </span>
            <div
              style={{
                width: "clamp(400px, 80%, 800px)",
                minHeight: "15rem",
                background: "hsla(0,0%,100%,0.1)",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                padding: "1rem 0",
                margin: "auto",
              }}
            >
              {Data.map(({ availableSlots, name, price, address }) => {
                return (
                  <div
                  key={name}
                    style={{
                      display: "flex",
                      justifyContent: "spaced-between",
                      alignItems: "center",
                      padding: "0px 2.5rem",
                    }}
                  >
                    <p style={{ textAlign: "center", width: "25%" }}>{name}</p>
                    <p style={{ textAlign: "center", width: "25%" }}>
                      ${price}
                    </p>{" "}
                    <p
                      style={{
                        textAlign: "center",
                        width: "25%",
                        fontSize: "0.9rem",
                        fontWeight: "lighter",
                      }}
                    >
                      {availableSlots} slot{!(availableSlots === 1) && "s"}{" "}
                      available
                    </p>{" "}
                    <Button
                      onClick={() => {
                        setName(name)
                        // register(address);
                        setAddress(address)
                        handleClickOpen();
                      }}
                      style={{
                        textAlign: "center",
                        width: "25%",
                        textTransform: "Capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      Join Chain
                    </Button>
                  </div>
                );
              })}
            </div>
          </section>
          {/* <Button style={{ position: "relative" }} onClick={withdraw}>
            Withdraw
          </Button>
          <Button onClick={register} unable={!isConnected}>
            Register
          </Button> */}
          <FormDialog open={open} handleClose={handleClose} name={name} />
        </div>
      </Container>
    </>
  );
};

const Data = [
  {
    name: "Prince Charles",
    price: "20",
    availableSlots: 1,
    address: "IAWNDP5OXXP7BD7I7QUMUOF35SM3IZWUW755HHDJK2VK25D7TLJY2UZGUE",
  },
  {
    name: "Meyiwa Jarikpe",
    price: "20",
    availableSlots: 2,
    address: "IAWNDP5OXXP7BD7I7QUMUOF35SM3IZWUW755HHDJK2VK25D7TLJY2UZGUE",
  },
];

const Header = styled.div``;

export default Home;
