"use client"

import { ContactPerson } from "./contactPerson"
import { ContactPersonList, ContactGroupList } from "./contactList"
import { ChatRoom } from "./chatRoom"
import { Plus, Search } from "lucide-react"

export function RightSideBar() {

  return (
    <div className="fixed top-16 right-0 w-1/6 h-[calc(100vh-5rem)] hidden md:flex flex-col px-2 text-stone-800 border-gray-300 border-l-1 border-solid overflow-y-hidden hover:overflow-y-auto">
        {/* Contact Person */}
        <div className="w-full flex flex-col border-gray-500 border-b-1 border-solid py-4">

          {/* Contact Person Title */}
          <div className="flex items-center justify-between pt-2">
            <h3 className="font-semibold antialiased text-lg text-slate-700 ml-2">Contact Person</h3>

            <div className="rounded-full w-6 h-6 cursor-pointer">
              <Search size={16} />
            </div>
          </div>

          {/* Contact Persons */}
          {ContactPersonList.map((user) => (
            <ContactPerson key={user.name} username={user.name} image={user.image} />
          ))}

        </div>

        {/* Group Chat Room */}
        <div className="w-full flex flex-col border-gray-500 border-b-1 border-solid py-4">
          <div className="flex items-center justify-between pt-2">
            <h3 className="font-semibold antialiased text-lg text-slate-700 ml-2">Group Chat Room</h3>
          </div>

          {/* Chat Rooms */}
          {ContactGroupList.map((room) => (
            <ChatRoom key={room.name} roomname={room.name} image={room.image} />
          ))}

          <div className="flex items-center gap-2 rounded-lg hover:bg-gray-200 p-2 cursor-pointer">
            <div className="relative rounded-full w-10 h-10 p-2 bg-gray-200 overflow-hidden">
              <Plus />
            </div>
            <h2 className="font-normal text-lg">Create a group chat room</h2>
          </div>
        </div>
      </div>
  )
}
