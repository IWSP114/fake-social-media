"use client"

import React, { memo } from 'react'
import Link from 'next/link'
import { Star } from 'lucide-react'

function HeaderMenu({ visable }: { visable: boolean }) {
  return (
    <div className={`z-99 bg-slate-100 w-screen sm:w-auto left-0 right-0 sm:left-auto sm:top-16 sm:right-5 p-2 sm:pr-10 break-all rounded-xl shadow-xl ${visable ? "fixed" : "hidden"}`}>
      <h3 className="font-bold text-2xl m-2">Menu</h3>
      <div className="flex gap-4">

        {/* Social Container*/}
        <div className="bg-white w-19/20 sm:w-auto flex flex-col flex-nowrap gap-4 p-2 rounded-xl sm:whitespace-nowrap pr-4 shadow-xl">
          <h3 className="text-xl font-bold ml-2">Social</h3>

          <Link href="/">
            <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
              <h3 className="text-lg font-semibold">Home</h3>
              <p className="text-sm break-words">Plan or find things to do online and nearby on Home.</p>
            </div>
          </Link>

          <Link href="/friends">
            <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
              <h3 className="text-lg font-semibold">Friends</h3>
              <p className="text-sm break-words">Search for friends or people you may know.</p>
            </div>
          </Link>

          <Link href="/games">
            <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
              <h3 className="text-lg font-semibold">Games</h3>
              <p className="text-sm break-words">Play mini games on our platform.</p>
            </div>
          </Link>

          <Link href="/market-place">
            <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
              <h3 className="text-lg font-semibold">Market</h3>
              <p className="text-sm break-words">Take a look at the community market.</p>
            </div>
          </Link>

          <Link href="/video">
            <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
              <h3 className="text-lg font-semibold">Video</h3>
              <p className="text-sm break-words">View the latest video from friends, groups, pages and other captains.</p>
            </div>
          </Link>

          <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
            <h3 className="text-lg font-semibold">Pages</h3>
            <p className="text-sm break-words">Discover and connect with businesses on social media.</p>
          </div>

        </div>

        {/* Eatablish Container*/}
        <div className="bg-white hidden sm:flex flex-col flex-nowrap gap-4 px-2 rounded-xl whitespace-nowrap pr-4 pt-6 shadow-xl">
          <div className="border-slate-500 border-b-1 border-solid px-2">
            <h3 className="text-xl font-bold">Establish</h3>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Star />
              <h3 className="text-lg font-medium inline">Posts</h3>
            </div>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Star />
              <h3 className="text-lg font-medium">Story / Stories</h3>
            </div>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Star />
              <h3 className="text-lg font-medium">Reels</h3>
            </div>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Star />
              <h3 className="text-lg font-medium">Life Events</h3>
            </div>
          </div>


          <div className="px-2">

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Star />
              <h3 className="text-lg font-medium">Pages</h3>
            </div>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Star />
              <h3 className="text-lg font-medium">Advertise</h3>
            </div>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Star />
              <h3 className="text-lg font-medium">Groups</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default memo(HeaderMenu)
