"use client"

import React, { memo, useState } from 'react'
import { MessageCircleMore } from 'lucide-react'

function HeaderNotification({ visable }: { visable: boolean }) {
  const [selectedOption, setSelectedOption] = useState("All")

  return (
    <div className={`z-99 bg-white w-screen sm:w-auto left-0 right-0 sm:left-auto sm:top-16 sm:right-5 sm:h-full p-4 pr-6 min-w-100 rounded-xl shadow-xl ${visable ? "fixed" : "hidden"}`}>
      <h3 className="font-bold text-2xl">Notification</h3>

      <div className="flex items-center justify-start gap-4 pt-4">
        <div onClick={() => setSelectedOption("All")} className={`px-4 py-2 ${selectedOption === "All" ? "bg-sky-200 text-blue-600" : "hover:bg-gray-200 hover:text-gray-600" } active:scale-90 rounded-2xl text-xs font-semibold cursor-pointer`}>All</div>
        <div onClick={() => setSelectedOption("Unread")} className={`px-4 py-2 ${selectedOption === "Unread" ? "bg-sky-200 text-blue-600" : "hover:bg-gray-200 hover:text-gray-600" } active:scale-90 rounded-2xl text-xs font-semibold cursor-pointer`}>Unread</div>
      </div>


      <div className="flex flex-col mt-4">
        <div className="font-bold text-xl">Today</div>

        <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="rounded-full p-2 bg-gray-300 m-4">
            <MessageCircleMore size={36} color="#3d3d4d" />
          </div>

          <div>
            <p className="font-medium text-sm"><span className="font-bold">Peter</span> has sent you a friend invitation.</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="font-bold text-xl">Previous Notice</div>
          <div className="font-noraml text-sm text-blue-500">View All</div>
        </div>
        

      </div>

    </div>
  )
}

export default memo(HeaderNotification)
