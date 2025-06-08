import React from 'react'
import Image from 'next/image'
import type { Product } from './itemList'


export function ProductItems({ name, price, description, image } : Product) {
  return (
    <div className="flex flex-col gap-2 w-60 h-80 hover:underline cursor-pointer">
              {/* Items Picture Container */}
              <div className="bg-amber-600 flex-1 max-w-full max-h-60 rounded-lg relative ">
                <Image
                  src={image}
                  alt="Item"
                  fill
                  className="object-fill"
                />
              </div >
              {/* Items Details */}
              <div className="h-1/4 w-full rounded-lg">
                <p className="truncate font-bold text-base">{name}</p>
                <h1 className="font-bold text-base">${price}</h1>
                {description && <p className="truncate text-sm font-medium">{description}</p> }
                <p className="text-slate-600 text-sm">Hong Kong</p>
              </div>
            </div>
  )
}
