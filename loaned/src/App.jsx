import logo from "./logo.svg";
import * as React from "react";
import { useState } from "react";
import "./App.css";
//import ComponentButton from './components/walletConnect';
import { useAccount } from "wagmi";
import { request } from "graphql-request";
import FadeIn from "./FadeIn";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { WalletButton } from "./components/ComponentButton";
import { lensProfileData } from "./utils/lensProfileData";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import SuccessModal from "./components/successModal";

//import LensLogin from './components/LensLogin'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: "0x23534edwasdf3423" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Loaned",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

async function CircularIndeterminate() {
  document.getElementById("loader").style.display = "none";
}

async function generateChallenge(address) {
  const API_URL = "https://api.lens.dev/";
  const dataChallenge = await request(
    API_URL,
    `query Challenge { challenge(request: { address: "${address}" }) { text }}`
  );
  return dataChallenge.challenge.text;
}

function App() {
  const data = useAccount();
  const address = data.address;
  const connected = data.isConnected;
  const [submited, changeStatus] = useState("");
  const [value, setValue] = React.useState(0);

  const verifyData = async () => {
    console.log(data);
  };
  //const { signMessage } = useSignMessage()

  const signIn = async () => {
    try {
      if (!connected) {
        return alert("Please connect your wallet first");
      }
      const challenge = await generateChallenge(address);
      console.log(challenge);
      //const signature = await signMessage({challenge});
    } catch (error) {
      console.log(error);
      alert("Error signing in");
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const handle = event.currentTarget.elements.handleInput.value;
    const lensData = await lensProfileData(handle);
    const ownedBy = lensData.profile.ownedBy;
    if (ownedBy === address) {
      changeStatus(ownedBy);
    } else {
      return;
    }
  }

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="main">
          <div id="wrapper">
            <Box
              id="loader"
              sx={{
                justifyContent: "center",
                alignContent: "center",
                display: "none",
              }}
            ></Box>
            ;
            <FadeIn>
              <div
                style={{
                  display: "flex",
                  width: "100vw",
                  height: "6vh",
                  alignContent: "center",
                  marginLeft: "4vw",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                }}
              >
                <img
                  src={logo}
                  style={{
                    width: "200px",
                    height: "80px",
                    marginTop: "20%",
                    display: "flex",
                    backgroundColor: "transparent",
                  }}
                  alt="logo"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20%",
                  alignContent: "center",
                  paddingBottom: "20%",
                  paddingTop: "7vh",
                }}
              >
                {/* <ComponentButton style={{display:'flex', paddingRight:'40px', marginRight:'60px'}}/>*/}
                <h1
                  style={{
                    display: "flex",
                    width: "100vw",
                    marginTop: "6%",
                    marginBottom: "10%",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  Ask for your first loan:
                </h1>
                <FadeIn delay={250}>
                  <WalletButton />
                </FadeIn>
                <div className="info">
                  <p
                    style={{
                      display: "flex",
                      width: "100vw",
                      marginTop: "10%",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    Login using Lens:
                  </p>
                </div>
                <div className="center-container">
                  <form onSubmit={handleSubmit}>
                    <TextField
                      id="handleInput"
                      label="lens handle"
                      variant="standard"
                    />
                    <div className="button-container">
                      <SuccessModal />
                    </div>
                  </form>
                  <p style={{ fontSize: "10px" }}>{submited}</p>
                </div>
              </div>
              <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction
                  label="Borrow"
                  icon={<CallReceivedIcon />}
                />
                <BottomNavigationAction label="Repay" icon={<CallMadeIcon />} />
              </BottomNavigation>
            </FadeIn>
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
