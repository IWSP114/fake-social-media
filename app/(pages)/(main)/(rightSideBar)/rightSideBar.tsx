"use client"

import SearchIcon from "../../../../assest/MainPage/search-icon.png"
import AddIcon from "../../../../assest/MainPage/add-icon.png"
import Image from "next/image"
import { ContactPerson } from "./contactPerson"
import { ChatRoom } from "./chatRoom"

export function RightSideBar() {
  const usernames:string[] = ["Peter", "Eddy", "Jack", "Roy", "Tom", "Alex", "Leo", "Max"]
  const chatRooms:string[] = ["Fam Bam", "Sister, Sister", "Modern Family", "Ride or Diet", "Escape Artist", "League of Legends", "Coffee Crew"]

  return (
    <div className="fixed top-16 right-0 w-1/6 h-[calc(100vh-5rem)] hidden md:flex flex-col px-2 text-stone-800 border-gray-300 border-l-1 border-solid overflow-y-hidden hover:overflow-y-auto">
        {/* Contact Person */}
        <div className="w-full flex flex-col border-gray-500 border-b-1 border-solid py-4">

          {/* Contact Person Title */}
          <div className="flex items-center justify-between pt-2">
            <h3 className="font-semibold antialiased text-lg text-slate-700 ml-2">Contact Person</h3>

            <div className="rounded-full w-6 h-6 cursor-pointer">
              <Image
                src={SearchIcon}
                alt="User Icon"
                style={{
                  width: 'auto',
                  height: '100%',
                  objectFit: 'contain'
                }} />
            </div>
          </div>

          {/* Contact Persons */}
          {usernames.map((username: string) => (
            <ContactPerson key={username} username={username} />
          ))}

        </div>

        {/* Group Chat Room */}
        <div className="w-full flex flex-col border-gray-500 border-b-1 border-solid py-4">
          <div className="flex items-center justify-between pt-2">
            <h3 className="font-semibold antialiased text-lg text-slate-700 ml-2">Group Chat Room</h3>
          </div>

          {/* Chat Rooms */}
          {chatRooms.map((rooms: string) => (
            <ChatRoom key={rooms} chatRoomName={rooms} />
          ))}

          <div className="flex items-center gap-2 rounded-lg hover:bg-gray-200 p-2 cursor-pointer">
            <div className="relative rounded-full w-10 h-10 p-2 bg-gray-200 overflow-hidden">
              <Image
                src={AddIcon}
                alt="Add Icon"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <h2 className="font-normal text-lg">Create a group chat room</h2>
          </div>
        </div>
      </div>
  )
}
