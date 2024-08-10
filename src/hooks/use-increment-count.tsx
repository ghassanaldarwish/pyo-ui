"use client";
import { CwPryzmClient } from "@/config/contracts/CwPryzm.client";
import { useChain } from "@cosmos-kit/react";
import { CHAIN_NAME, CONTRACT_ADDRESS } from "@/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useIncrementCount() {
  const queryClient = useQueryClient();
  const { getSigningCosmWasmClient, address }: any = useChain(CHAIN_NAME);
  const mutation = useMutation({
    mutationFn: async () => {
      const client = await getSigningCosmWasmClient();
      const queryClient = new CwPryzmClient(client, address, CONTRACT_ADDRESS);
      const gasLimit = 200000; // This is a safe starting point
      const fee = {
        amount: [{ denom: "upryzm", amount: "500" }],
        gas: gasLimit.toString(),
      };

      return await queryClient.increment(fee);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["count"] }),
  });
  return mutation;
}
