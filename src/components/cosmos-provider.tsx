"use client";

import { SignerOptions, wallets } from "cosmos-kit";
import { ChainProvider as Provider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";

function ChainProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { themeClass } = useTheme();

  const signerOptions: SignerOptions = {
    // signingStargate: () => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  return (
    <div>
      <Provider
        chains={chains}
        assetLists={assets}
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
        signerOptions={signerOptions}
      >
        {children}
      </Provider>
    </div>
  );
}

export default ChainProvider;
