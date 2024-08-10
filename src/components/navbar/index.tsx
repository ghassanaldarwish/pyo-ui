import React from "react";
import { ModeToggle } from "../mode-toggle";
// import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-950 w-full">
      <div>Logo</div>
      <div></div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
