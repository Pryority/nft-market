import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { 
  getDefaultWallets, 
  RainbowKitProvider,
  darkTheme 
} from "@rainbow-me/rainbowkit";
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import type { AppProps } from "next/app";
import Header from "../components/Header";


const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: `${process.env.ALCHEMY_ID}`}),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider  
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains}
        theme={darkTheme({
          accentColor: "#0f3a85"
        })}  
      >
        <div className="justify-center py-8 flex flex-col w-full items-center bg-gradient-to-bl from-slate-50 via-slate-50 to-stone-50 dark:from-slate-900 dark:via-slate-900 dark:to-stone-800">
          <div className="justify-center min-h-screen flex flex-col sm:w-5/6 lg:max-w-3xl items-center">
            <Header />
            <Component {...pageProps} />
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
