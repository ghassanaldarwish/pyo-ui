"use client";

import { CHAIN_PRYZM_RPC } from "@/config/defaults";

export default async function addKeplr() {
  if ((window as any).keplr) {
    await (window as any).keplr.experimentalSuggestChain({
      chainId: "privatenet",
      chainName: "pryzmlocalnet",
      rpc: CHAIN_PRYZM_RPC,
      rest: CHAIN_PRYZM_RPC,
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "pryzm",
        bech32PrefixAccPub: "pryzmpub",
        bech32PrefixValAddr: "pryzmvaloper",
        bech32PrefixValPub: "pryzmvaloperpub",
        bech32PrefixConsAddr: "pryzmvalcons",
        bech32PrefixConsPub: "pryzmvalconspub",
      },
      currencies: [
        {
          coinDenom: "PRYZM",
          coinMinimalDenom: "upryzm",
          coinDecimals: 6,
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "PRYZM",
          coinMinimalDenom: "upryzm",
          coinDecimals: 6,
        },
      ],
      gasPriceStep: {
        low: 0.015,
        average: 0.025,
        high: 0.04,
      },
      features: ["stargate", "ibc-transfer", "cosmwasm"],
    });
  }
}

export const chainPryzmInfo: any = {
  $schema: "../../chain.schema.json",

  chain_name: "pryzmlocalnet",
  status: "live",
  network_type: "testnet",
  pretty_name: "Pryzm Localnet",
  chain_type: "cosmos",
  chain_id: "privatenet",
  bech32_prefix: "pryzm",
  daemon_name: "pryzmd",
  node_home: "$HOME/.pryzm",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "upryzm",
        fixed_min_gas_price: 0,
        low_gas_price: 0.015,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: "upryzm",
      },
    ],
  },
  codebase: {
    cosmos_sdk_version: "0.47",
    cosmwasm_enabled: true,
    cosmwasm_version: "0.30",
    consensus: {
      type: "tendermint",
      version: "0.34",
    },
    ibc_go_version: "1.0.0",
    genesis: {
      name: "privatenet-genesis",
      genesis_url: "http://localhost:8999/genesis",
    },
  },
  apis: {
    rpc: [
      {
        address: CHAIN_PRYZM_RPC,
        provider: "Localhost",
      },
    ],
    rest: [
      {
        address: CHAIN_PRYZM_RPC,
        provider: "Localhost",
      },
    ],
    grpc: [
      {
        address: CHAIN_PRYZM_RPC,
        provider: "Localhost",
      },
    ],
  },
  logo_URIs: {
    png: "https://yourdomain.com/path-to-your-logo.png",
    svg: "https://yourdomain.com/path-to-your-logo.svg",
  },
  explorers: [],
  images: [
    {
      png: "https://yourdomain.com/path-to-your-logo.png",
      svg: "https://yourdomain.com/path-to-your-logo.svg",
    },
  ],
};

export const chainPryzmAssets = {
  $schema: "../../assetlist.schema.json",
  chain_name: "pryzmlocalnet",
  assets: [
    {
      description: "The native staking and governance token of the privatenet.",
      denom_units: [
        {
          denom: "upryzm", // The base unit of the token
          exponent: 0,
        },
        {
          denom: "pryzm", // The display unit of the token
          exponent: 6,
        },
      ],
      base: "upryzm", // Base denom
      name: "Pryzm", // Name of the token
      display: "pryzm", // Display denom
      symbol: "PRYZM", // Symbol of the token
      logo_URIs: {
        png: "https://yourdomain.com/path-to-your-logo.png",
        svg: "https://yourdomain.com/path-to-your-logo.svg",
      },
      images: [
        {
          png: "https://yourdomain.com/path-to-your-logo.png",
          svg: "https://yourdomain.com/path-to-your-logo.svg",
        },
      ],
    },
  ],
};
