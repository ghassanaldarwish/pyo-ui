"use client";

import { DollarSign, Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useCount from "@/hooks/use-count";
import useIncrementCount from "@/hooks/use-increment-count";
import useResetCount from "@/hooks/use-reset-count";
import { useChain } from "@cosmos-kit/react";
import { CHAIN_NAME } from "@/config";
import { WalletStatus } from "cosmos-kit";
import { Wallet } from "../wallet";
import WithdrawAmountDialog from "../withdraw-amount-dialog";

export default function TransactionsForm() {
  const { status } = useChain(CHAIN_NAME);

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

  const increment = async () => {
    incrementMutation.mutateAsync();
  };

  const reset = async (e: any) => {
    e.preventDefault();

    const amount: number = Number(e.target.amount.value || 0);

    if (amount > count) {
      alert("Amount should be less than or equal to the current balance");
      return;
    }

    resetMutation.mutateAsync({ count: count - amount });
  };
  return WalletStatus.Connected === status ? (
    <Card x-chunk="dashboard-01-chunk-0" className="w-80">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${count || 0}</div>
        <div>
          <Button onClick={increment} className="w-full mt-4">
            Deposit
          </Button>
          <WithdrawAmountDialog
            amount={count}
            onSubmit={reset}
            className="w-full mt-4"
          />
        </div>
      </CardContent>
    </Card>
  ) : (
    <Wallet />
  );
}
