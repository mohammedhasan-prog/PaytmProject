"use client";

import { db } from "@repo/db/client";
import { navbar as Navbar } from "@repo/ui/navbar";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className=" bg-gray-100">
      <Navbar/>
    </div>
  );
}
