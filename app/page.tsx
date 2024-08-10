import Navbar from "@/components/navbar";
import TransactionsForm from "@/components/transactions-form";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <Navbar />
      <main className="flex flex-1 flex-col justify-center items-center gap-4 p-4 md:gap-8 md:p-8 ">
        <TransactionsForm />
      </main>
    </div>
  );
}
