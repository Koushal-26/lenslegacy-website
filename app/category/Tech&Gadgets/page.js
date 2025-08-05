"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const blogPosts = [
  {
    title: 'Top Smart Gadgets to Watch in 2025',
    slug: 'Smart-Gadgets',
    summary: 'Discover the top trending smart gadgets of 2025, from AI-powered wearables to futuristic home devices. Stay ahead with the latest in tech!',
    date: 'July 15, 2025',
    image: '/images/smart-gadgets.jpg',
  },
];

const page = () => {
  return (
    <div>
      <Head>
        <title>Tech & Gadgets - Blog</title>
        <meta name="description" content="Explore our Tech & Gadgets blog for the latest trends, reviews, and innovations in technology." />
        <meta
          name="keywords"
          content="tech, gadgets, technology, smart devices, reviews, innovations, AI, wearables, home automation, electronics, future tech, mobile devices, software, hardware, IoT, robotics, VR, AR, smart home, digital trends, consumer electronics, tech news, device reviews, tech tips, automation, cloud computing, cybersecurity, 5G, blockchain, drones, gaming, laptops, smartphones, tablets, accessories, audio, smartwatches, fitness trackers, green tech, sustainable technology, emerging tech"
        />
      </Head>
      <main className="bg-gray-50 min-h-screen m-4">
        <section className="text-center py-14 bg-white shadow-sm">
          <h1 className="text-5xl font-bold text-gray-800">Tech & Gadgets</h1>
          <p className="text-gray-500 mt-3 text-lg">Discover articles, tutorials, and resources</p>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={600}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">{post.date}</p>
                <h2 className="text-xl font-semibold text-gray-800 mt-1">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.summary}</p>
                <Link href={`/category/Tech&Gadgets/${post.slug}`}>
                  <button className="mt-4 text-blue-600 font-semibold hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default page