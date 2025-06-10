import React from 'react'
import Image from 'next/image'
import type { Product } from './itemList'


export function ProductItems({ name, price, description, image }: Product) {
  return (
    <div className="flex flex-col gap-2 h-65 w-40 sm:w-60 sm:h-90 hover:underline cursor-pointer">
      {/* Items Picture Container */}
      <div className="flex-1 max-w-full max-h-60 rounded-xl relative shadow-lg ">
        <Image
          src={image}
          alt="Item"
          fill
          sizes="(min-width: 640px) 240px, 160px"
          className="object-fill rounded-xl"
        />
      </div >
      {/* Items Details */}
      <div className="h-1/4 w-full rounded-lg">
        <p className="truncate font-bold text-sm sm:text-base">{name}</p>
        <h1 className="font-bold text-sm sm:text-base">${price}</h1>
        {description && <p className="truncate text-xs sm:text-sm font-medium">{description}</p>}
        <p className="text-slate-600 text-xs sm:text-sm">Hong Kong</p>
      </div>
    </div>
  )
}
