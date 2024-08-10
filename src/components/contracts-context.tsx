"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useChain } from "@cosmos-kit/react";
import {
  CwPryzmClient,
  CwPryzmQueryClient,
} from "@/config/contracts/CwPryzm.client"; // Adjust the path according to where your generated code is
import { CHAIN_NAME, CONTRACT_ADDRESS } from "@/config/defaults";

// Define the shape of the context
interface ContractsContextProps {
  cwPryzmClient?: CwPryzmClient;
  cwPryzmQueryClient?: CwPryzmQueryClient;
}

// Create the context
const ContractsContext = createContext<ContractsContextProps>({});

// Export a hook to use the context
export const useContracts = () => useContext(ContractsContext);

// Create the provider component
export const ContractsProvider = ({ children }: { children: ReactNode }) => {
  const { address, getCosmWasmClient, getSigningCosmWasmClient }: any =
    useChain(CHAIN_NAME);

  console.log("address", address);
  console.log("getCosmWasmClient", getCosmWasmClient);
  console.log("getSigningCosmWasmClient", getSigningCosmWasmClient);
  console.log("useChain(CHAIN_NAME)", useChain(CHAIN_NAME));
  // Instantiate the contract clients
  const cwPryzmClient =
    address && getSigningCosmWasmClient
      ? new CwPryzmClient(address, getSigningCosmWasmClient, CONTRACT_ADDRESS)
      : undefined;
  const cwPryzmQueryClient =
    address && getCosmWasmClient
      ? new CwPryzmQueryClient(address, getCosmWasmClient())
      : undefined;
  return (
    <ContractsContext.Provider value={{ cwPryzmClient, cwPryzmQueryClient }}>
      {children}
    </ContractsContext.Provider>
  );
};
