'use client'

import Image from "next/image"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import Link from "next/link"

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  const [subMenu, setSubMenu] = useState([])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    {
      name: 'Dropdown', subMenu: [
        { name: 'Submenu 1', href: '/submenu1' },
        {
          name: 'Dropdown2', subMenu: [
            { name: 'Submenu 2.1', href: '/submenu2.1' },
            { name: 'Submenu 2.2', href: '/submenu2.2' }
          ]
        },
      ]
    }
  ]

  const menuComponent = (item) => {
    return (
      <>
        {item.subMenu ? (
          <>
            {/*Dropdown Desktop*/}
            <div className="relative inline-block text-left">
              <div>
                <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black dark:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black dark:focus:ring-white" id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={() => {
                  setSubMenu({ ...subMenu, [item.name]: !subMenu[item.name] })
                  console.log(subMenu)
                }
                }
                >
                  {item.name}
                  <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">{isOpen ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}</svg>
                </button>
              </div>
              <div className={`${subMenu[item.name] ? 'block' : 'hidden'} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-black dark:ring-white dark:ring-opacity-5`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="py-1" role="none">
                  {item.subMenu.map((subItem) =>
                    menuComponent(subItem)
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <Link href={item.href} key={item.name}>{item.name}</Link>
        )}
      </>
    )
  }


  return (
    <nav className="bg-white shadow-md dark:bg-black z-30">
      <div className="flex items-center font-medium justify-around text-black dark:text-white">
        <div>
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="font-semibold text-xl text-gray-800 ml-2 dark:text-white">My App</span>
        </div>
        {/*Menú Desktop*/}
        <ul className="hidden md:flex flex-col">
          <li className="px-5 space-x-4 text-black dark:text-white w-full">
            {navigation.map((item) => menuComponent(item)
            )}
          </li>
        </ul>
        <div>
          <Link href="/login" className="my-1 text-gray-700 hover:text-gray-900 md:mx-4 md:my-0">Iniciar sesión
          </Link>
          <Link href="/register" className="my-1 text-gray-700 hover:text-gray-900 md:mx-4 md:my-0">Registrarse
          </Link>
        </div>
        <div className="flex md:hidden">
          <button type="button" className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300" aria-label="toggle menu" onClick={() => {
            setIsOpen(!isOpen)
            console.log(isOpen)
          }}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </nav >
  )
}