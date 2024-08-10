"use client";
import { GasPrice } from "@cosmjs/stargate";

import { SignerOptions } from "cosmos-kit";
import { wallets } from "@cosmos-kit/keplr";
import { ChainProvider as Provider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import { CHAIN_PRYZM_RPC } from "@/config/defaults";
import { useEffect } from "react";
import addKeplr, {
  chainPryzmInfo,
  chainPryzmAssets,
} from "@/lib/pryzm-localnet";
function ChainProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { themeClass } = useTheme();

  useEffect(() => {
    // @ts-ignore
    if (window !== undefined && process.env.NODE_ENV === "development") {
      // addKeplr();
    }
  }, []);

  // const signerOptions: SignerOptions = {
  //   // signingStargate: () => {
  //   //   return getSigningCosmosClientOptions();
  //   // }
  //   signingCosmwasm: (chain: any) => {
  //     switch (chain.chain_name) {
  //       case "pryzmtestnet":
  //         return {
  //           gasPrice: GasPrice.fromString("0.5upryzm"),
  //         };
  //     }
  //   },
  // };

  return (
    <div>
      <Provider
        chains={[...chains, chainPryzmInfo]}
        assetLists={[...assets, chainPryzmAssets]}
        wallets={wallets}
        walletConnectOptions={{
          signClient: {
            projectId: "a8510432ebb71e6948cfd6cde54b70f7",
            relayUrl: "wss://relay.walletconnect.org",
            metadata: {
              name: "Cosmos Kit dApp",
              description: "Cosmos Kit dApp built by Create Cosmos App",
              url: "https://docs.cosmology.zone/cosmos-kit/",
              icons: [],
            },
          },
        }}
        // @ts-ignore
        // signerOptions={signerOptions}
        // endpointOptions={{
        //   // @ts-ignore
        //   pryzmtestnet: {
        //     rpc: [CHAIN_PRYZM_RPC],
        //     rest: [CHAIN_PRYZM_RPC],
        //   },
        // }}
      >
        {children}
      </Provider>
    </div>
  );
}

export default ChainProvider;
