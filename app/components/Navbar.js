'use client'

import Image from "next/image"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

export default function Navbar () {
  const { isOpen, setIsOpen } = useState(false)

  return (
    <nav className="navbar bg-white shadow-md dark:bg-black">
      <div className="container mx-auto px-5 py-5 md:items-center text-black dark:text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
            <span className="font-semibold text-xl text-gray-800 ml-2 dark:text-white">My App</span>
          </div>
          <div className="flex md:hidden">
            <button type="button" className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300" aria-label="toggle menu" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}