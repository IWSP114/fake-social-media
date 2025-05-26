
import OptionsIcon from "../../../assert/FriendsPage/options-icon.png";
import FriendsIcon from "../../../assert/FriendsPage/friends-icon.png";
import AllFriendsIcon from "../../../assert/FriendsPage/all-friends-icon.png";
import FriendsSuggestIcon from "../../../assert/FriendsPage/friends-suggest-icon.png";
import FriendsInviteIcon from "../../../assert/FriendsPage/friends-invite-icon.png";
import GiftIcon from "../../../assert/FriendsPage/gift-icon.png";
import Image from "next/image"


export function LeftSideBar() {
  return (
    <div className="h-full min-w-1/5 flex flex-col justify-between px-2 py-4 border-gray-300 border-r-1 border-solid bg-white">
      <div className="flex flex-col">
        <div className="flex justify-between items-center px-2">
          <h1 className="my-2 font-bold font-sans text-2xl">Friends</h1>
          <div className="relative rounded-full bg-slate-200 hover:bg-slate-300 w-8 h-8 p-2 overflow-hidden cursor-pointer">
            <Image
              src={OptionsIcon}
              alt="User Icon"
              className="object-cover"
            />
          </div>
        </div>
        

        <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
            <Image
              src={FriendsIcon}
              alt="User Icon"
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }} />
          </div>

          <h3 className="mx-2 font-bold">Main Page</h3>
        </div>

        <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
            <Image
              src={FriendsSuggestIcon}
              alt="User Icon"
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }} />
          </div>

          <h3 className="mx-2 font-bold">Friends Suggestion</h3>
        </div>

        <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
            <Image
              src={FriendsInviteIcon}
              alt="User Icon"
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }} />
          </div>

          <h3 className="mx-2 font-bold">Friend Invitation</h3>
        </div>

        <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
            <Image
              src={AllFriendsIcon}
              alt="User Icon"
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }} />
          </div>

          <h3 className="mx-2 font-bold">All Friends</h3>
        </div>

        <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
            <Image
              src={GiftIcon}
              alt="User Icon"
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }} />
          </div>

          <h3 className="mx-2 font-bold">Birthday</h3>
        </div>

        <div className="flex items-center hover:bg-gray-300 px-2 py-2 rounded-lg cursor-pointer">
          <div className="rounded-full w-10 h-10 p-2 bg-slate-200">
            <Image
              src={AllFriendsIcon}
              alt="User Icon"
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }} />
          </div>

          <h3 className="mx-2 font-bold">Customize</h3>
        </div>

      </div>

    </div>
  )
}
