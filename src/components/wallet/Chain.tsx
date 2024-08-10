"use client";

import Image from "next/image";

export type ChainProps = {
  name: string;
  logo?: string;
};

export const DefaultChainLogo =
  "https://dummyimage.com/150/9e9e9e/ffffff&text=☒";

export function Chain({ name, logo = DefaultChainLogo }: any) {
  return (
    <div>
      <Image
        alt={name}
        src={logo}
        width="38"
        height="38"
        style={{ borderRadius: "100%" }}
      />

      <div>{name}</div>
    </div>
  );
}
