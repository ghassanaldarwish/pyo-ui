"use client";

import { WalletStatus } from "cosmos-kit";
import { useChain } from "@cosmos-kit/react";
import { getChainLogo } from "@/lib/utils";
import { CHAIN_NAME } from "@/config";
import { User } from "./User";
import { Chain } from "./Chain";
import { Warning } from "./Warning";
import { Button } from "@/components/ui/button";

import {
  ButtonConnect,
  ButtonConnected,
  ButtonConnecting,
  ButtonDisconnected,
  ButtonError,
  ButtonNotExist,
  ButtonRejected,
} from "./Connect";
import {
  useCwPryzmGetCountQuery,
  useCwPryzmIncrementMutation,
} from "@/config/contracts/CwPryzm.react-query";
import { useEffect, useState } from "react";
import {
  CwPryzmClient,
  CwPryzmQueryClient,
} from "@/config/contracts/CwPryzm.client";
import { CONTRACT_ADDRESS } from "@/config/defaults";

export function Wallet() {
  const {
    chain,
    status,
    wallet,
    username,
    address,
    message,
    connect,
    openView,
    getCosmWasmClient,
    getSigningStargateClient,
  } = useChain(CHAIN_NAME);

  const ConnectButton = {
    [WalletStatus.Connected]: <ButtonConnected onClick={openView} />,
    [WalletStatus.Connecting]: <ButtonConnecting />,
    [WalletStatus.Disconnected]: <ButtonDisconnected onClick={connect} />,
    [WalletStatus.Error]: <ButtonError onClick={openView} />,
    [WalletStatus.Rejected]: <ButtonRejected onClick={connect} />,
    [WalletStatus.NotExist]: <ButtonNotExist onClick={openView} />,
  }[status] || <ButtonConnect onClick={connect} />;

  const [count, setCount] = useState(0);

  // const { cwPryzmQueryClient, cwPryzmClient } = useContracts();
  // // const mutation = useCwPryzmIncrementMutation();

  // console.log("cwPryzmQueryClient", cwPryzmQueryClient);
  // console.log("cwPryzmClient", cwPryzmClient);

  useEffect(() => {
    getCosmWasmClient().then(async (cosmWasmClient: any) => {
      if (!cosmWasmClient) {
        return;
      }

      const pryzmClient = new CwPryzmQueryClient(
        cosmWasmClient,
        CONTRACT_ADDRESS
      );
      // console.log("pryzmClient", pryzmClient);
      // console.log("pryzmClient.getCount", await pryzmClient.getCount());
      setCount((await pryzmClient.getCount()).count);
      // if (pryzmClient) {
      //   console.log("pryzmClient.getCount()", await pryzmClient.getCount());
      // }
      // console.log("pryzmClient", pryzmClient);
    });

    // async function fet() {
    //   // const res = await cwPryzmClient?.getCount();
    //   // console.log("counter SC", res);
    //   const client = new CwPryzmClient(getSigningCosmWasmClient, address, CONTRACT_ADDRESS)
    // }
    // if (CwPryzmClient) {
    //   fet();
    // }
  }, [getCosmWasmClient]);

  const increment = async () => {
    const signingCosmWasmClient = await getSigningStargateClient();
    if (!signingCosmWasmClient) {
      return;
    }
    const pryzmClient = new CwPryzmClient(
      // @ts-ignore
      signingCosmWasmClient,
      address,
      CONTRACT_ADDRESS
    );

    if (!pryzmClient) {
      return;
    }

    console.log("increment ?", pryzmClient.increment());
  };

  return (
    <div>
      <Chain
        name={chain.pretty_name}
        logo={getChainLogo(chain.chain_name)!}
      ></Chain>
      <Button onClick={increment}>Increment</Button>
      {count && <div>Counter from SC state: {count}</div>}
      {username ? <User name={username} /> : null}
      {address ? <div className="border p-2">{address}</div> : null}
      {ConnectButton}

      {message &&
      [WalletStatus.Error, WalletStatus.Rejected].includes(status) ? (
        <Warning text={`${wallet?.prettyName}: ${message}`} />
      ) : null}
    </div>
  );
}
