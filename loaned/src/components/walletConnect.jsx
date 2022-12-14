import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { WalletButton } from "./ComponentButton";

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

  export default function Walletbutton() {
    return(
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
         <WalletButton />
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
  
