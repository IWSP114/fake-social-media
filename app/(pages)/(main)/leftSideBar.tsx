"use client"

import UserIcon from "../../../assest/MainPage/user-icon.png"
import ThreadsIcon from "../../../assest/MainPage/threads-icon.png"
import Image from "next/image"
import Link from "next/link"
import { AudioLines, Bookmark, Ellipsis, Group, MessageCircleCode, TvMinimalPlay, Users } from "lucide-react"


export function LeftSideBar() {
  return (
    <div className="fixed top-16 left-0 w-1/6 h-[calc(100vh-5rem)] hidden md:flex flex-col justify-between py-4 border-gray-300 border-r-1 border-solid">
      <div className="flex flex-col">
        <h1 className="mx-6 my-2 font-bold italic font-sans text-2xl">Fake! Social Media</h1>

        <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
          <div className="relative rounded-full w-10 h-10 overflow-hidden">
            <Image
              src={UserIcon}
              alt="User Icon"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>

          <h3 className="mx-2 font-bold">User</h3>
        </div>

        <Link href="/friends">
        <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2">
            <Users className="w-full h-full text-gray-700" />
          </div>
          

          <h3 className="mx-2 font-bold">Friends</h3>
        </div>
        </Link>

        <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2">
            <Bookmark className="w-full h-full text-gray-700" fill="currentColor" />
          </div>

          <h3 className="mx-2 font-bold">Saved</h3>
        </div>

        <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2">
            <Group className="w-full h-full text-gray-700" fill="white" />
          </div>

          <h3 className="mx-2 font-bold">Groups</h3>
        </div>

        <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2">
            <TvMinimalPlay className="w-full h-full text-gray-700" />
          </div>

          <h3 className="mx-2 font-bold">Reels</h3>
        </div>

        <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2">
            <AudioLines className="w-full h-full text-gray-700" />
          </div>

          <h3 className="mx-2 font-bold">Notification</h3>
        </div>

        <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2">
            <MessageCircleCode className="w-full h-full text-gray-700"/>
          </div>

          <h3 className="mx-2 font-bold">Messages</h3>
        </div>

        <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2">
            <Ellipsis className="w-full h-full text-gray-700" />
          </div>

          <h3 className="mx-2 font-bold">More</h3>
        </div>
      </div>

      <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
        <div className="rounded-full w-10 h-10 p-2">
          <Image
            src={ThreadsIcon}
            alt="User Icon"
            style={{
              width: 'auto',
              height: '100%',
              objectFit: 'contain'
            }} />
        </div>
        <h3 className="mx-2 font-bold">Threads</h3>
      </div>

    </div>
  )
}
