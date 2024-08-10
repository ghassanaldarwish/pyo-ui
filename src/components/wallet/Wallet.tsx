"use client";

import { WalletStatus } from "cosmos-kit";
import { useChain } from "@cosmos-kit/react";
import { CHAIN_NAME } from "@/config";

import {
  ButtonConnect,
  ButtonConnected,
  ButtonConnecting,
  ButtonDisconnected,
  ButtonError,
  ButtonNotExist,
  ButtonRejected,
} from "./Connect";
import { toast } from "sonner";
import { useEffect } from "react";

export function Wallet() {
  const { status, address, connect, openView, message, wallet } =
    useChain(CHAIN_NAME);

  useEffect(() => {
    if (
      [WalletStatus.Connected].includes(status) &&
      ![WalletStatus.Connecting].includes(status)
    ) {
      toast("Connected to:", {
        description: address,
      });
    }
  }, [status, address]);

  const ConnectButton = {
    [WalletStatus.Connected]: (
      <ButtonConnected text={address?.slice(0, 20)} onClick={openView} />
    ),
    [WalletStatus.Connecting]: <ButtonConnecting />,
    [WalletStatus.Disconnected]: <ButtonDisconnected onClick={connect} />,
    [WalletStatus.Error]: <ButtonError onClick={openView} />,
    [WalletStatus.Rejected]: <ButtonRejected onClick={connect} />,
    [WalletStatus.NotExist]: <ButtonNotExist onClick={openView} />,
  }[status] || <ButtonConnect onClick={connect} />;

  if ([WalletStatus.Error, WalletStatus.Rejected].includes(status)) {
    toast.error(`${wallet?.prettyName}: ${message}`);
  }

  return ConnectButton;
}

/**
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

import useCount from "@/hooks/use-count";
import useIncrementCount from "@/hooks/use-increment-count";
import useResetCount from "@/hooks/use-reset-count";

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

  const { data: countData, isLoading, isError }: any = useCount();
  const incrementMutation = useIncrementCount();

  const resetMutation = useResetCount();
  const count = countData?.count;

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {isError?.message}</span>;
  }

  const ConnectButton = {
    [WalletStatus.Connected]: <ButtonConnected onClick={openView} />,
    [WalletStatus.Connecting]: <ButtonConnecting />,
    [WalletStatus.Disconnected]: <ButtonDisconnected onClick={connect} />,
    [WalletStatus.Error]: <ButtonError onClick={openView} />,
    [WalletStatus.Rejected]: <ButtonRejected onClick={connect} />,
    [WalletStatus.NotExist]: <ButtonNotExist onClick={openView} />,
  }[status] || <ButtonConnect onClick={connect} />;
  const increment = async () => {
    console.log("increment");
    incrementMutation.mutateAsync();
  };

  const reset = async () => {
    console.log("resetMutation");
    resetMutation.mutateAsync();
  };
  return (
    <div>
      <Chain
        name={chain.pretty_name}
        logo={getChainLogo(chain.chain_name)!}
      ></Chain>
      <Button onClick={increment}>Increment</Button>
      <br />
      <br />

      <Button onClick={reset}>Reset</Button>
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
 */
