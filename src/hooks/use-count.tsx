"use client";
import { CwPryzmQueryClient } from "@/config/contracts/CwPryzm.client";
import { useChain } from "@cosmos-kit/react";
import { CHAIN_NAME, CONTRACT_ADDRESS } from "@/config";
import { useQuery } from "@tanstack/react-query";

export default function useCount() {
  const { getCosmWasmClient } = useChain(CHAIN_NAME);

  return useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      const client = await getCosmWasmClient();
      const queryClient = new CwPryzmQueryClient(client, CONTRACT_ADDRESS);
      return queryClient.getCount();
    },
  });
}

/*
function Todos() {
  const { status, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  })

  if (status === 'pending') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  // also status === 'success', but "else" logic works, too
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}*/
