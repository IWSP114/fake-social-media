"use client"

import { ShoppingCart, ShoppingBag, Mailbox, BellRing, ShieldPlus, Tag, CarFront, HousePlus, Tags, PenLine, Shovel, Video, Wrench, BrickWall, Settings } from "lucide-react"
import Link from "next/link";
import { useState } from "react";
import { MarketplaceOptions } from "./marketOptions";

{/* Marketplace page left side bar */}
export function LeftSideBar() {
  const [showMarketplaceOptions, setShowMarketplaceOptions] = useState<boolean>(false);

  return (
    <div className="h-full min-w-1/5 hidden md:flex flex-col justify-between px-2 py-4 border-gray-300 border-r-1 border-solid bg-white overflow-y-auto">
      <div className="flex flex-col">
        <div className="relative flex justify-between items-center px-2">
          <h1 className="my-2 font-bold font-sans text-2xl">Marketplace</h1>
          <button onClick={() => setShowMarketplaceOptions((s => !s))} className={`relative rounded-full ${showMarketplaceOptions ? "bg-sky-300" : "bg-slate-200" } hover:bg-gray-400 active:scale-98 w-8 h-8 p-2 cursor-pointer`}>
            {showMarketplaceOptions && <Settings color="#ffffff" strokeWidth={3} className="w-full h-full text-gray-700" />}
            {!showMarketplaceOptions && <Settings strokeWidth={3} className="w-full h-full text-gray-700" />}
          </button>
          {/* Marketplace option */}
          <MarketplaceOptions visable={showMarketplaceOptions} />
        </div>

        {/* Market Options Container*/}
        <div className="flex flex-col border-gray-300 border-b-1 border-solid">
          <input className="rounded-4xl px-4 py-2 bg-slate-200 mx-1 my-2 text-sm" type="text" placeholder="Search..." />

          <Link href="/">
            <div className="flex items-center bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-blue-600">
                <ShoppingCart className="w-full h-full text-gray-700" color="#ffffff" />
              </div>

              <h3 className="mx-2 font-bold">View All</h3>
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

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Mailbox className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Mailbox</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <ShieldPlus className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Access Rights</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <ShoppingBag className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Purchase</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Tag className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Sell</h3>
            </div>
          </Link>

          <div className="flex items-center justify-center bg-sky-100 hover:bg-gray-300 text-blue-500 py-1.5 m-2 rounded-lg font-semibold cursor-pointer"> + Hit the Shelves</div>
        </div>

        {/* Location Container*/}
        <div className="flex flex-col border-gray-300 border-b-1 border-solid gap-2 px-2 py-4">
          <h1 className="text-black font-bold text-lg">Location</h1>
          <h2 className="text-blue-600 font-semibold text-base">Hong Kong ‧ 100 Kilometer within</h2>
        </div>

        {/* Category Container*/}
        <div className="flex flex-col border-gray-300 border-b-1 border-solid py-4">
          <h1 className="text-black font-bold text-lg mx-2">Category</h1>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <CarFront className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Vehicles</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <HousePlus className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Houses</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Tag className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Free</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Tags className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Classifieds</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <PenLine className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Hobby</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Shovel className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Garden and Outdoor Item</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Video className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Entertainment</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <BrickWall className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Home Furnishings</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Wrench className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Home Improvement Supplies</h3>
            </div>
          </Link>
        </div>

      </div>

    </div>
  )
}
