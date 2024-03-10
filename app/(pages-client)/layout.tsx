import React from "react"
import { FiPlusCircle } from "react-icons/fi";
import ToolButton from "@/app/(pages-client)/_components/tool-button";

export default async function PagesLayout ({children}: {children: React.ReactNode}) {
  return (
    <main className={`md:p-5 flex w-full flex-col min-h-screen relative`}>
      {children}
      <ToolButton className={`absolute md:right-10 md:bottom-10 right-2 bottom-1/2 z-10 h-14 w-14`} />
    </main>

  )
}