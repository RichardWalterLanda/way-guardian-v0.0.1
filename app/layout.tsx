import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/globals.css";
import React from "react";
import NavigationBar from "@/app/_components/navigation-bar";
import {cn} from "@/lib/utils";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Way Guardian v0.0.1",
  description: "Guards your way day and night",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={cn(inter.className, 'relative md:ml-24 mb-20 md:mb-0')}>
    <NavigationBar
      className={cn(`fixed md:left-0 md:h-full md:w-20 bg-[var(--main-bg-darkest)] custom-shadow`, `w-full bottom-0 md:py-0 py-3 z-10`)}/>
    {children}

    </body>
    </html>
  );
}
