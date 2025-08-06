import React from 'react'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import About from './components/About'


export default function Home() {
  

  return (
    <div>
      <main className="bg-black min-h-screen text-white">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 transform transition-all duration-500 ease-in-out">
          <h1 className="text-5xl md:text-6xl sm:text-6xl font-[800] mb-4 tracking hover:scale-102 duration-500">Creating Life&apos;s Fleeting Moments</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400 hover:scale-102 duration-500">Through a technology, I transform ordinary scenes into extraordinary memories.</p>
        </section>

        <section id='gallery' className='container mx-auto px-6 py-24 transform transition-all duration-500 ease-in-out'>
          <Gallery />
        </section>

        <section id='about' className='py-24 transform transition-all duration-500 ease-in-out'>
          <About />
        </section>

        <section id='contact' className='container mx-auto px-6 py-24 text-center transform transition-all duration-500 ease-in-out'>
          <Contact />
        </section>
        <div className="container mx-auto px-6 py-8 text-center text-muted-foreground text-sm text-gray-500">
          © {new Date().getFullYear()} LensLegacy. All rights reserved.
        </div>
      </main>
    </div>
  )
}
