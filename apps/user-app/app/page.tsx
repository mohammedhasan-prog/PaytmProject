"use client";

import { db } from "@repo/db/client";
import { navbar as Navbar } from "@repo/ui/navbar";
import { signIn, signOut,useSession } from "next-auth/react";

export default function Home() {
  const   {data}  = useSession();
  return (
    <div className=" bg-gray-100">
      <Navbar onSignIn={signIn} onSignOut={signOut} data={data}  />
    </div>
  );
}
