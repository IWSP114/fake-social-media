import UserIcon from "../../../assest/MainPage/user-icon.png"
import FriendsIcon from "../../../assest/MainPage/friends-icon.png"
import BookmarkIcon from "../../../assest/MainPage/bookmark-icon.png"
import GroupsIcon from "../../../assest/MainPage/groups-icon.png"
import ReelsIcon from "../../../assest/MainPage/reels-icon.png"
import HeartIcon from "../../../assest/MainPage/heart-icon.png"
import MessengerIcon from "../../../assest/MainPage/messenger-icon.png"
import MoreIcon from "../../../assest/MainPage/more-icon.png"
import ThreadsIcon from "../../../assest/MainPage/threads-icon.png"
import Image from "next/image"


export function LeftSideBar() {
  return (
    <div className="fixed top-16 left-0 w-1/6 h-[calc(100vh-5rem)] hidden md:flex flex-col justify-between py-4 border-gray-300 border-r-1 border-solid">
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
  )
}
