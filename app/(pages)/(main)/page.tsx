import UserIcon from "../../../assert/MainPage/user-icon.png"
import FriendsIcon from "../../../assert/MainPage/friends-icon.png"
import BookmarkIcon from "../../../assert/MainPage/bookmark-icon.png"
import GroupsIcon from "../../../assert/MainPage/groups-icon.png"
import ReelsIcon from "../../../assert/MainPage/reels-icon.png"
import HeartIcon from "../../../assert/MainPage/heart-icon.png"
import MessengerIcon from "../../../assert/MainPage/messenger-icon.png"
import MoreIcon from "../../../assert/MainPage/more-icon.png"
import ThreadsIcon from "../../../assert/MainPage/threads-icon.png"
import SearchIcon from "../../../assert/MainPage/search-icon.png"
import AddIcon from "../../../assert/MainPage/add-icon.png"


import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-screen h-[calc(100vh-4rem)] z-0">
      {/* Left side */}
      <div className="w-1/6 h-full hidden md:flex flex-col justify-between py-4 overflow-y-auto border-gray-300 border-r-1 border-solid">
        <div className="flex flex-col">
          <h1 className="mx-6 my-2 font-bold italic font-sans text-xl">Fake Social Media</h1>

          <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <div className="relative rounded-full w-10 h-10 overflow-hidden">
              <Image
                src={UserIcon}
                alt="User Icon"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mx-2 font-bold">User</h3>
          </div>

          <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <div className="rounded-full w-10 h-10 p-2">
              <Image
                src={FriendsIcon}
                alt="User Icon"
                style={{
                  width: 'auto',
                  height: '100%',
                  objectFit: 'contain'
                }} />
            </div>

            <h3 className="mx-2 font-bold">Friends</h3>
          </div>

          <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <div className="rounded-full w-10 h-10 p-2">
              <Image
                src={BookmarkIcon}
                alt="User Icon"
                style={{
                  width: 'auto',
                  height: '100%',
                  objectFit: 'contain'
                }} />
            </div>

            <h3 className="mx-2 font-bold">Saved</h3>
          </div>

          <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <div className="rounded-full w-10 h-10 p-2">
              <Image
                src={GroupsIcon}
                alt="User Icon"
                style={{
                  width: 'auto',
                  height: '100%',
                  objectFit: 'contain'
                }} />
            </div>

            <h3 className="mx-2 font-bold">Groups</h3>
          </div>

          <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <div className="rounded-full w-10 h-10 p-2">
              <Image
                src={ReelsIcon}
                alt="User Icon"
                style={{
                  width: 'auto',
                  height: '100%',
                  objectFit: 'contain'
                }} />
            </div>

            <h3 className="mx-2 font-bold">Reels</h3>
          </div>

          <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <div className="rounded-full w-10 h-10 p-2">
              <Image
                src={HeartIcon}
                alt="User Icon"
                style={{
                  width: 'auto',
                  height: '100%',
                  objectFit: 'contain'
                }} />
            </div>

            <h3 className="mx-2 font-bold">Notification</h3>
          </div>

          <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <div className="rounded-full w-10 h-10 p-2">
              <Image
                src={MessengerIcon}
                alt="User Icon"
                style={{
                  width: 'auto',
                  height: '100%',
                  objectFit: 'contain'
                }} />
            </div>

            <h3 className="mx-2 font-bold">Messages</h3>
          </div>

          <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <div className="rounded-full w-10 h-10 p-2">
              <Image
                src={MoreIcon}
                alt="User Icon"
                style={{
                  width: 'auto',
                  height: '100%',
                  objectFit: 'contain'
                }} />
            </div>

            <h3 className="mx-2 font-bold">More</h3>
          </div>
        </div>

        <div className="flex items-center hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2">
            <Image
              src={ThreadsIcon}
              alt="User Icon"
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }} />
          </div>
          <h3 className="mx-2 font-bold">Threads</h3>
        </div>

      </div>

      {/* Center */}
      <div className="flex-1">

      </div>

      {/* Right side */}
      <div className="w-1/6 h-full hidden md:flex flex-col px-2 overflow-y-auto text-stone-800 border-gray-300 border-l-1 border-solid">
        {/* Contact Person */}
        <div className="w-full flex flex-col border-gray-500 border-b-1 border-solid py-4">

          {/* Contact Person Title */}
          <div className="flex items-center justify-between pt-2">
            <h3 className="font-semibold antialiased text-lg text-slate-700">Contact Person</h3>

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

          {/* Contact Person 1 */}
          <div className="flex items-center gap-2 rounded-lg hover:bg-gray-200 p-2 cursor-pointer">
            <div className="relative rounded-full w-10 h-10 p-2 bg-gray-100 overflow-hidden">
              <Image
                src={UserIcon}
                alt="User Icon"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-normal text-lg">Peter</h2>
          </div>

          {/* Contact Person 2 */}
          <div className="flex items-center gap-2 rounded-lg hover:bg-gray-200 p-2 cursor-pointer">
            <div className="relative rounded-full w-10 h-10 p-2 bg-gray-100 overflow-hidden">
              <Image
                src={UserIcon}
                alt="User Icon"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-normal text-lg">Eddy</h2>
          </div>

          {/* Contact Person 3 */}
          <div className="flex items-center gap-2 rounded-lg hover:bg-gray-200 p-2 cursor-pointer">
            <div className="relative rounded-full w-10 h-10 p-2 bg-gray-100 overflow-hidden">
              <Image
                src={UserIcon}
                alt="User Icon"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-normal text-lg">Jack</h2>
          </div>

          {/* Contact Person 4 */}
          <div className="flex items-center gap-2 rounded-lg hover:bg-gray-200 p-2 cursor-pointer">
            <div className="relative rounded-full w-10 h-10 p-2 bg-gray-100 overflow-hidden">
              <Image
                src={UserIcon}
                alt="User Icon"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-normal text-lg">Roy</h2>
          </div>

        </div>

        {/* Group Chat Room */}
        <div className="w-full flex flex-col border-gray-500 border-b-1 border-solid py-4">
          <div className="flex items-center justify-between pt-2">
            <h3 className="font-semibold antialiased text-lg text-slate-700">Group Chat Room</h3>
          </div>

          <div className="flex items-center gap-2 rounded-lg hover:bg-gray-200 p-2 cursor-pointer">
            <div className="relative rounded-full w-10 h-10 p-2 bg-gray-100 overflow-hidden">
              <Image
                src={UserIcon}
                alt="User Icon"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-normal text-lg">Chat Room 1</h2>
          </div>

          <div className="flex items-center gap-2 rounded-lg hover:bg-gray-200 p-2 cursor-pointer">
            <div className="relative rounded-full w-10 h-10 p-2 bg-gray-200 overflow-hidden">
              <Image
                src={AddIcon}
                alt="Add Icon"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-normal text-lg">Create a group chat room</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
