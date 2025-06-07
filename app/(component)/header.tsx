"use client";

import { usePathname } from 'next/navigation';
import AppIcon from '../../assest/header-icon.png'
import UserIcon from '../../assest/discord-logo.png'
import NineSquaresIcon from '../../assest/nine-squares.svg'
import MessengerIcon from '../../assest/Messenger.svg'
import BellIcon from '../../assest/Bell.svg'
import Image from 'next/image'
import Link from 'next/link';
import { JSX, useEffect, useRef, useState } from 'react';
import HeaderMenu from './headerMenu';
import HeaderMessenger from './headerMessenger';
import HeaderNotification from './headerNotification';

export function Header(): JSX.Element {
  const pathname: string = usePathname();

  const isHome: boolean = pathname === "/";
  const isFriends: boolean = pathname === "/friends";
  const isVideo: boolean = pathname === "/video";
  const isMarket: boolean = pathname === "/market-place";
  const isGames: boolean = pathname === "/games";

  const [showMenu, setShowMenu] = useState(false);
  const [showMessenger, setShowMessenger] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const messengerButtonRef = useRef<HTMLButtonElement>(null);
  const messengerContainerRef = useRef<HTMLDivElement>(null);

  const notificationButtonRef = useRef<HTMLButtonElement>(null);
  const notificationContainerRef = useRef<HTMLDivElement>(null);

  function handleShowMenu() {
    setShowMenu(s => !s);
    setShowMessenger(false);
    setShowNotification(false);
  }

  function handleShowMessenger() {
    setShowMenu(false);
    setShowMessenger(s => !s);
    setShowNotification(false);
  }

  function handleShowNotification() {
    setShowMenu(false);
    setShowMessenger(false);
    setShowNotification(s => !s);
  }

  useEffect(() => {

    function handleClickOutside(event: MouseEvent) {
      // Menu button situation
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      } 

      if ( // Messenger button situation
        messengerContainerRef.current &&
        !messengerContainerRef.current.contains(event.target as Node) &&
        messengerButtonRef.current &&
        !messengerButtonRef.current.contains(event.target as Node)
      ) {
        setShowMessenger(false);
      }

      if ( // Messenger button situation
        notificationContainerRef.current &&
        !notificationContainerRef.current.contains(event.target as Node) &&
        notificationButtonRef.current &&
        !notificationButtonRef.current.contains(event.target as Node)
      ) {
        setShowNotification(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  return (
    <div className="fixed top-0 right-0 left-0 bg-white flex flex-row justify-between h-16 shadow-lg z-99">
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

        <input className="h-1/2 bg-slate-200 rounded-2xl p-5 hidden sm:block" type='text' placeholder="Search..." />
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
          <button ref={menuButtonRef} className="rounded-full w-10 h-10 p-3 bg-gray-300 cursor-pointer active:scale-80" onClick={handleShowMenu}>
            <Image 
              src={NineSquaresIcon} 
              alt="User Icon" 
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </button>
          <div ref={menuContainerRef}>
            <HeaderMenu visable={showMenu} />
          </div>
        </li>

        <li>
          <button ref={messengerButtonRef} className="rounded-full w-10 h-10 p-3 bg-gray-300 cursor-pointer active:scale-80" onClick={handleShowMessenger}>
            <Image 
              src={MessengerIcon} 
              alt="User Icon" 
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }}/>
          </button>
          <div ref={messengerContainerRef}>
            <HeaderMessenger visable={showMessenger} />
          </div>
        </li>

        <li>
          <button ref={notificationButtonRef} className="rounded-full w-10 h-10 p-3 cursor-pointer bg-gray-300 active:scale-80" onClick={handleShowNotification}>
            <Image 
              src={BellIcon} 
              alt="User Icon" 
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }}/>
          </button>
          <div ref={notificationContainerRef}>
            <HeaderNotification visable={showNotification} />
          </div>
        </li>

        <li>
          <button className="rounded-full w-10 h-10 p-1 cursor-pointer bg-gray-300 active:scale-80">
            <Image 
              src={UserIcon} 
              alt="User Icon" 
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }}/>
          </button>
        </li>
      </ul>
    </div>
  );
}