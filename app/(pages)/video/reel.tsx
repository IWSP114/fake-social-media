"use client"

import UserIcon from "../../../assest/MainPage/user-icon.png"
import Image from "next/image"
import { useState } from "react"
import { EllipsisVertical } from "lucide-react"

type Reel = {
  username: string,
  message?: string,
  likes: number,
  comments: number,
  shares: number,
  views: number,
  video_name: string
}

export default function Reel({ username, message, likes, comments, shares, views, video_name }: Reel) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(prev => !prev);
    console.log(isLiked);
  }

  // Hashtag detector: split message and wrap hashtags
  function renderMessageWithTags(msg: string) {
    return msg.split(/(\s+)/).map((word, idx) =>
      word.startsWith("#") && word.length > 1 ? (
        <span key={idx} className="text-blue-600 font-semibold">{word}</span>
      ) : (
        <span key={idx}>{word}</span>
      )
    );
  }

  return (
    <div className="sm:min-w-3/5 sm:max-w-3/5 border-gray-100 border-1 border-solid rounded-xl py-2 bg-white shadow-lg mb-4">
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
            <button className="rounded-full hover:bg-gray-300 p-2 text-lg cursor-pointer"><EllipsisVertical /></button>
          </div>
        </div>

        {/* Post Body */}
        <div className="h-auto py-2 font-sans select-text break-normal">
          {/* Post Text */}
          {message && 
          <p className="px-2 mb-2">{renderMessageWithTags(message)}</p>
          }
          {/* Post Reels */}
          <video
            src={`/videos/${video_name}.mp4`}
            controls
            className="w-full h-100 object-contain bg-black"
          />

        </div>

        {/* Post Footer */}
        <div className="flex justify-between p-2 border-gray-300 border-b-1 border-solid">
          <div className="text-sm font-bold text-gray-500 tracking-tighter cursor-pointer hover:underline">{isLiked ? (`You and other ${likes} people liked`) : (`${likes} likes`)}</div>

          <div className="flex gap-2">
            <div className="text-sm font-bold text-gray-500 tracking-tighter cursor-pointer hover:underline">{comments} Comments</div>
            <div className="text-sm font-bold text-gray-500 tracking-tighter cursor-pointer hover:underline">{shares} Shares</div>
            <div className="text-sm font-bold text-gray-500 tracking-tighter cursor-pointer hover:underline">{views}K Watched</div>
          </div>
        </div>

        <div className="flex gap-2 items-center mt-2">
          <div onClick={() => handleLike()} className={`flex flex-1 font-semibold ${isLiked ? "text-blue-600" : "text-gray-600"} tracking-tight justify-center items-center rounded-sm hover:bg-gray-300 cursor-pointer`}>
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
