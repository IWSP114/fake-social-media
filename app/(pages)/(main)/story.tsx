import ForestImg from "../../../assest/MainPage/forest.png"
import UserIcon from "../../../assest/MainPage/user-icon.png"
import Image from "next/image";

export function Story() {
  return (
    <div className="flex flex-col h-full w-32 min-w-32 flex-shrink-0 rounded-xl hover:opacity-80 cursor-pointer">
      {/* Story Image */}
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src={ForestImg}
          alt="Story Image"
          fill
        />
        
        <div className="absolute top-2 left-2 rounded-full bg-blue-600 p-1">
          <div className="relative rounded-full w-8 h-8 overflow-hidden">
            <Image
              src={UserIcon}
              alt="User Icon"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute bottom-2 left-4 right-4">
          <p className="font-bold text-sm text-white break-all">User</p>
        </div>
      </div>
    </div>
  )
}
