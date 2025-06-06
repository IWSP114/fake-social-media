import React from 'react'
import Image from 'next/image'
import UserIcon from "../../../../assest/MainPage/user-icon.png"

export function ChatRoom({ chatRoomName }: { chatRoomName: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg hover:bg-gray-200 p-2 cursor-pointer">
      <div className="relative rounded-full w-10 h-10 p-2 bg-gray-100 overflow-hidden">
        <Image
          src={UserIcon}
          alt="User Icon"
          fill
          className="object-cover"
        />
      </div>
      <h2 className="font-normal text-lg">{chatRoomName}</h2>
    </div>
  )
}
