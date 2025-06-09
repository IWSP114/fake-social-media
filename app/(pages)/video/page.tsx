import React from 'react'
import { LeftSideBar } from './leftSideBar'

export default function Video() {
  return (
    <>
      <title>Reels</title>
      <div className="flex w-full min-h-screen z-0">
        <div className='hidden sm:block sm:sticky top-16 w-1/5 h-[calc(100vh-5rem)]'>
          <LeftSideBar />
        </div>

        <div className="flex-1 flex flex-col items-center p-4 min-w-0">

        </div>
        
      </div>
    </>
    
  )
}
