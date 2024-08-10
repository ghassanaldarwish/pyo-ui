"use client";
import { CwPryzmClient } from "@/config/contracts/CwPryzm.client";
import { useChain } from "@cosmos-kit/react";
import { CHAIN_NAME, CONTRACT_ADDRESS } from "@/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useResetCount() {
  const queryClient = useQueryClient();
  const { getSigningCosmWasmClient, address }: any = useChain(CHAIN_NAME);

  const mutation = useMutation({
    mutationFn: async () => {
      if (!address) {
        return;
      }
      const client = await getSigningCosmWasmClient();
      const queryClient = new CwPryzmClient(client, address, CONTRACT_ADDRESS);
      const fee = {
        amount: [{ denom: "upryzm", amount: "5000" }],
        gas: "300000",
      };
      console.log("Address:", address);
      console.log("Contract Address:", CONTRACT_ADDRESS);
      console.log("Fee:", fee);

      return await queryClient.reset({ count: 0 }, fee);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["count"] }),
  });
  return mutation;
}
