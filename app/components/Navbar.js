import React from 'react'
import Dropdown from './dropdown'
import Link from 'next/link'


const Navbar = () => {
 
  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
      <nav className="bg-[#0a0a0a] text-white py-4 px-8 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold transform transition-all duration-500 ease-in-out hover:scale-105">
          <Link href="#" className='text-white font-bold'>📷 Lens<span>Legacy</span></Link>
        </div>
       

        <div className="space-x-6 hidden text-sm md:flex">
          <Link href="#gallery" className="hover:text-gray-300 hover:scale-105 duration-500">Gallery</Link>
          <Dropdown />
          <Link href="#about" className="hover:text-gray-300 hover:scale-105 duration-500">About</Link>
          <Link href="#contact" className="hover:text-gray-300 hover:scale-105 duration-500">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
