import React from 'react'
import UserIcon from "../../../assest/MainPage/user-icon.png"
import Image from 'next/image'

export function FriendMayKnow() {
  return (
    <div className="flex flex-col h-86 w-50 flex-shrink-0 min-w-32 rounded-xl shadow-xl">
      {/* User Image */}
      <div className="relative h-5/10 w-full overflow-hidden rounded-t-xl">
        <Image
          src={UserIcon}
          alt="User Icon"
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      {/* Username */}
      <div className="h-5/10 w-full rounded-b-xl bg-white flex flex-col justify-center gap-1 px-4 py-1">
        <h1 className="font-bold text-lg cursor-pointer hover:underline">User</h1>
        <h2 className="font-medium text-sm">1 Mutual Friends</h2>
        <button className="bg-sky-100 hover:bg-gray-200 text-blue-500 cursor-pointer px-3 py-1 rounded-lg font-bold">Add Friends</button>
        <button className="bg-slate-200 hover:bg-slate-300 text-black cursor-pointer px-3 py-1 rounded-lg font-bold">Delete</button>
      </div>
    </div>
  )
}
