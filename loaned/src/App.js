import logo from './logo.svg';
import './App.css';
import Walletbutton from './components/walletConnect';


function App() {
  return (
    <main style={{backgroundColor:'white'}}>
      <div style={{display:'flex', widht:'100vw', height:'6vh', alignContent:'center', justifyContent:'center', backgroundColor:'white'}}>
        <img src={logo} style={{width:'200px', height:'80px', marginTop: '20px', display:'flex', backgroundColor:'white'}}/>
      </div>
      <div style={{display:'flex', flexDirection:'column', marginTop:'20px', alignContent:'center', paddingBottom:'20px', backgroundColor:'blue', paddingTop: '7vh'}}>
        <Walletbutton style={{display:'flex', paddingRight:'40px', marginRight:'60px', backgroundColor:'blue'}}/>
        <h1 style={{display: 'flex', width: '100vw', marginTop: '6%', justifyContent:'center', backgroundColor: 'red'}}> Ask for your first loan:</h1>
      </div>
    </main>
  );
}

export default App;
