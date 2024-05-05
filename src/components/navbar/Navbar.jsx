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
	const [isClick, setisClick] = useState(false)
	const toggleNavbar = () => {
		setisClick(!isClick)
	}
	return (
		<>
			<nav className='z-10 fixed w-full bg-gray-800 '>
				<div className='max-w-7xl mx-auto sm:px-6 lg:px-8 '>
					<div className='flex items-center justify-between h-16'>
						<div className='flex items-center'>
							<div className='flex-shrink-0 '>
								<a href='/' className='text-white'>
									<Image
										src={'/logo.png'}
										width={130}
										height={130}
									/>
								</a>
							</div>
						</div>
						<div className='hidden md:block'>
							<div className='ml-4 flex items-center space-x-4'>
								<Link
									href='/'
									className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
									Home
								</Link>
								<DropdownMenu>
									<DropdownMenuTrigger className='text-white hover:bg-white hover:text-black rounded-lg p-2 text-center'>
										Explore
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<Link href='/methane'>
											<DropdownMenuItem>
												Methane
											</DropdownMenuItem>
										</Link>
										<DropdownMenuSeparator />
										<Link href='/upperatmosphere'>
											<DropdownMenuItem>
												Upper Atmosphere
											</DropdownMenuItem>
										</Link>
										<DropdownMenuSeparator />
										<Link href='/oceanwarming'>
											<DropdownMenuItem>
												Ocean Warming
											</DropdownMenuItem>
										</Link>
										<DropdownMenuSeparator />
										<Link href='/learnmore'>
											<DropdownMenuItem>
												Learn More
											</DropdownMenuItem>
										</Link>
									</DropdownMenuContent>
								</DropdownMenu>
								{/* <Link
									href='/news'
									className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
									News
								</Link> */}
								<Link
									href='/contact'
									className='block text-white hover:bg-white hover:text-black rounded-lg p-2 text-center'>
									Contact
								</Link>
								<Link
									href='/about'
									className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
									About Us
								</Link>
							</div>
						</div>
						<div className='md:hidden flex items-center'>
							<button
								className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
								onClick={toggleNavbar}>
								{isClick ? (
									<svg
										className='h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								) : (
									<svg
										className='h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M4 6h16M4 12h16m-7 6h7'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				{isClick && (
					<div className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 absolute top-100px right-0 bg-black w-3/6	flex flex-col align-start gap-10 h-screen'>
							<Link
								href='/'
								className=' block text-white hover:bg-white hover:text-black rounded-lg p-2 text-center'>
								Home
							</Link>
							<DropdownMenu>
								<DropdownMenuTrigger className='text-white hover:bg-white hover:text-black rounded-lg p-2 text-center'>
									Explore
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<Link href='/co2'>
										<DropdownMenuItem>CO2</DropdownMenuItem>
									</Link>
									<DropdownMenuSeparator />
									<Link href='/globaltemp'>
										<DropdownMenuItem>
											Global Temperature
										</DropdownMenuItem>
									</Link>
									<DropdownMenuSeparator />
									<Link href='/sealevel'>
										<DropdownMenuItem>
											Sea Level
										</DropdownMenuItem>
									</Link>
									<DropdownMenuSeparator />
									<Link href='/methane'>
										<DropdownMenuItem>
											Methane
										</DropdownMenuItem>
									</Link>
									<DropdownMenuSeparator />
									<Link href='/upperatmosphere'>
										<DropdownMenuItem>
											Upper Atmosphere
										</DropdownMenuItem>
									</Link>
									<DropdownMenuSeparator />
									<Link href='/oceanwarming'>
										<DropdownMenuItem>
											Ocean Warming
										</DropdownMenuItem>
									</Link>
								</DropdownMenuContent>
							</DropdownMenu>
							<Link
								href='/news'
								className='block text-white hover:bg-white hover:text-black rounded-lg p-2 text-center'>
								News
							</Link>
							<Link
								href='/learnmore'
								className='block text-white hover:bg-white hover:text-black rounded-lg p-2 text-center'>
								Learn More
							</Link>
							<Link
								href='/contact'
								className='block text-white hover:bg-white hover:text-black rounded-lg p-2 text-center'>
								Contact
							</Link>
							<Link
								href='/about'
								className='block text-white hover:bg-white hover:text-black rounded-lg p-2 text-center'>
								About Us
							</Link>
						</div>
					</div>
				)}
			</nav>
		</>
	)
}

export default Navbar
