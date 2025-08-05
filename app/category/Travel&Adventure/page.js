"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const blogPosts = [
  {
    title: 'Budget Travel in India: Top Tips for Exploring Cheaply',
    slug: 'budget-travel-india',
    summary: "Discover simple and smart tips for budget travel in India. Learn how to explore India on a low budget and still enjoy its beauty.",
    date: 'July 15, 2025',
    image: '/images/budget-travel-india.jpg',
  },
];

const page = () => {
  return (
    <div>
      <Head>
        <title>Travel & Adventure - Blog</title>
        <meta name="description" content="Explore our Travel & Adventure blog for tips, guides, and stories to inspire your next journey." />
        <meta
          name="keywords"
          content="travel, adventure, budget travel, travel tips, travel guides, solo travel, backpacking, road trips, hiking, trekking, travel photography, world travel, travel destinations, travel planning, travel inspiration, cultural experiences, nature travel, outdoor adventure, travel hacks, travel stories, wanderlust"
        />
      </Head>
      <main className="bg-gray-50 min-h-screen m-4">
        <section className="text-center py-14 bg-white shadow-sm">
          <h1 className="text-5xl font-bold text-gray-800">Travel & Adventure</h1>
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
                <Link href={`/category/Travel&Adventure/${post.slug}`}>
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