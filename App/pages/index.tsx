import React, { useState, useEffect } from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import { useGlobalContext } from "../context";
import * as backend from "../main/index.main.mjs";
import { Container, Button } from "../Components/Components";
import styled from "styled-components";
import { GiGreatPyramid } from "react-icons/gi";
import { ALGO_WalletConnect as WalletConnect } from "@reach-sh/stdlib";
import FormDialog, { Message } from "../Components/formDialogue";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const firebaseConfig = {
  apiKey: "AIzaSyCQ14DqFSJtQYoFgw7BU_UgMRku7usIciQ",
  authDomain: "snapchat-6d946.firebaseapp.com",
  databaseURL: "https://snapchat-6d946-default-rtdb.firebaseio.com",
  projectId: "snapchat-6d946",
  storageBucket: "snapchat-6d946.appspot.com",
  messagingSenderId: "1078758563339",
  appId: "1:1078758563339:web:434343969af056be81710e",
  measurementId: "G-F2HF9F5S1X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

const deadline = reach.connector === "CFX" ? 500 : 250;
const ctcInfo = `{
  "type": "BigNumber",
  "hex": "0x05898349"
}`;

const Home = () => {
  const {
    dispatch,
    state,
    message,
    setMessage,
    isConnected,
    setConnected,
    account,
    setAccount,
    ctc,
    setContract,
    handlePopup,
  } = useGlobalContext();
  const [isMyAlgo, setMyAlgo] = useState(true);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [data, setData] = useState(Data);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = ()=>{
    setOpen(false)
  }

  const handleSubmit  = async () => {
    setOpen(false);
    await register(await account.getAddress());
  };

  async function writeUserData() {
    const db = getDatabase();
    set(ref(db, "users/" + (await account.getAddress())), {
      username: name,
      parent: address,
      availableSlot: 2,
      children: [null, null],
    });
    // console.log(address, " hi", name);
  }

  // const deploy = async () => {
  //   // const { networkAccount } = state;
  //   const acc = account.contract(backend);
  //   try {
  //     await acc.p.Deployer({
  //       price: reach.parseCurrency(1),
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
  //   // setContractInfo(JSON.stringify(info, null, 2));
  //   console.log(JSON.stringify(info, null, 2));
  // };

  const register = async (address) => {
    try {
      const accc = await ctc.apis.Schemers.joinPyramid(address);
      console.log("Registration of ", reach.formatAddress(account), accc);
      return setTimeout(async() => {
        updateData(name, await account.getAddress(), address)
      }, 4000);
    } catch (error) {
      console.error(error);
      handlePopup("Successfully registered for scheme")
      return setTimeout(async () => {
        updateData(name, await account.getAddress(), address);
      }, 4000);
    }
  };

  const withdraw = async () => {
    try {
      const ctc = account.contract(backend, JSON.parse(ctcInfo));
      const withdrawn = await ctc.apis.Schemers.withdraw();
      console.log("Successfully withdrawn", withdrawn);
    } catch (error) {
      console.log(error);
      handlePopup(`${error}`.substring(0, 160) + "...");
    }
  };

  const updateData = async (name: string, address: string, parentAddress) => {
    const obj = data.filter((item) => item.address == parentAddress);
    if (obj[0]?.availableSlots == 0) {
      handlePopup("Parent has no empty slots");
      throw 43;
      return;
    }
    const newData = data.map((item) => {
      const { address, name, availableSlots, price } = item;
      if (address === parentAddress) {
        return { ...item, availableSlots: availableSlots - 1 };
      }
      return item
    });
    const final = [
      ...newData,
      { name, address, availableSlots: 2, price: "20" },
    ];
    window.localStorage.setItem("userData", JSON.stringify(final));
    setData(final);
    return final;
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

  useEffect(() => {
    const userData: Array<{
      name: string;
      price: string;
      availableSlots: number;
      address: string;
    }> = JSON.parse(window.localStorage.getItem("userData"));
    if (userData) {
      setData(userData);
    }
  }, []);
  useEffect(()=>{
    console.log(data)
  },[data])
  useEffect(()=>{
    console.log(name)
  },[name])
  return (
    <>
      <Container style={{ paddingTop: "5.5rem" }}>
        <Message
          message={message.message}
          open={message.isOpen}
          className={``}
        />

        <div>
          <section className={styles.section} style={{}}>
            <h1
              style={{
                color: "hsl(0, 40.00000000000017%, 98.03921568627452%)",
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
            <span
              id="register"
              style={{
                textAlign: "center",
                padding: "1rem",
                fontSize: "2rem",
                textTransform: "uppercase",
              }}
            >
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
              {data?.map(({ name, price, availableSlots, address }) => {
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
                      onClick={async () => {
                        try {
                          if (account) {
                            handleClickOpen();
                            setAddress(address);
                            // await writeUserData();
                          } else {
                            handlePopup("Please connect  Account First");
                          }
                          // updateData(name, await account.getAddress(), address)
                        } catch (error) {
                          setOpen(false);
                          console.error("there is an error");
                        }
                      }}
                      style={{
                        textAlign: "center",
                        width: "25%",
                        textTransform: "Capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      <Link href={"/"}>Join Chain</Link>
                    </Button>
                  </div>
                );
              })}
            </div>
          </section>

          <FormDialog
            open={open}
            handleClose={handleClose}
            // @ts-ignore
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
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
export const Head = () => {
  const {
    dispatch,
    state,
    message,
    setMessage,
    isConnected,
    setConnected,
    account,
    setAccount,
    ctc,
    setContract,
    handlePopup,
  } = useGlobalContext();
  const connectAcct = async () => {
    try {
      const newAccount = await reach.getDefaultAccount();
      setConnected(true);
      const ctc = newAccount.contract(backend, JSON.parse(ctcInfo));
      setContract(ctc);
      setAccount(newAccount);
    } catch (error) {
      // setLoading(!loading);
      console.log(error);
    }
  };
    const withdraw = async () => {
      try {
        const ctc = account.contract(backend, JSON.parse(ctcInfo));
        const withdrawn = await ctc.apis.Schemers.withdraw();
        console.log("Successfully withdrawn", withdrawn);
      } catch (error) {
        console.log(error);
        handlePopup(`${error}`.substring(0, 160) + "...");
      }
    };
  return (
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
        <a
          href="#balance"
          onClick={() => {
            if (!isConnected) {
              handlePopup(
                "Cannot check balance!!! \n You need to register first "
              );
            }
          }}
        >
          balance
        </a>
      </div>
      <Button style={{}} onClick={connectAcct}>
        {!isConnected ? "connect" : "Connected"}
      </Button>
    </Header>
  );
};

export default Home;
