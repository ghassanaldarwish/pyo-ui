"use client";

import { ReactNode } from "react";

export type WarningProps = {
  text: string;
  icon?: ReactNode;
};

export function Warning({ text }: WarningProps) {
  return <div>{text}</div>;
}
