import React from 'react'
import { LeftSideBar } from './leftSideBar'
import { PopularGames, YourFavouritePick } from './gameList'
import { GameItem } from './gameItem'

export default function Games() {
  return (
    <>
      <title>Games</title>

      <div className="flex w-full min-h-screen z-0">

        <div className='hidden sm:block sm:sticky top-16 w-1/5 h-[calc(100vh-5rem)]'>
          <LeftSideBar />
        </div>

        <div className="flex-1 flex flex-col items-center p-4 min-w-0">
          {/* Popular Games */}
          <div className="w-full flex flex-col sm:gap-4 sm:p-4 pb-4">
            {/* Popular Games Header */}
            <div className="flex justify-start items-center tracking-tight">
              <h1 className="font-semibold text-lg sm:font-bold sm:text-2xl">Popular Games</h1>
            </div>

            {/* Popular Games Content */}
            <div className="grid grid-cols-2 md:flex gap-2 md:flex-wrap md:flex-row">
              {/* Popular Games Items */}
              {PopularGames.map(item => (
                <GameItem key={item.name} name={item.name} players={item.players} image={item.image} />
              ))}


            </div>
          </div>

          {/* Your favorite picks */}
          <div className="w-full flex flex-col sm:gap-4 sm:p-4 pb-4">
            {/* Your favorite picks Header */}
            <div className="flex justify-start items-center tracking-tight">
              <h1 className="font-semibold text-lg sm:font-bold sm:text-2xl">Your Favorite Picks</h1>
            </div>

            {/* Your favorite picks Content */}
            <div className="grid grid-cols-2 md:flex gap-2 md:flex-wrap md:flex-row">
              {/* Your favorite picks Items */}
              {YourFavouritePick.map(item => (
                <GameItem key={item.name} name={item.name} players={item.players} category={item.category} image={item.image} />
              ))}


            </div>
          </div>
        </div>

      </div>
    </>
  )
}
