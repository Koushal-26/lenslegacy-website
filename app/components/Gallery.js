import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Photos from './images';

const handleClick = (src) => {
  window.open(src, "_blank")
}

const Gallery = () => {
  const downloadImages = Photos

  return (
    <>
      <Head>
        <title>My Work | LensLegacy</title>
        <meta name="description" content="Explore a curated selection of my favorite photos from LensLegacy." />
        <meta name="keywords" content="photography, gallery, LensLegacy, photos, free photos, free ai, free ai images, free, free images, ai creation, ai creating images" />
        <meta property="og:title" content="My Work | LensLegacy" />
        <meta property="og:description" content="A showcase of top photography by LensLegacy." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com/gallery" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "LensLegacy Gallery",
              "description": "A curated gallery of photography work",
              "hasPart": downloadImages.map((img) => ({
                "@type": "ImageObject",
                "contentUrl": img.src,
                "name": img.title,
                "description": img.alt,
                "keywords": img.keywords,
              }))
            })
          }}
        />
      </Head>

      <main>
        <section className='text-center mb-12'>
          <h1 className='text-4xl font-bold hover:scale-102 duration-500'>My Work</h1>
          <p className='mt-2 text-lg text-gray-400 hover:scale-102 duration-500'>
            A curated selection of my favorite photos.
          </p>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-6'>
          {downloadImages.map((image, index) => (
            <article key={index} className='relative overflow-hidden rounded-lg cursor-auto group col-span-1 row-span-2'>
              <Image
                onClick={() => handleClick(image.src)}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                src={image.src}
                alt={image.alt}
                width={800}
                height={800}
                priority={index < 9}
              />
              <a href={image.src} download>
                <span className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-gray-700">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
              </a>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

export default Gallery
