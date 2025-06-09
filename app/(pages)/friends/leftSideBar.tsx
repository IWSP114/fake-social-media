"use client"

import { FriendOptions } from "./friendOptions";
import { useState } from "react";
import Link from "next/link";
import { BookUser, Gift, Settings, UserCheck, UserPlus, UserRoundCog, Users } from "lucide-react";


export function LeftSideBar() {
  const [showFriendOptions, setShowFriendOptions] = useState(false);

  return (
    <div className="h-full min-w-1/5 hidden md:flex flex-col justify-between px-2 py-4 border-gray-300 border-r-1 border-solid bg-white">
      <div className="flex flex-col">
        <div className="relative flex justify-between items-center px-2">
          <h1 className="my-2 font-bold font-sans text-2xl">Friends</h1>
          <button onClick={() => setShowFriendOptions((s => !s))} className={`relative rounded-full ${showFriendOptions ? "bg-sky-300" : "bg-slate-200" } hover:bg-gray-400 active:scale-98 w-8 h-8 p-2 cursor-pointer`}>
            {showFriendOptions && <Settings color="#ffffff" strokeWidth={3} className="w-full h-full text-gray-700" />}
            {!showFriendOptions && <Settings strokeWidth={3} className="w-full h-full text-gray-700" />}
          </button>
          {/* Friends option */}
            <FriendOptions visable={showFriendOptions} />
          
        </div>

        <Link href="/">
          <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
            <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
              <Users className="w-full h-full text-gray-700" />
            </div>

            <h3 className="mx-2 font-bold">Main Page</h3>
          </div>
        </Link>

        <Link href="/">
          <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
            <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
              <UserPlus className="w-full h-full text-gray-700" />
            </div>

            <h3 className="mx-2 font-bold">Friends Suggestion</h3>
          </div>
        </Link>

        <Link href="/">
          <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
            <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
              <UserCheck className="w-full h-full text-gray-700" />
            </div>

            <h3 className="mx-2 font-bold">Friend Invitation</h3>
          </div>
        </Link>

        <Link href="/">
          <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
            <BookUser className="w-full h-full text-gray-700" />
          </div>

          <h3 className="mx-2 font-bold">All Friends</h3>
          </div>
        </Link>

        <Link href="/">
          <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
            <Gift className="w-full h-full text-gray-700" />
          </div>

          <h3 className="mx-2 font-bold">Birthday</h3>
          </div>
        </Link>

        <Link href="/">
          <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
           <UserRoundCog className="w-full h-full text-gray-700" />
          </div>

          <h3 className="mx-2 font-bold">Customize</h3>
          </div>
        </Link>

      </div>

    </div>
  )
}
