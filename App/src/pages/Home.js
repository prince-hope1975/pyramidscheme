import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ButtonComp from "@mui/material/Button";
import {ALGO_WalletConnect as MyAlgoConnect, loadStdlib}from "@reach-sh/stdlib"
const reach = loadStdlib(process.env.REACH_CONNECTOR_MODE="ETH")


const Home = () => {
  const [account, setAccount] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
   reach.getDefaultAccount()
  },[loading])

  const connectAcct = async ()=>{
    const acct = await reach.getDefaultAccount()
    setAccount(account)
  }
  return (
    <Container>
      <Button >
        Register
      </Button>  
      <Button >
        connect
      </Button>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 4rem;
`;
const Button = styled(ButtonComp)`
  background-color: hsl(300, 100%, 25%, 0.3)  !important;
  color: white !important;
  box-shadow: 1px 1px 1px #333 !important;
`;
export default Home;
