"use client"

import { Dialog, DialogPanel, DialogTitle, Textarea } from '@headlessui/react'
import { memo } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import UserIcon from "../../../assest/MainPage/user-icon.png"
import ThreeDotsIcon from "../../../assest/MainPage/three-dots-icon.png"
import clsx from 'clsx'

interface DialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DialogComponent = memo(function DialogComponent({ isOpen, setIsOpen }: DialogProps) {
  const [texts, setTexts] = useState("");

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <DialogPanel className="bg-white py-2 rounded-xl shadow-xl w-full max-w-lg">
            <div className="border-gray-300 border-b-1 border-solid py-1 flex items-center justify-center">
              <DialogTitle className="text-lg font-bold text-center">Create Post</DialogTitle>
            </div>

            {/* Create Post Header */}
            <div className="flex gap-2 tracking-tighter px-2.5 mt-2">
              <div className="relative rounded-full w-10 h-10 overflow-hidden">
                <Image
                  src={UserIcon}
                  alt="User Icon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-0 p-0">
                <h2 className="font-bold text-base">User</h2>
                <p className="font-bold text-sm text-black bg-slate-300 px-1 cursor-pointer">Friends ▽</p>
              </div>

            </div>

            {/* Create Post Contact */}
            <div className="px-2.5">
            <Textarea
              value={texts}
              onChange={(e) => setTexts(e.target.value)}
              placeholder="What's on your mind?"
              className={clsx(
                'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-base/6 text-black',
                'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
              )}
              rows={5}
            />
            </div>

            {/* Create Post Attachments */}
            <div className="m-2.5 px-3 py-4 border-gray-600 border-1 border-solid rounded-lg flex items-center justify-between">
              <div className='cursor-pointer'>Add to Post</div>
              <div>
                <div className="relative rounded-full w-8 h-8 p-1 overflow-hidden cursor-pointer hover:bg-gray-200">
                  <Image
                    src={ThreeDotsIcon}
                    alt="Others"
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Create Post Button */}
            <div className="flex w-full justify-center px-2.5">
              <button 
                onClick={() => setIsOpen(false)} 
                className={`px-4 py-2 font-bold grow rounded-xl ${texts ? "cursor-pointer bg-blue-500 text-white" : "cursor-not-allowed bg-gray-200 text-slate-400"}`}
              >
              Post
              </button>
            </div>
            
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
});
