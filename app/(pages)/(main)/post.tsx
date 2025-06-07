"use client"

import UserIcon from "../../../assest/MainPage/user-icon.png"
import PostPicture1 from "../../../assest/MainPage/posts-picture1.png"
import type { Post } from "./postType"
import Image from "next/image"
import { useState } from "react"

export function Post({ username, message, likes, comments, shares, picture } : Post) {
  const [isLiked,  setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(prev => !prev);
    console.log(isLiked);
  }

  return (
    <div className="sm:min-w-100 sm:max-w-2/5 border-gray-100 border-1 border-solid rounded-xl py-2 bg-white shadow-lg mb-4">
          <div className="flex flex-col">
            {/* Post Header */}
            <div className="flex justify-between p-2">
              {/* Post Left Top */}
              <div className="flex gap-2 tracking-tighter">
                <div className="relative rounded-full w-10 h-10 overflow-hidden">
                  <Image
                    src={UserIcon}
                    alt="User Icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0 p-0">
                  <h2 className="font-bold text-base">{username}</h2>
                  <p className="font-bold text-sm text-gray-600">20 Mins ago</p>
                </div>

              </div>

              {/* Post Right Top */}
              <div className="flex items-center">
                <button className="rounded-full hover:bg-gray-300 p-2 text-lg cursor-pointer">X</button>
              </div>
            </div>

            {/* Post Body */}
            <div className="h-auto py-2 font-sans select-text break-normal">
              {/* Post Text */}
              <p className="px-2">{message}</p>
              {/* Post Pciture */}
              {picture && 
              <div className="w-full aspect-square relative border-gray-600 border-1 border-solid">
                  <Image
                    src={PostPicture1}
                    alt="User Icon"
                    fill
                    className="object-cover"
                  />
              </div>
              }
            </div>

            {/* Post Footer */}
            <div className="flex justify-between p-2 border-gray-300 border-b-1 border-solid">
              <div className="text-sm font-bold text-gray-500 tracking-tighter cursor-pointer hover:underline">{isLiked ? (`You and other ${likes} people liked`) : (`${likes} likes`)}</div>

              <div className="flex gap-2">
                <div className="text-sm font-bold text-gray-500 tracking-tighter cursor-pointer hover:underline">{comments} Comments</div>
                <div className="text-sm font-bold text-gray-500 tracking-tighter cursor-pointer hover:underline">{shares} Shares</div>
              </div>
            </div>

            <div className="flex gap-2 items-center mt-2">
              <div onClick={() => handleLike()} className={`flex flex-1 font-semibold ${isLiked ? "text-blue-600" : "text-gray-600" } tracking-tight justify-center items-center rounded-sm hover:bg-gray-300 cursor-pointer`}>
                Like
              </div>

              <div className="flex flex-1 font-semibold text-gray-600 tracking-tight justify-center items-center rounded-sm hover:bg-gray-300 cursor-pointer">
                Comments
              </div>

              <div className="flex flex-1 font-semibold text-gray-600 tracking-tight justify-center items-center rounded-sm hover:bg-gray-300 cursor-pointer">
                Share
              </div>
            </div>

          </div>
        </div>
  )
}
