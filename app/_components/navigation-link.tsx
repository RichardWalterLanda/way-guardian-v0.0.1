'use client'
import Link from "next/link"
import React from "react";
import {cn} from "@/lib/utils";

type TNavigationLink = {
  path: string,
  icon: React.ReactNode,
  className?: string,
  pathname?: string
}

export default function NavigationLink (props: TNavigationLink) {
  return (

    <Link href={props.path} className={cn(`md:w-full md:flex md:justify-center`, props.className, props.pathname === props.path ? 'md:border-r-[2px]' : 'border-none')}>
      {props.icon}
    </Link>
  )
}