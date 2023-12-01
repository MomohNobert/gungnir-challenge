"use client";

import { Hero } from "@/components/landing/hero";
import { NewGaming } from "@/components/landing/new-gaming";
import { ValueNetwork } from "@/components/landing/value-network";

export default function Page() {
  return (
    <>
      <Hero />
      <ValueNetwork />
      <NewGaming />
    </>
  );
}
