"use client";

import { usePathname } from 'next/navigation';
import AppIcon from '../../assert/header-icon.png'
import UserIcon from '../../assert/discord-logo.png'
import NineSquaresIcon from '../../assert/nine-squares.png'
import MessengerIcon from '../../assert/Messenger.png'
import BellIcon from '../../assert/Bell.png'
import Image from 'next/image'
import Link from 'next/link';

export function Header() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isFriends = pathname === "/friends";
  const isVideo = pathname === "/video";
  const isMarket = pathname === "/market-place";
  const isGames = pathname === "/games";

  return (
    <div className="bg-white flex flex-row justify-between h-16 shadow-md">
      <div className="ml-3 flex flex-nowrap items-center gap-3 h-full w-auto">
        <Link href="/" className="h-14 w-14">
          <Image 
            src={AppIcon} 
            alt="App Icon" 
            width={60}
            height={60}
            style={{
              objectFit: 'cover'
            }}
          />
        </Link>

        <input className="h-1/2 bg-slate-200 rounded-2xl p-5" type='text' placeholder="Search..." />
      </div>

      <ul className="hidden md:flex md:items-center md:flex-nowrap my-1 mr-20">
        <Link href="/" className={`hover:bg-gray-200 h-full w-full flex justify-center items-center m-0 mx-1 px-7 rounded-md ${isHome ? "border-blue-200 border-b-1 border-solid" : ""}`}><li>Home</li></Link>
        <Link href="/friends" className={`hover:bg-gray-200 h-full w-full flex justify-center items-center m-0 mx-1 px-7 rounded-md ${isFriends ? "border-blue-200 border-b-1 border-solid" : ""}`}><li>Friends</li></Link>
        <Link href="/video" className={`hover:bg-gray-200 h-full w-full flex justify-center items-center m-0 mx-1 px-7 rounded-md ${isVideo ? "border-blue-200 border-b-1 border-solid" : ""}`}><li>Video</li></Link>
        <Link href="/market-place" className={`hover:bg-gray-200 h-full w-full flex justify-center items-center m-0 mx-1 px-7 rounded-md ${isMarket ? "border-blue-200 border-b-1 border-solid" : ""}`}><li>Market Place</li></Link>
        <Link href="/games" className={`hover:bg-gray-200 h-full w-full flex justify-center items-center m-0 mx-1 px-7 rounded-md ${isGames ? "border-blue-200 border-b-1 border-solid" : ""}`}><li>Games</li></Link>
      </ul>
      
      <ul className="mr-3 flex items-center gap-2 flex-nowrap">
        <li>
          <div className="rounded-full w-10 h-10 p-3 cursor-pointer bg-gray-300">
            <Image 
              src={NineSquaresIcon} 
              alt="User Icon" 
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'cover'
              }}/>
          </div>
        </li>

        <li>
          <div className="rounded-full w-10 h-10 p-3 cursor-pointer bg-gray-300">
            <Image 
              src={MessengerIcon} 
              alt="User Icon" 
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }}/>
          </div>
        </li>

        <li>
          <div className="rounded-full w-10 h-10 p-3 cursor-pointer bg-gray-300">
            <Image 
              src={BellIcon} 
              alt="User Icon" 
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }}/>
          </div>
        </li>

        <li>
          <div className="rounded-full w-10 h-10 p-1 cursor-pointer bg-gray-300">
            <Image 
              src={UserIcon} 
              alt="User Icon" 
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }}/>
          </div>
        </li>
      </ul>
    </div>
  );
}