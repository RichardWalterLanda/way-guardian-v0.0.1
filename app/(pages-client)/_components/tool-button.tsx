'use client'
import {FiPlusCircle, FiChevronLeft} from "react-icons/fi";
import React from "react";
import {cn} from "@/lib/utils";

type TToolButton = {
  className?: string
}

export default function ToolButton (props: TToolButton) {
  return (
    <button className={cn(props.className, `hover:text-green-400 duration-300`)}>
      <FiPlusCircle className={`w-full h-full navigation-text-shadow hidden md:block`}/>
      <FiChevronLeft className={`w-full h-full navigation-text-shadow md:hidden`}/>
    </button>
  )
}