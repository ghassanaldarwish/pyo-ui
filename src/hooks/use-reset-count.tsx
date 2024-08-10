"use client";
import { CwPryzmClient } from "@/config/contracts/CwPryzm.client";
import { useChain } from "@cosmos-kit/react";
import { CHAIN_NAME, CONTRACT_ADDRESS } from "@/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useResetCount() {
  const queryClient = useQueryClient();
  const { getSigningCosmWasmClient, address }: any = useChain(CHAIN_NAME);

  const mutation = useMutation({
    mutationFn: async (payload: { count: number }) => {
      if (!address) {
        return;
      }
      console.log("Payload:", payload);
      const client = await getSigningCosmWasmClient();
      const queryClient = new CwPryzmClient(client, address, CONTRACT_ADDRESS);
      const fee = {
        amount: [{ denom: "upryzm", amount: "5000" }],
        gas: "300000",
      };
      console.log("Address:", address);
      console.log("Contract Address:", CONTRACT_ADDRESS);
      console.log("Fee:", fee);

      return await queryClient.reset(payload, fee);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["count"] }),
  });
  return mutation;
}
