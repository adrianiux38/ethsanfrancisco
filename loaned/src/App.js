import logo from './logo.svg';
import './App.css';
import Walletbutton from './components/walletConnect';
import { useAccount, useSignMessage } from 'wagmi';
import { request } from 'graphql-request'



//import LensLogin from './components/LensLogin'

async function generateChallenge(address){
  const API_URL = 'https://api.lens.dev/';
  const dataChallenge = await request(API_URL, `query Challenge { challenge(request: { address: "${address}" }) { text }}`)
  return(dataChallenge.challenge.text);
};

function App() {
  const data = useAccount();
  const address = data.address;
  const connected = data.isConnected;
  //const { signMessage } = useSignMessage();
 


  const verifyData = async () => {
    console.log(data);
  }


  const signIn = async () => {
    try {
      if (!connected) {
        return alert('Please connect your wallet first');
      }
      const challenge = await generateChallenge(address);
      console.log(challenge);
      //const signature = await signMessage({challenge});
     
      //const signature = await signMessageAsync({ message: challenge });
      //console.log(signature);
      //console.log(challenge);
      
    } catch (error) {
      console.log(error);
      alert('Error signing in');

    }

  };

  return (
    <main style={{backgroundColor:'white'}}>
      <div style={{display:'flex', widht:'100vw', height:'6vh', alignContent:'center', justifyContent:'center', backgroundColor:'white'}}>
        <img src={logo} style={{width:'200px', height:'80px', marginTop: '20px', display:'flex', backgroundColor:'white'}}/>
      </div>
      <div style={{display:'flex', flexDirection:'column', marginTop:'20px', alignContent:'center', paddingBottom:'20px', paddingTop: '7vh'}}>
        <Walletbutton style={{display:'flex', paddingRight:'40px', marginRight:'60px'}}/>
        <h1 style={{display: 'flex', width: '100vw', marginTop: '6%', justifyContent:'center'}}> Ask for your first loan:</h1>
        <p style={{display: 'flex', width: '100vw', alignContent:'center', justifyContent:'center'}}> Login using lens</p>
        <button onClick={signIn}>Lens</button>
        <button onClick={verifyData}>Verify Data</button>

      
      </div>
    </main>
  );
}

export default App;
