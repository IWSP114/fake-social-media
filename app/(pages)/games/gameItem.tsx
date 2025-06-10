import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export function GameItem({ name, players, category, image }: { name: string, players?: number, category?: string, image: StaticImport }) {
  return (
    <div className="w-48 sm:w-45 h-30 sm:h-48 rounded-xl shadow-xl relative hover:opacity-95 cursor-pointer">
      <Image
        src={image}
        alt={name}
        fill
        sizes='(min-width: 640px) 192px 180px'
        className='object-cover rounded-xl'
      />
      <div className="bg-gray-500/60 backdrop-blur-xl absolute top-3/5 bottom-0 left-0 right-0 rounded-b-xl px-2 py-1">
        <p className="font-bold text-base sm:text-base text-white my-1 truncate">{name}</p>
        <p className="hidden sm:inline p-2 bg-black text-white rounded-xl text-xs font-semibold truncate">
          {players ? `${players}K players` : category} 
        </p>
      </div>
    </div>
  )
}
