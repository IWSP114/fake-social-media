"use client"

import React, { useState } from "react";

export function MarketplaceOptions({ visable }: { visable: boolean }) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className={`min-w-auto w-full top-10  bg-white rounded-xl shadow-xl z-99 px-4 py-4 ${visable ? "absolute" : "hidden"}`}>

      <div className="border-slate-300 border-b-1 border-solid pb-2">
        <h1 className="font-bold text-lg text-left">Notification Settings</h1>
        <p className="font-medium text-xs text-left text-slate-500">You can manage how you receive notifications about your friends&apos; latest updates.</p>
      </div>

      <div className="flex justify-between items-center py-4 px-2 hover:bg-slate-100 rounded-lg">
        <h1 className="inline font-bold">Show Notifications</h1>
        {/* Toggle Switch */}
        <button
          type="button"
          aria-pressed={showNotifications}
          onClick={() => setShowNotifications((v) => !v)}
          className={`cursor-pointer relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${showNotifications ? "bg-blue-500" : "bg-slate-300"
            }`}
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${showNotifications ? "translate-x-6" : ""
              }`}
          />
        </button>
      </div>

    </div>
  )
}
