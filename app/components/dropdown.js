import React, { useState, useRef } from 'react'
import Link from 'next/link'

const Dropdown = () => {
 const [open, setOpen] = useState(false)
 const dropdownRef = useRef();

 return (
  <div
   ref={dropdownRef}
   onMouseEnter={() => setOpen(true)}
   onMouseLeave={() => setOpen(false)}
   className="relative inline-block"
  >
   <button onClick={() => setOpen(!open)} className='hover:text-gray-300 hover:scale-105 duration-500 flex justify-center items-center'
    type="button"
   >Blogs
    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={4}
     viewBox="0 0 24 24">
     <path d="M19 9l-7 7-7-7" />
    </svg>
   </button>

   {open && (
    <div className="absolute z-10 w-44 origin-top-right rounded-md bg-white border border-gray-300">
     <div className="py-1">
      <Link href="/category/Coding&WebDev" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Coding & Web Dev</Link>
      <Link href="/category/Health&Fitness" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Health & Fitness</Link>
      <Link href="/category/Tech&Gadgets" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Tech & Gadgets</Link>
      <Link href="/category/SelfImprovement" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Self Improvement</Link>
      <Link href="/category/Education&StudyTips" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Education / Study Tips</Link>
      <Link href="/category/Travel&Adventure" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Travel & Adventure</Link>
      <Link href="/category/Gaming&Entertainment" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Gaming & Entertainment</Link>
      <Link href="/category/EcoLiving" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Eco Living</Link>
      <Link href="/category/Food&Recipes" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Food & Recipes</Link>
     </div>
    </div>
   )}
  </div>
 );
}

export default Dropdown
