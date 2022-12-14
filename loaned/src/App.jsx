import logo from "./logo.svg";
import options from "./options.png";
import loanHistory from "./loanHistory.png";
import * as React from "react";
import { useState } from "react";
import "./App.css";
//import ComponentButton from './components/walletConnect';
import { useAccount } from "wagmi";
import { request } from "graphql-request";
import FadeIn from "./FadeIn";
import TextField from "@mui/material/TextField";
import "@rainbow-me/rainbowkit/styles.css";
import { WorldIDWidget } from "@worldcoin/id";
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

const quickNodeEndpoint =
  "https://serene-damp-vineyard.discover.quiknode.pro/fbb2c45c83ceb2b39a1b9aed747ca529a5f013cf/";

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
  const [page, setPage] = React.useState(true);

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

  async function getBalance() {
    fetch(quickNodeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 67,
        jsonrpc: "2.0",
        method: "qn_getWalletTokenBalance",
        params: {
          wallet: "0x75fE1c2e7D4BD59979924279Bae64aCEa2602BdD", // for testing/demo
        },
      }),
    }).then((response) => JSON.stringify(response));
  }

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
          {page ? (
            <div id="wrapper">
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
                    marginTop: "18%",
                    alignContent: "center",
                    justifyContent: "center",
                    paddingBottom: "10%",
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
                  <FadeIn delay={350}>
                    <div className="world-container">
                      <WorldIDWidget
                        actionId="wid_staging_1d4d04fb803c86ad2da503fc8dbdf914" // obtain this from developer.worldcoin.org
                        signal="my_signal"
                        enableTelemetry
                        onSuccess={(verificationResponse) =>
                          console.log(verificationResponse)
                        } // pass the proof to the API or your smart contract
                        onError={(error) => console.error(error)}
                        debug={true} // to aid with debugging, remove in production
                      />
                    </div>
                  </FadeIn>

                  <FadeIn delay={450}>
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
                  </FadeIn>
                  <div className="center-container">
                    <form onSubmit={handleSubmit}>
                      <FadeIn delay={550}>
                        <TextField
                          id="handleInput"
                          label="lens handle"
                          variant="standard"
                        />
                      </FadeIn>
                      <FadeIn delay={450}>
                        <div className="button-container">
                          <SuccessModal />
                        </div>
                      </FadeIn>
                    </form>
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
                  <BottomNavigationAction
                    onClick={() => {
                      setPage(false);
                    }}
                    label="Repay"
                    icon={<CallMadeIcon />}
                  />
                </BottomNavigation>
              </FadeIn>
            </div>
          ) : (
            //page 2
            <Page2 />
          )}
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;

export function Page2() {
  return (
    <div>
      <FadeIn>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
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
                width: "170px",
                height: "80px",
                marginTop: "5%",
                display: "flex",
                backgroundColor: "transparent",
              }}
              alt="logo"
            />
          </div>
          <h2 style={{ width: "300px", display: "flex" }}>Payment dashboard</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            marginTop: "12%",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 0.5,
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontFamily: "futura",
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "8%",
              }}
            >
              Pending Loans
            </p>
            <p
              style={{
                fontFamily: "futura",
                marginTop: "-7%",
                marginLeft: "8%",
                fontSize: "12px",
                fontWeight: "lighter",
              }}
            >
              Interest dashboard
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flex: 0.5,
              justifyContent: "center",
              alignContent: "center",
              fontSize: "20px",
              marginTop: "6%",
              fontWeight: "bold",
            }}
          >
            <p>-87 MATIC</p>
          </div>
        </div>
        <img
          src={options}
          style={{
            width: "100%",
            height: "6%",
            marginTop: "5%",
            marginBottom: "15%",
            display: "flex",
            backgroundColor: "transparent",
          }}
          alt="options"
        />
        <div style={{ width: "100vw", display: "flex", flexDirection: "row" }}>
          <p
            style={{
              display: "flex",
              fontFamily: "futura",
              fontSize: "20px",
              fontWeight: "bold",
              marginLeft: "4%",
              flex: 1,
            }}
          >
            Recent Loans
          </p>
          <p
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              marginTop: "6%",
            }}
          >
            See all
          </p>
        </div>

        <FadeIn delay="100" duration="1000">
          <img
            src={loanHistory}
            style={{
              width: "100%",
              height: "6%",
              marginTop: "5%",
              marginLeft: "5%",
              marginBottom: "15%",
              display: "flex",
              backgroundColor: "transparent",
            }}
            alt="loanHistory"
          />
        </FadeIn>
      </FadeIn>
      <BottomNavigation showLabels onChange={(event, newValue) => {}}>
        <BottomNavigationAction label="Borrow" icon={<CallReceivedIcon />} />
        <BottomNavigationAction
          onClick={() => {}}
          label="Repay"
          icon={<CallMadeIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
