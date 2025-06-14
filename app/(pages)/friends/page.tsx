"use client"

import React from 'react'
import { LeftSideBar } from './leftSideBar'
import { FriendInvitation } from './friendInvitation'
import { FriendMayKnow } from './friendMayKnow'

export default function Friends() {
  return (
    <>
      <title>Friends</title>
      <div className="flex w-full min-h-screen z-0">
        <div className='hidden sm:block sm:sticky top-16 w-1/5 h-[calc(100vh-5rem)]'>
          <LeftSideBar />
        </div>


        <div className="flex-1 flex flex-col items-center p-4 min-w-0">
          {/* Friend Invitation */}
          <div className="w-full flex flex-col sm:gap-4 sm:p-4 pb-4 border-slate-300 border-b-1 border-solid">
            {/* Friend Invitation Header */}
            <div className="flex justify-between items-center tracking-tight">
              <h1 className="font-semibold text-lg sm:font-bold sm:text-xl">Friend Invitation</h1>
              <h1 className="font-semibold text-normal text-blue-500 p-2 rounded-sm hover:bg-gray-200">View All</h1>
            </div>
            {/* Friend Invitation Content */}
            <div className="flex gap-2 flex-wrap flex-col sm:flex-row">
              {/* Friend Invitation Profile */}
              <FriendInvitation />
              <FriendInvitation />
              <FriendInvitation />
            </div>
          </div>

          {/* Friends You Might Know */}
          <div className="w-full flex flex-col sm:gap-4 sm:p-4 pb-4 order-slate-100 border-b-1 border-solid">
            {/* Friend May Know Header */}
            <div className="flex justify-between items-center tracking-tight">
              <h1 className="font-semibold text-lg sm:font-bold sm:text-xl">Friends You Might Know</h1>
              <h1 className="font-semibold text-normal text-blue-500 p-2 rounded-sm hover:bg-gray-200">View All</h1>
            </div>
            {/* Friend May Know Content */}
            <div className="flex gap-2 flex-wrap flex-col sm:flex-row ">
              {/* Friend May Know Profile */}
              <FriendMayKnow />
              <FriendMayKnow />
              <FriendMayKnow />
              <FriendMayKnow />
              <FriendMayKnow />
              <FriendMayKnow />
              <FriendMayKnow />
              <FriendMayKnow />
              <FriendMayKnow />
              <FriendMayKnow />
              <FriendMayKnow />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
