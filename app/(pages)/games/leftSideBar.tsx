"use client"

import { Gamepad, BellRing,HousePlus, Settings, Gamepad2, UserRound, Bookmark, Axe, Map, Joystick, Sword, Crown, Spade, Ruler } from "lucide-react"
import Link from "next/link";
import { useState } from "react";
import { GameOptions } from "./gameOptions";

{/* Games page left side bar */ }
export function LeftSideBar() {
  const [showMarketplaceOptions, setShowMarketplaceOptions] = useState<boolean>(false);

  return (
    <div className="h-full min-w-1/5 hidden md:flex flex-col justify-between px-2 py-4 border-gray-300 border-r-1 border-solid bg-white overflow-y-auto">
      <div className="flex flex-col">
        <div className="relative flex justify-between items-center px-2">
          <h1 className="my-2 font-bold font-sans text-2xl">Gaming</h1>
          <button onClick={() => setShowMarketplaceOptions((s => !s))} className={`relative rounded-full ${showMarketplaceOptions ? "bg-sky-300" : "bg-slate-200"} hover:bg-gray-400 active:scale-98 w-8 h-8 p-2 cursor-pointer`}>
            {showMarketplaceOptions && <Settings color="#ffffff" strokeWidth={3} className="w-full h-full text-gray-700" />}
            {!showMarketplaceOptions && <Settings strokeWidth={3} className="w-full h-full text-gray-700" />}
          </button>
          {/* Gaming option */}
          <GameOptions visable={showMarketplaceOptions} />
        </div>

        {/* Gaming Options Container*/}
        <div className="flex flex-col border-gray-300 border-b-1 border-solid">
          <input className="rounded-4xl px-4 py-2 bg-slate-200 mx-1 my-2 text-sm font-semibold" type="text" placeholder="Search Gaming..." />

          <Link href="/">
            <div className="flex items-center bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-blue-600">
                <Gamepad2 className="w-full h-full text-gray-700" color="#ffffff" />
              </div>

              <h3 className="mx-2 font-bold">Play Games</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <UserRound className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Game News</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <BellRing className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Notification</h3>
            </div>
          </Link>

        </div>

        {/* Saved Container*/}
        <div className="flex flex-col border-gray-300 border-b-1 border-solid gap-2 py-4">
          <div className="mx-2">
            <h1 className="text-black font-bold text-lg">Your Games</h1>
            <h2 className="text-gray-500 font-light text-xs">Save games to &quot;Your Games&quot; and create shortcuts there.</h2>
          </div>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Bookmark className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Saved Games</h3>
            </div>
          </Link>
          
        </div>

        {/* Category Container*/}
        <div className="flex flex-col border-gray-300 border-b-1 border-solid py-4">
          <h1 className="text-black font-bold text-lg mx-2">Category</h1>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Gamepad className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">All Games</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Axe className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Action</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Map className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Adventure</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Joystick className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Arcade</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Sword className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">War</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Crown className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Checkerboard</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <HousePlus className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Building</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Spade className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Cards</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Ruler className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Design</h3>
            </div>
          </Link>
        </div>

      </div>

    </div>
  )
}
