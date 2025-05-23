import SearchIcon from "../../../assert/MainPage/search-icon.png"
import AddIcon from "../../../assert/MainPage/add-icon.png"
import UserIcon from "../../../assert/MainPage/user-icon.png"
import Image from "next/image"

export function RightSideBar() {
  return (
    <div className="sticky top-16 w-1/6 h-[calc(100vh-5rem)] hidden md:flex flex-col px-2 text-stone-800 border-gray-300 border-l-1 border-solid">
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
  )
}
