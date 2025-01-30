"use client"
import { SessionProvider } from "next-auth/react"

export const provider = ({children}:{
    children: React.ReactNode
}) => {
  return (

    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

