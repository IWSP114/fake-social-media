import React from 'react'
import { LeftSideBar } from './leftSideBar'

export default function MarketPlace() {
  return (
    <div className="flex w-full min-h-screen z-0">
      <div className='hidden sm:block sm:sticky top-16 w-1/5 h-[calc(100vh-5rem)]'>
        <LeftSideBar />
      </div>
    </div>
  )
}
