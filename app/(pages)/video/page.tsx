import React from 'react'
import { LeftSideBar } from './leftSideBar'
import Reel from './reel'

export default function Video() {
  return (
    <>
      <title>Reels</title>
      <div className="flex w-full min-h-screen z-0">
        <div className='hidden sm:block sm:sticky top-16 w-1/5 h-[calc(100vh-5rem)]'>
          <LeftSideBar />
        </div>

        <div className="flex-1 flex flex-col items-center py-4 min-w-0">
          <Reel username={"CatLover189"} message={"Just realized that cat is my spirit animal ☕️✨ #MondayLeftMeBroken #TuesdayIWasThroughWithHoping"} likes={100} comments={38} shares={58} views={2.5} video_name={"Monday_left_me_broken"} />
          <Reel username={"✨Cat✨"} message={"Cute Cat"} likes={300} comments={40} shares={70} views={5} video_name={"Cat1"} />
          <Reel username={"CosmicVibes"} likes={249} comments={5} shares={127} views={10} video_name={"Cat2"} />
        </div>
        
      </div>
    </>
    
  )
}
