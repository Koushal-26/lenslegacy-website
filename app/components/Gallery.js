"use client";
import React from 'react'
import Image from 'next/image';
import Photos from './images';

const handleClick = (src) => {
 window.open(src, "_blank");
}

const Gallery = () => {
 const downloadImages = Photos;

 return (
  <div>
   <div className='text-center mb-12'>
    <h2 className='text-4xl font-bold'>My Work</h2>
    <p className='mt-2 text-lg text-gray-400'>A curated selection of my favorite photos.</p>
   </div>

   <div className='grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-6'>
    {downloadImages.map((image, index) => (
     <div key={index} className='relative overflow-hidden rounded-lg cursor-auto group col-span-1 row-span-2'>

      <Image onClick={() => handleClick(image.src)} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' src={image.src}
       alt={image.alt}
       width={500}
       height={500}
       priority={true} />
      <a onClick={() => window.confirm("Are you sure to download " + image.alt)} href={image.src} download>
       <span className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-300 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
         <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
         <polyline points="7 10 12 15 17 10" />
         <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
       </span>
      </a>
     </div>
    ))}
   </div>
  </div>
 )
}

export default Gallery
