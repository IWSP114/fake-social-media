import React, { memo } from 'react'
import Image from 'next/image'
import StarIcon from '../../assert/star-icon.png'

function HeaderMenu({ visable }: { visable: boolean }) {
  return (
    <div className={`bg-slate-100 fixed top-16 right-5 p-2 pr-10 rounded-xl shadow-xl ${visable ? "fixed" : "hidden"}`}>
      <h3 className="font-bold text-2xl m-2">Menu</h3>
      <div className="flex gap-4">

        <div className="bg-white flex flex-col flex-nowrap gap-4 p-2 rounded-xl whitespace-nowrap pr-4 shadow-xl">
          <h3 className="text-xl font-bold ml-2">Social</h3>

          <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
            <h3 className="text-lg font-semibold">Event</h3>
            <p className="text-sm">Plan or find things to do online and nearby.</p>
          </div>

          <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
            <h3 className="text-lg font-semibold">Friends</h3>
            <p className="text-sm">Search for friends or people you may know.</p>
          </div>

          <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
            <h3 className="text-lg font-semibold">Birthday</h3>
            <p className="text-sm">Send birthday wishes to friends and family.</p>
          </div>

          <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
            <h3 className="text-lg font-semibold">Groups</h3>
            <p className="text-sm">Connect with like-minded people.</p>
          </div>

          <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
            <h3 className="text-lg font-semibold">News Feed</h3>
            <p className="text-sm">View the latest posts from friends, groups, pages and other captains.</p>
          </div>

          <div className="px-4 py-2 m-0 rounded-lg hover:bg-slate-100 cursor-pointer">
            <h3 className="text-lg font-semibold">Pages</h3>
            <p className="text-sm">Discover and connect with businesses on social media.</p>
          </div>

        </div>

        <div className="bg-white flex flex-col flex-nowrap gap-4 px-2 rounded-xl whitespace-nowrap pr-4 pt-6 shadow-xl">
          <div className="border-slate-500 border-b-1 border-solid px-2">
            <h3 className="text-xl font-bold">Establish</h3>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Image
                src={StarIcon}
                alt="Star Icon"
                width={30}
                height={30}
                style={{
                  objectFit: 'contain'
                }}
              />
              <h3 className="text-lg font-medium inline">Posts</h3>
            </div>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Image
                src={StarIcon}
                alt="Star Icon"
                width={30}
                height={30}
                style={{
                  objectFit: 'contain'
                }}
              />
              <h3 className="text-lg font-medium">Story / Stories</h3>
            </div>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Image
                src={StarIcon}
                alt="Star Icon"
                width={30}
                height={30}
                style={{
                  objectFit: 'contain'
                }}
              />
              <h3 className="text-lg font-medium">Reels</h3>
            </div>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Image
                src={StarIcon}
                alt="Star Icon"
                width={30}
                height={30}
                style={{
                  objectFit: 'contain'
                }}
              />
              <h3 className="text-lg font-medium">Life Events</h3>
            </div>
          </div>


          <div className="px-2">

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Image
                src={StarIcon}
                alt="Star Icon"
                width={30}
                height={30}
                style={{
                  objectFit: 'contain'
                }}
              />
              <h3 className="text-lg font-medium">Pages</h3>
            </div>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Image
                src={StarIcon}
                alt="Star Icon"
                width={30}
                height={30}
                style={{
                  objectFit: 'contain'
                }}
              />
              <h3 className="text-lg font-medium">Advertise</h3>
            </div>

            <div className="flex items-center gap-2 my-4 p-2 hover:bg-slate-100 cursor-pointer rounded-lg">
              <Image
                src={StarIcon}
                alt="Star Icon"
                width={30}
                height={30}
                style={{
                  objectFit: 'contain'
                }}
              />
              <h3 className="text-lg font-medium">Groups</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default memo(HeaderMenu)
