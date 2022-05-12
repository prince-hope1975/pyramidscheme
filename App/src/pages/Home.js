import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonComp from "@mui/material/Button";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import { useGlobalContext } from "../context";

const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));
reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "MainNet",
    MyAlgoConnect,
  })
);
const Home = () => {
  const { dispatch , state} = useGlobalContext();
  // const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(state)
  }, [state.networkAccount]);

  const connectAcct = async () => {
    try {
      const newAccount = await reach.getDefaultAccount();
      dispatch({ type: "SET_ACCOUNT", payload: newAccount });
      // reach.connectAccount(newAccount);
      console.log(state.networkAccount)
    } catch (error) {
      setLoading(!loading);
      console.log(error);
    }
  };
  return (
    <Container>
      <Button>Register</Button>
      <Button onClick={connectAcct}>connect</Button>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 4rem;
`;
const Button = styled(ButtonComp)`
  background-color: hsl(300, 100%, 25%, 0.3) !important;
  color: white !important;
  box-shadow: 1px 1px 1px #333 !important;
`;
export default Home;
