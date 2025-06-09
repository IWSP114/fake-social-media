import React from 'react'
import { LeftSideBar } from './leftSideBar'
import { MapPin } from 'lucide-react'
import { TodayPick, Sport, Toy, Gardening, Music } from './itemList'
import { ProductItems } from './productItems'

export default function MarketPlace() {
  return (
    <>
      <title>Marketplace</title>
      <div className="flex w-full min-h-screen z-0">


        <div className='hidden sm:block sm:sticky top-16 w-1/5 h-[calc(100vh-5rem)]'>
          <LeftSideBar />
        </div>

        <div className="flex-1 flex flex-col items-center p-4 min-w-0">
          {/* Today's Picks */}
          <div className="w-full flex flex-col sm:gap-4 sm:p-4 pb-4 border-slate-300 border-b-1 border-solid">
            {/* Today's Picks Header */}
            <div className="flex justify-between items-center tracking-tight">
              <h1 className="font-semibold text-lg sm:font-bold sm:text-xl">Today&apos;s Picks</h1>
              <h1 className="font-semibold text-normal text-blue-500 p-2 rounded-sm hover:bg-gray-200"><MapPin size={16} strokeWidth={3} className="inline" />Hong Kong ‧ 100 Kilometer</h1>
            </div>

            {/* Today's Picks Content */}
            <div className="flex gap-2 flex-wrap sm:flex-row">
              {/* Today's Picks Items */}
              {TodayPick.map(item => (
                <ProductItems key={item.name} name={item.name} price={item.price} description={item.description} image={item.image} />
              ))}


            </div>
          </div>

          {/* Sporting Goods */}
          <div className="w-full flex flex-col sm:gap-4 sm:p-4 pb-4 border-slate-300 border-b-1 border-solid">
            {/* Today's Picks Header */}
            <div className="flex justify-between items-center tracking-tight">
              <h1 className="font-semibold text-lg sm:font-bold sm:text-xl">Sporting Goods</h1>
              <h1 className="font-semibold text-normal text-blue-500 p-2 rounded-sm hover:bg-gray-200">View All</h1>
            </div>

            {/* Today's Picks Content */}
            <div className="flex gap-2 flex-wrap sm:flex-row">
              {/* Today's Picks Items */}
              {Sport.map(item => (
                <ProductItems key={item.name} name={item.name} price={item.price} description={item.description} image={item.image} />
              ))}


            </div>
          </div>

          {/* Gardening and Outdoor Supplies */}
          <div className="w-full flex flex-col sm:gap-4 sm:p-4 pb-4 border-slate-300 border-b-1 border-solid">
            {/* Today's Picks Header */}
            <div className="flex justify-between items-center tracking-tight">
              <h1 className="font-semibold text-lg sm:font-bold sm:text-xl">Gardening and Outdoor Supplies</h1>
              <h1 className="font-semibold text-normal text-blue-500 p-2 rounded-sm hover:bg-gray-200">View All</h1>
            </div>

            {/* Today's Picks Content */}
            <div className="flex gap-2 flex-wrap sm:flex-row">
              {/* Today's Picks Items */}
              {Gardening.map(item => (
                <ProductItems key={item.name} name={item.name} price={item.price} description={item.description} image={item.image} />
              ))}


            </div>
          </div>

          {/* Music Performer */}
          <div className="w-full flex flex-col sm:gap-4 sm:p-4 pb-4 border-slate-300 border-b-1 border-solid">
            {/* Today's Picks Header */}
            <div className="flex justify-between items-center tracking-tight">
              <h1 className="font-semibold text-lg sm:font-bold sm:text-xl">Music Performer</h1>
              <h1 className="font-semibold text-normal text-blue-500 p-2 rounded-sm hover:bg-gray-200">View All</h1>
            </div>

            {/* Today's Picks Content */}
            <div className="flex gap-2 flex-wrap sm:flex-row">
              {/* Today's Picks Items */}
              {Music.map(item => (
                <ProductItems key={item.name} name={item.name} price={item.price} description={item.description} image={item.image} />
              ))}


            </div>
          </div>

          {/* Toys & Games */}
          <div className="w-full flex flex-col sm:gap-4 sm:p-4 pb-4 border-slate-300 border-b-1 border-solid">
            {/* Today's Picks Header */}
            <div className="flex justify-between items-center tracking-tight">
              <h1 className="font-semibold text-lg sm:font-bold sm:text-xl">Toys & Games</h1>
              <h1 className="font-semibold text-normal text-blue-500 p-2 rounded-sm hover:bg-gray-200">View All</h1>
            </div>

            <div className="flex gap-2 flex-wrap sm:flex-row">
              {/* Today's Picks Items */}
              {Toy.map(item => (
                <ProductItems key={item.name} name={item.name} price={item.price} description={item.description} image={item.image} />
              ))}


            </div>
          </div>
        </div>
      </div>
    </>
  )
}
