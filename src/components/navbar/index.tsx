import Link from "next/link";
import { Menu, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../mode-toggle";
import { Wallet } from "../wallet";
export default function Navbar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4  bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">About</span>
        </Link>
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Pryzm
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">About</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              Pryzm
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto gap-4 flex flex-1 sm:flex-initial">
          <Select defaultValue="pryzmtestnet">
            <SelectTrigger>
              <SelectValue placeholder="Select a network" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>pryzmtestnet</SelectLabel>
                <SelectItem value="pryzmtestnet">pryzmtestnet</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Wallet />
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
