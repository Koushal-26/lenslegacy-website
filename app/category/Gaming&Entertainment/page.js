"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const blogPosts = [
  {
    title: 'Game Walkthroughs: Win Every Level',
    slug: 'game-walkthroughs',
    summary: "Unlock the secrets to mastering your favorite games with our comprehensive walkthroughs.",
    date: 'July 15, 2025',
    image: '/images/game-walkthroughs.jpg',
  },
];

const page = () => {
  return (
    <div>
      <Head>
        <title>Gaming & Entertainment</title>
        <meta name="description" content="Explore the latest in gaming and entertainment with our articles, tutorials, and resources." />
        <meta name="keywords" content="gaming, entertainment, game walkthroughs, gaming tips, video games, tutorials, articles, reviews, guides, cheats, strategies, esports, streaming, consoles, PC gaming, mobile games, game news, game releases, multiplayer, single player, retro games, game development, gaming hardware, VR, AR, board games, card games, gaming events, tournaments, gaming culture, indie games, mods, speedruns, let's play, walkthrough videos, gaming podcasts, gaming accessories" />
      </Head>
      <main className="bg-gray-50 min-h-screen m-4">
        <section className="text-center py-14 bg-white shadow-sm">
          <h1 className="text-5xl font-bold text-gray-800">Gaming & Entertainment</h1>
          <p className="text-gray-500 mt-3 text-lg">Discover articles, tutorials, and resources</p>
        </section>

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
                <Link href={`/category/Gaming&Entertainment/${post.slug}`}>
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