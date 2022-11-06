import logo from './logo.svg';
import * as React from 'react';
import './App.css';
//import ComponentButton from './components/walletConnect';
import { useAccount, useSignMessage } from 'wagmi';
import { request } from 'graphql-request'
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { WalletButton } from "../src/components/ComponentButton";



//import LensLogin from './components/LensLogin'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: '0x23534edwasdf3423'}),
    publicProvider(),]
);

const { connectors } = getDefaultWallets({
  appName: "Loaned",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});





async function generateChallenge(address){
  const API_URL = 'https://api.lens.dev/';
  const dataChallenge = await request(API_URL, `query Challenge { challenge(request: { address: "${address}" }) { text }}`)
  return(dataChallenge.challenge.text);
};

function App() {
  const data = useAccount();
  const address = data.address;
  const connected = data.isConnected;
 
  const verifyData = async () => {
    console.log(data);
  }
  //const { signMessage } = useSignMessage()

  const signIn = async () => {
    try {
      if (!connected) {
        return alert('Please connect your wallet first');
      }
      const challenge = await generateChallenge(address);
      console.log(challenge);
      //const signature = await signMessage({challenge});
      
    } catch (error) {
      console.log(error);
      alert('Error signing in');

    }

  };

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }


  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
    <main style={{backgroundColor:'white'}}>
      <div style={{display:'flex', widht:'100vw', height:'6vh', alignContent:'center', justifyContent:'center', backgroundColor:'white'}}>
        <img src={logo} style={{width:'200px', height:'80px', marginTop: '20px', display:'flex', backgroundColor:'white'}}/>
      </div>
      <div style={{display:'flex', flexDirection:'column', marginTop:'20px', alignContent:'center', paddingBottom:'20px', paddingTop: '7vh'}}>
         <WalletButton />
       {/* <ComponentButton style={{display:'flex', paddingRight:'40px', marginRight:'60px'}}/>*/}
        <h1 style={{display: 'flex', width: '100vw', marginTop: '6%', justifyContent:'center'}}> Ask for your first loan:</h1>
        <p style={{display: 'flex', width: '100vw', alignContent:'center', justifyContent:'center'}}> Login using lens</p>
        <button onClick={signIn}>Lens</button>
        <button onClick={verifyData}>Verify Data</button>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Lens handle</p>
              <input name="lens handle" />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>  
      </div>
    </main>
    </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
