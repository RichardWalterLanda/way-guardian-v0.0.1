'use client'
import NavigationLink from "@/app/_components/navigation-link";
import {FiAirplay, FiCreditCard, FiFolder, FiCalendar, FiLayers, FiSettings, FiUser, FiLogOut} from "react-icons/fi";
import CustomAvatar from "@/app/_components/custom-avatar";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import React from "react";

export default function NavigationBar({className}: { className: string }) {

  const curretpath = usePathname()

  return (
    <aside className={className}>
      <nav className={`text-center h-full flex md:flex-col items-center justify-between px-2 md:px-0 md:py-2`}>
        <div className={`md:flex md:flex-col md:px-2 md:w-full py-2 md:justify-center md:items-center`}>
          <CustomAvatar className={cn(`hidden md:block w-full h-full border-2 navigation-text-shadow`, curretpath === "/profile" ? 'border-green-400' : '')}
                        src={'/assets/avatar-images/avatar.jpg'} link={`/profile`}/>
          <NavigationLink icon={<FiUser
            className={cn(`w-6 h-6 md:w-10 md:h-10 md:hidden`, curretpath === "/profile" ? 'scale-125 navigation-text-shadow text-green-400' : '')}/>}
                          path={'/profile'}/>
        </div>
        <ul className={`flex md:flex-col gap-5 md:gap-10 h-full justify-center items-center md:w-full`}>
          <NavigationLink icon={<FiAirplay
            className={cn(`w-6 h-6 md:w-10 md:h-10 duration-300`, curretpath === "/" ? 'scale-125 navigation-text-shadow text-green-400' : '')}/>}
                          pathname={curretpath} path={'/'}/>
          <NavigationLink icon={<FiCreditCard
            className={cn(`w-6 h-6 md:w-10 md:h-10 duration-300`, curretpath === "/finances" ? 'scale-125 navigation-text-shadow text-green-400' : '')}/>}
                          pathname={curretpath} path={'/finances'}/>
          <NavigationLink icon={<FiFolder
            className={cn(`w-6 h-6 md:w-10 md:h-10 duration-300`, curretpath === "/documents" ? 'scale-125 navigation-text-shadow text-green-400' : '')}/>}
                          pathname={curretpath} path={'/documents'}/>
          <NavigationLink icon={<FiCalendar
            className={cn(`w-6 h-6 md:w-10 md:h-10 duration-300`, curretpath === "/schedule" ? 'scale-125 navigation-text-shadow text-green-400' : '')}/>}
                          pathname={curretpath} path={'/schedule'}/>
          <NavigationLink icon={<FiLayers
            className={cn(`w-6 h-6 md:w-10 md:h-10 duration-300`, curretpath === "/history" ? 'scale-125 navigation-text-shadow text-green-400' : '')}/>}
                          pathname={curretpath} path={'/history'}/>
        </ul>
        <div className={`flex md:flex-col gap-2 md:gap-10`}>
          <NavigationLink icon={<FiSettings className={cn(`w-6 h-6 md:w-10 md:h-10` , curretpath === "/settings" ? 'scale-125 navigation-text-shadow text-green-400' : '')}/>} path={'/settings'}/>
          <NavigationLink icon={<FiLogOut className={`w-6 h-6 md:w-10 md:h-10`}/>} path={'/auth/login'}/>
        </div>
      </nav>
    </aside>
  )
}