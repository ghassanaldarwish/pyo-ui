"use client";

import { ReactNode } from "react";
import { Astronaut } from "./Astronaut";

export type UserProps = {
  name: string;
  icon?: ReactNode;
};

export function User({ name, icon = <Astronaut /> }: UserProps) {
  return (
    <div>
      <div>{icon}</div>

      <div>{name}</div>
    </div>
  );
}
