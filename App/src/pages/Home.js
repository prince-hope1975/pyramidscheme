import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonComp from "@mui/material/Button";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import { useGlobalContext } from "../context";
import backend from "../build/index.main.mjs"

import { ALGO_WalletConnect as WalletConnect } from "@reach-sh/stdlib";

const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

const Home = () => {
  const { dispatch, state } = useGlobalContext();
  const [isMyAlgo, setMyAlgo] = useState(true);
  const [account, setAccount] = useState(null);
  const [isConnected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const connectAcct = async () => {
    try {
      const newAccount = await reach.getDefaultAccount();
      setAccount(newAccount);
      setConnected(true);
    } catch (error) {
      setLoading(!loading);
      console.log(error);
    }
  };

  useEffect(() => {
    if (isMyAlgo) {
      reach.setWalletFallback(
        reach.walletFallback({
          providerEnv: "TestNet",
          MyAlgoConnect,
        })
      );
      console.log("My Algo")
    } else {
      reach.setWalletFallback(
        reach.walletFallback({
          providerEnv: "TestNet",
          WalletConnect,
        })
      );
      console.log("Wallet connect");

    }
  },[isMyAlgo]);

  const deploy = async () =>{
    const { networkAccount } = state;
    const acc = await networkAccount.contract(backend)
    console.log(JSON.parse())
  }

  useEffect(() => {
    dispatch({ type: "SET_ACCOUNT", payload: account });
    console.log(state);
  }, [account, state, dispatch]);

  return (
    <Container>
      <Button unable={!isConnected}>Register</Button>
      <Button onClick={connectAcct}>connect</Button>
      <Button onClick={()=>setMyAlgo(!isMyAlgo)}>{isMyAlgo?"My Algo wallet":"Wallet Connect"}</Button>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 5rem;
  display: flex;
  gap:1em
`;
const Button = styled(ButtonComp)`
  background-color: ${({ unable }) =>
    !unable ? "hsl(300, 100%, 25%, 0.3)" : "hsl(300, 100%, 25%, 0.3)"};
  color: white;
  box-shadow: 1px 1px 1px #333;
  :hover {
    background-color: hsl(300, 100%, 25%, 0.3);
  }
  cursor: ${({ unable }) => (!unable ? "pointer" : "not-allowed")};
  /* cursor: not-allowed; */
`;
export default Home;
