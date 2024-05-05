'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isClick, setIsClick] = useState(false)

  const toggleNavbar = () => {
    setIsClick(!isClick)
  }

  const closeNavbar = () => {
    setIsClick(false)
  }

  return (
    <nav className='z-10 fixed w-full bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <a href='/' className='flex items-center'>
              <Image
                src='/logo.png'
                alt='Logo'
                width={130}
                height={130}
              />
            </a>
          </div>
          <div className='hidden md:flex md:ml-6'>
            <div className='flex items-center space-x-4'>
              <Link href='/' className='text-white hover:bg-white hover:text-black px-3 py-2 rounded-lg' onClick={closeNavbar}>
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className='text-white hover:bg-white hover:text-black px-3 py-2 rounded-lg cursor-pointer'>
                    Explore
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href='/methane'>
                    <DropdownMenuItem onClick={closeNavbar}>
                      Methane
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <Link href='/upperatmosphere'>
                    <DropdownMenuItem onClick={closeNavbar}>
                      Upper Atmosphere
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <Link href='/oceanwarming'>
                    <DropdownMenuItem onClick={closeNavbar}>
                      Ocean Warming
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <Link href='/learnmore'>
                    <DropdownMenuItem onClick={closeNavbar}>
                      Learn More
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href='/contact' className='text-white hover:bg-white hover:text-black px-3 py-2 rounded-lg' onClick={closeNavbar}>
                Contact
              </Link>
              <Link href='/about' className='text-white hover:bg-white hover:text-black px-3 py-2 rounded-lg' onClick={closeNavbar}>
                About Us
              </Link>
            </div>
          </div>
          <div className='md:hidden'>
            <button
              onClick={toggleNavbar}
              className='inline-flex items-center justify-center p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
            >
              {isClick ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isClick && (
        <div className='absolute top-16 inset-x-0 bg-gray-800 bg-opacity-90 md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link href='/' className='text-white hover:bg-white hover:text-black block px-3 py-2 rounded-lg' onClick={closeNavbar}>
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className='text-white hover:bg-white hover:text-black block px-3 py-2 rounded-lg w-full text-left cursor-pointer' onClick={closeNavbar}>
                  Explore
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href='/methane'>
                  <DropdownMenuItem onClick={closeNavbar}>
                    Methane
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href='/upperatmosphere'>
                  <DropdownMenuItem onClick={closeNavbar}>
                    Upper Atmosphere
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href='/oceanwarming'>
                  <DropdownMenuItem onClick={closeNavbar}>
                    Ocean Warming
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href='/learnmore'>
                  <DropdownMenuItem onClick={closeNavbar}>
                    Learn More
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href='/contact' className='text-white hover:bg-white hover:text-black block px-3 py-2 rounded-lg' onClick={closeNavbar}>
              Contact
            </Link>
            <Link href='/about' className='text-white hover:bg-white hover:text-black block px-3 py-2 rounded-lg' onClick={closeNavbar}>
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
