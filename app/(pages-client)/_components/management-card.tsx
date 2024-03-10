'use client'
import React from "react"
import {FiMoreVertical} from "react-icons/fi";
import {cn} from "@/lib/utils";

type TManagementCard = {
  className?: string
}

export default function ManagementCard(props: TManagementCard) {
  return (
    <div
      className={cn(props.className, `text-black border-2 border-white w-[250px] h-[180px] rounded-xl rounded-tl-[50px] shadow-md shadow-orange-100 bg-white p-5 flex`)}>
      <div className={`w-full flex flex-col h-full items-end justify-between`}>
        <div>
          <FiMoreVertical className={`w-6 h-6`}/>
        </div>
        <div className={`w-full flex justify-between`}>
          <div>
            <h2 className={`text-sm`}>Documents</h2>
            <p className={`text-xs`}>Last uploaded:</p>
            <p className={`text-xs text-neutral-500`}>10.20/32</p>
          </div>
          <button className={``}>UP</button>
        </div>
      </div>
    </div>
  )
}