"use client";

import { WalletStatus } from "cosmos-kit";
import { useChain } from "@cosmos-kit/react";
import { getChainLogo } from "@/lib/utils";
import { CHAIN_NAME } from "@/config";
import { User } from "./User";
import { Chain } from "./Chain";
import { Warning } from "./Warning";
import {
  ButtonConnect,
  ButtonConnected,
  ButtonConnecting,
  ButtonDisconnected,
  ButtonError,
  ButtonNotExist,
  ButtonRejected,
} from "./Connect";
import { useCwPryzmIncrementMutation } from "@/config/contracts/CwPryzm.react-query";
import { useContracts } from "../contracts-context";

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
  } = useChain(CHAIN_NAME);

  const ConnectButton = {
    [WalletStatus.Connected]: <ButtonConnected onClick={openView} />,
    [WalletStatus.Connecting]: <ButtonConnecting />,
    [WalletStatus.Disconnected]: <ButtonDisconnected onClick={connect} />,
    [WalletStatus.Error]: <ButtonError onClick={openView} />,
    [WalletStatus.Rejected]: <ButtonRejected onClick={connect} />,
    [WalletStatus.NotExist]: <ButtonNotExist onClick={openView} />,
  }[status] || <ButtonConnect onClick={connect} />;

  const { cwPryzmQueryClient, cwPryzmClient } = useContracts();
  // const mutation = useCwPryzmIncrementMutation();

  console.log("cwPryzmQueryClient", cwPryzmQueryClient);
  console.log("cwPryzmClient", cwPryzmClient);

  const increment = () => {
    // if (client) {
    //   mutation.mutate({ client });
    // }
  };

  return (
    <div>
      <Chain
        name={chain.pretty_name}
        logo={getChainLogo(chain.chain_name)!}
      ></Chain>

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
