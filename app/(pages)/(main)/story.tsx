"use client"

import UserIcon from "../../../assest/MainPage/user-icon.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export function Story({ name, image } : {name: string, image: StaticImport }) {
  return (
    <div className="flex flex-col h-full w-32 min-w-32 bg-gray-500 flex-shrink-0 rounded-xl hover:opacity-80 cursor-pointer">
      {/* Story Image */}
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt="Story Image"
          fill
          sizes="128px"
          className="object-contain"
        />
        
        <div className="absolute top-2 left-2 rounded-full bg-blue-600 p-1">
          <div className="relative rounded-full w-8 h-8 overflow-hidden">
            <Image
              src={UserIcon}
              alt="User Icon"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute bottom-2 left-4 right-4">
          <p className="font-bold text-sm text-white break-all">{name}</p>
        </div>
      </div>
    </div>
  )
}
