import UserIcon from "../../../assert/MainPage/user-icon.png"

import { LeftSideBar } from "./leftSideBar"
import { RightSideBar } from "./rightSideBar"
import { Post } from "./post";
import { PostStory } from "./postStory";
import { Story } from "./story";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-screen min-h-screen z-0">
      {/* Left side */}
      <LeftSideBar />

      {/* Center */}
      <div className="flex-1 flex flex-col items-center py-4">
        {/* User Post Head */}
        <div className="w-2/5 border-gray-100 border-1 border-solid rounded-lg p-2 bg-white shadow-lg mb-4">
          {/* User Icon */}
          <div className="flex gap-2 py-2 border-gray-200 border-b-1 border-solid">
            <div className="relative rounded-full w-10 h-10 overflow-hidden">
              <Image
                src={UserIcon}
                alt="User Icon"
                fill
                className="object-cover"
              />
            </div>
            <input className="inline bg-gray-200 hover:bg-gray-300 rounded-2xl flex-grow px-2" type="text" placeholder="What are you thinking?" />
          </div>

          <div className="flex gap-2 items-center mt-2">
            <div className="flex flex-1 justify-center items-center rounded-lg hover:bg-gray-300 py-2 cursor-pointer">
              Lives
            </div>

            <div className="flex flex-1 justify-center items-center rounded-lg hover:bg-gray-300 py-2 cursor-pointer">
              Pictures / Videos
            </div>

            <div className="flex flex-1 justify-center items-center rounded-lg hover:bg-gray-300 py-2 cursor-pointer">
              Feeling / Events
            </div>

          </div>

        </div>

        {/* Story / Stories */}
        <div className="w-2/5 flex items-center gap-2 h-50 mb-2 overflow-x-scroll">

          {/* Post Story */}
          <PostStory />

          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />

        </div>

        {/* Posts */}
        <Post username={"User"} message={"Hello123"} />
        <Post username={"Peter"} message={"Hello123"} />
        <Post username={"Jacky"} message={"Hello123"} />
        <Post username={"Jason"} message={"Hello123"} />
        <Post username={"JoJo"} message={"Hello123"} />
      </div>

      {/* Right side */}
      <RightSideBar />
    </div>
  );
}
