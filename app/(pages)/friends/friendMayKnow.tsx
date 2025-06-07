"use client"

import React, { useEffect, useState } from 'react'
import UserIcon from "../../../assest/MainPage/user-icon.png"
import Image from 'next/image'

export function FriendMayKnow() {

  const [width, setWidth] = useState<number>(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  if (!hasMounted) {
    // Don't render anything on the server
    return null;
  }

  const isMobile = width <= 768;
  if (isMobile) {
    return (
      <div className="flex flex-row h-25 w-full flex-shrink-0 min-w-32 rounded-xl shadow-xl">
        {/* User Data */}
        <div className="flex items-center h-full w-full pl-2">
          {/* User Image Container */}
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            <Image
              src={UserIcon}
              alt="User Icon"
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Username Container */}
          <div className="h-full flex flex-col pt-4 px-2 grow">
            <h1 className="font-semibold text-base cursor-pointer hover:underline">User</h1>
            <h2 className="font-light text-sm text-slate-600">1 Mutual Friends</h2>
            {/* Buttons container */}
            <div className="flex flex-row w-full">
              <button className="grow bg-sky-100 hover:bg-gray-200 text-blue-500 cursor-pointer px-3 py-1 rounded-lg font-bold mx-0.5">Add Friend</button>
              <button className="grow bg-slate-200 hover:bg-slate-300 text-black cursor-pointer px-3 py-1 rounded-lg font-bold mx-0.5">Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-86 w-50 flex-shrink-0 min-w-32 rounded-xl shadow-xl">
      {/* User Image */}
      <div className="relative h-5/10 w-full overflow-hidden rounded-t-xl">
        <Image
          src={UserIcon}
          alt="User Icon"
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      {/* Username */}
      <div className="h-5/10 w-full rounded-b-xl bg-white flex flex-col justify-center gap-1 px-4 py-1">
        <h1 className="font-bold text-lg cursor-pointer hover:underline">User</h1>
        <h2 className="font-medium text-sm">1 Mutual Friends</h2>
        <button className="bg-sky-100 hover:bg-gray-200 text-blue-500 cursor-pointer px-3 py-1 rounded-lg font-bold">Add Friends</button>
        <button className="bg-slate-200 hover:bg-slate-300 text-black cursor-pointer px-3 py-1 rounded-lg font-bold">Remove</button>
      </div>
    </div>
  )
}
