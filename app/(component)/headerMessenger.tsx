import React, { memo } from 'react'
import Image from 'next/image'
import TextCloud from '../../assert/cloud-icon.png'

function HeaderMessenger({ visable }: { visable: boolean }) {
  return (
    <div className={`bg-white fixed top-16 right-5 h-full p-2 pr-6 min-w-100 rounded-xl shadow-xl ${visable ? "fixed" : "hidden"}`}>
      <h3 className="font-bold text-2xl m-2">Messenger</h3>
      <div className="w-full flex items-center justify-center m-4">
        <input className="p-2 bg-slate-100 text-slate-800 rounded-2xl flex-grow text-sm" type='text' placeholder="Search..." />
      </div>
      

      <div className="flex items-center justify-evenly">
        <div className="px-4 py-2 bg-sky-200 text-blue-600 active:scale-90 rounded-2xl text-xs font-semibold cursor-pointer">All</div>
        <div className="px-4 py-2 hover:bg-gray-200 hover:text-gray-600 active:scale-90 rounded-2xl text-xs font-semibold cursor-pointer">Unread</div>
        <div className="px-4 py-2 hover:bg-gray-200 hover:text-gray-600 active:scale-90 rounded-2xl text-xs font-semibold cursor-pointer">Groups</div>
        <div className="px-4 py-2 hover:bg-gray-200 hover:text-gray-600 active:scale-90 rounded-2xl text-xs font-semibold cursor-pointer">Community</div>
      </div>

      <div className="flex flex-col mt-4">

        <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="rounded-full p-2 bg-gray-300 m-2">
            <Image 
              src={TextCloud} 
              alt="Text Cloud"
              width={35}
              height={35}
              style={{
                objectFit: 'contain'
              }}
            />
          </div>

          <div>
            <h1 className="font-bold text-sm">New Message Request</h1>
            <p className="font-bold text-sm">From friends you may know.</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default memo(HeaderMessenger)
