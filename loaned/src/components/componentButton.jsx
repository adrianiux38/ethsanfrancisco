import { ConnectButton } from "@rainbow-me/rainbowkit";

export const WalletButton = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ConnectButton/>
    </div>
  );
};

