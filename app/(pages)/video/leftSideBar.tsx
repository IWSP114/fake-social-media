"use client"

import { Settings, TvMinimalPlay, Video, Film, Rocket, Bookmark } from "lucide-react"
import Link from "next/link";
import { useState } from "react";
import { VideoOptions } from "./videoOptions";

{/* Video page left side bar */}
export function LeftSideBar() {
  const [showVideoOptions, setShowVideoOptions] = useState<boolean>(false);

  return (
    <div className="h-full min-w-1/5 hidden md:flex flex-col justify-between px-2 py-4 border-gray-300 border-r-1 border-solid bg-white overflow-y-auto">
      <div className="flex flex-col">
        <div className="relative flex justify-between items-center px-2">
          <h1 className="my-2 font-bold font-sans text-2xl">Video</h1>
          <button onClick={() => setShowVideoOptions((s => !s))} className={`relative rounded-full ${showVideoOptions ? "bg-sky-300" : "bg-slate-200" } hover:bg-gray-400 active:scale-98 w-8 h-8 p-2 cursor-pointer`}>
            {showVideoOptions && <Settings color="#ffffff" strokeWidth={3} className="w-full h-full text-gray-700" />}
            {!showVideoOptions && <Settings strokeWidth={3} className="w-full h-full text-gray-700" />}
          </button>
          {/* Video option */}
          <VideoOptions visable={showVideoOptions} />
        </div>

        {/* Video Options Container*/}
        <div className="flex flex-col">
          <input className="rounded-4xl px-4 py-2 bg-slate-200 mx-1 my-2 text-sm" type="text" placeholder="Search..." />

          <Link href="/">
            <div className="flex items-center bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-blue-600">
                <TvMinimalPlay className="w-full h-full text-gray-700" color="#ffffff" fill="white" />
              </div>

              <h3 className="mx-2 font-bold">Videos</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Video className="w-full h-full text-gray-700" fill="currentColor" />
              </div>

              <h3 className="mx-2 font-bold">Lives</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Film className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Reels</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Rocket className="w-full h-full text-gray-700" />
              </div>

              <h3 className="mx-2 font-bold">Explore</h3>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
              <div className="rounded-full w-9 h-9 p-2 bg-slate-200">
                <Bookmark className="w-full h-full text-gray-700" fill="currentColor" />
              </div>

              <h3 className="mx-2 font-bold">Saved</h3>
            </div>
          </Link>

        </div>

      </div>

    </div>
  )
}
