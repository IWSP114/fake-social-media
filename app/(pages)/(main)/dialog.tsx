"use client"

import { Dialog, DialogPanel, DialogTitle, Textarea } from '@headlessui/react'
import { memo } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import UserIcon from "../../../assest/MainPage/user-icon.png"
import clsx from 'clsx'
import { ChevronDown, EllipsisVertical, ImagePlus, MapPin, Smile, Tags, User, X } from 'lucide-react';

interface DialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DialogComponent = memo(function DialogComponent({ isOpen, setIsOpen }: DialogProps) {
  const [texts, setTexts] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File[]>([]);

  interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget & { files: FileList };
  }

  const onFileChange = (event: FileChangeEvent) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    setSelectedFile(files);
  };
  // const onFileUpload = () => {
  //   const formData = new FormData();
  //   formData.append(
  //     "myFile",
  //     selectedFile,
  //     selectedFile.name
  //   );
  //   console.log(selectedFile);
  //   axios.post("api/uploadfile", formData);
  // };

  function handleSubmit() {
    setIsOpen(false)
    setTexts("");
  }

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 text-black">
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
                <div className="flex items-center font-bold text-sm text-black bg-gray-300 rounded-md px-2 cursor-pointer"><User fill='currentColor' size={16} /> Friends <ChevronDown fill='currentColor' size={16} /></div>
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

              {selectedFile.length > 0 && (
                <div className="relative flex flex-wrap justify-center my-2 gap-2">
                  {selectedFile.map((file, idx) => (
                    <div key={idx} className="relative">
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${idx + 1}`}
                        width={100}
                        height={100}
                        className="rounded-lg object-contain"
                      />
                      <button
                        className="absolute right-2 top-2 w-8 h-8 p-2 rounded-full bg-gray-300 text-black cursor-pointer"
                        onClick={() => setSelectedFile(selectedFile.filter((_, i) => i !== idx))}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Create Post Attachments */}
            <div className="m-2.5 px-3 py-4 border-gray-600 border-1 border-solid rounded-lg flex items-center justify-between">
              <div className='cursor-pointer'>Add to Post</div>
              <div className="flex flex-row gap-2">

                <div className="relative rounded-full w-8 h-8 p-1 overflow-hidden cursor-pointer hover:bg-gray-200">
                  <label className="w-full h-full flex items-center justify-center cursor-pointer">
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/png"
                      multiple
                      onChange={onFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      tabIndex={-1}
                    />
                    <ImagePlus className='cursor-pointer' />
                  </label>
                </div>

                <div className="relative rounded-full w-8 h-8 p-1 overflow-hidden cursor-pointer hover:bg-gray-200">
                  <Tags />
                </div>

                <div className="relative rounded-full w-8 h-8 p-1 overflow-hidden cursor-pointer hover:bg-gray-200">
                  <Smile />
                </div>

                <div className="relative rounded-full w-8 h-8 p-1 overflow-hidden cursor-pointer hover:bg-gray-200">
                  <MapPin />
                </div>

                <div className="relative rounded-full w-8 h-8 p-1 overflow-hidden cursor-pointer hover:bg-gray-200">
                  <EllipsisVertical />
                </div>

              </div>
            </div>

            {/* Create Post Button */}
            <div className="flex w-full justify-center px-2.5">
              <button
                onClick={() => handleSubmit()}
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
