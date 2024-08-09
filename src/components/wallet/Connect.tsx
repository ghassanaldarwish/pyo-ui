"use client";

import { MouseEventHandler } from "react";
import { Button as UIButton } from "@/components/ui/button";

export type ButtonProps = {
  text?: string;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type ConnectProps = Pick<ButtonProps, "text" | "loading" | "onClick">;

function noop() {}

export function Button({
  text,
  icon,
  loading,
  disabled,
  onClick = noop,
}: ButtonProps) {
  return (
    <UIButton onClick={onClick} disabled={disabled}>
      {text}
    </UIButton>
  );
}

export const ButtonConnect = ({
  text = "Connect Wallet",
  onClick = noop,
}: ConnectProps) => <Button text={text} onClick={onClick} />;

export const ButtonConnected = ({
  text = "My Wallet",
  onClick = noop,
}: ConnectProps) => <Button text={text} onClick={onClick} />;

export const ButtonDisconnected = ({
  text = "Connect Wallet",
  onClick = noop,
}: ConnectProps) => <Button text={text} onClick={onClick} />;

export const ButtonConnecting = ({
  text = "Connecting ...",
  loading = true,
}: ConnectProps) => <Button text={text} loading={loading} />;

export const ButtonRejected = ({
  text = "Reconnect",
  onClick = noop,
}: ConnectProps) => <Button text={text} onClick={onClick} />;

export const ButtonError = ({
  text = "Change Wallet",
  onClick = noop,
}: ConnectProps) => <Button text={text} onClick={onClick} />;

export const ButtonNotExist = ({
  text = "Install Wallet",
  onClick = noop,
}: ConnectProps) => <Button text={text} onClick={onClick} />;
