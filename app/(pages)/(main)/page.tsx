"use client"

import React, { useRef, useState } from 'react';
import UserIcon from "../../../assest/MainPage/user-icon.png"

import { LeftSideBar } from "./leftSideBar"
import { RightSideBar } from "./(rightSideBar)/rightSideBar"
import { Post } from "./post";
import { PostStory } from "./postStory";
import { Story } from "./story";
import { DialogComponent } from './dialog';
import Image from "next/image";

import PostPicture1 from "../../../assest/MainPage/posts-picture1.png"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  }


  return (
    <div className="flex w-full min-h-screen z-0 overflow-y-scroll">
      {/* Left side */}
      <LeftSideBar />

      {/* Center */}
      <div className="flex-1 flex flex-col items-center py-4 min-w-0">
        {/* User Post Head */}
        <div className="w-full sm:min-w-100 sm:max-w-2/5 mx-auto border-gray-100 border-1 border-solid rounded-lg p-2 bg-white shadow-lg mb-4">
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
            
            <div onClick={() => setIsOpen(true)} className="bg-gray-200 hover:bg-gray-300 rounded-2xl flex-grow px-2 text-gray-500 cursor-pointer flex items-center" >What are you thinking?</div>
            <DialogComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
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
        <div className="relative w-full sm:min-w-100 sm:max-w-2/5 h-50 mb-2" >

          <button className="absolute left-4 top-1/2 bg-white rounded-full h-10 w-10 p-2 cursor-pointer hover:opacity-80 shadow-lg font-bold text-gray-500 z-10" onClick={scrollLeft}>{"<"}</button>
          <button className="absolute right-4 top-1/2 bg-white rounded-full h-10 w-10 p-2 cursor-pointer hover:opacity-80 shadow-lg font-bold text-gray-500 z-10" onClick={scrollRight}>{">"}</button>

          <div className="flex items-center max-w-full h-full gap-2 overflow-x-hidden" ref={scrollRef} style={{ scrollBehavior: "smooth" }}>
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


        </div>

        {/* Posts */}
        <Post username={"CosmicVibes"} message={"Just realized that coffee is my spirit animal ☕️✨ Who else runs on caffeine and good vibes? #MondayMood #CoffeeLover"} likes={100} comments={38} shares={58} picture={PostPicture1} />
        <Post username={"UrbanEchoes"} message={"Every day is a new chance to chase your dreams and rewrite your story. Don’t wait for the perfect moment—make this moment perfect! 💫 #Motivation #KeepGoing"} likes={20} comments={13} shares={4} />
        <Post username={"FrostFlare"} message={"If you could travel anywhere in the world right now, where would you go? 🌍✈️ Drop your dream destination below! #Wanderlust #TravelGoals"} likes={3} comments={2} shares={3}/>
        <Post username={"CosmicCraze"} message={"Feeling grateful for the little things today — a warm cup of tea, a good book, and some quiet time. What’s one small thing that made you smile today? 😊 #Gratitude #SimpleJoys"} likes={40} comments={25} shares={2} />
        <Post username={"UrbanMystic"} message={"Did you know? Octopuses have three hearts and blue blood! Nature is wild. 🐙💙 #FunFactFriday #NatureLovers"} likes={0} comments={0} shares={0}/>
      </div>

      {/* Right side */}
      <RightSideBar />
    </div>
  );
}
