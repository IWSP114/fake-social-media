"use client"

import UserIcon from "../../../assest/MainPage/user-icon.png"
import Image from "next/image";
import { Plus } from "lucide-react";

export function PostStory() {
  return (
    <div className="flex flex-col h-full w-32 flex-shrink-0 min-w-32 rounded-xl hover:opacity-80 cursor-pointer">
      {/* Story Image */}
      <div className="relative h-7/10 w-full overflow-hidden rounded-t-xl">
        <Image
          src={UserIcon}
          alt="User Icon"
          fill
        />
      </div>
      {/* Story Username */}
      <div className="relative h-3/10 w-full rounded-b-xl bg-white flex pt-6 justify-center">
        <p className="font-bold text-sm">Post Story</p>
        <div className="absolute -top-5 rounded-full bg-white p-1">
          <div className="flex items-center justify-center rounded-full w-8 h-8 bg-blue-600">
            {/* <Image
              src={AddIcon}
              alt="User Icon"
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }} /> */}
              <Plus size={28} color="#ffffff" strokeWidth={2} />
          </div>
        </div>

      </div>
    </div>
  )
}
