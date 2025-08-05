"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const blogPosts = [
  {
    title: 'Easy Home Workout Without Equipment - Full Body Routine',
    slug: 'Home-workout',
    summary: 'Stay fit at home with this easy, no-equipment workout. Perfect for beginners, this full-body routine needs just your body and 15 minutes a day!',
    date: 'July 15, 2025',
    image: '/images/home-workout.jpg',
  },
];

const page = () => {
  return (
    <div>
      <Head>
        <title>Health & Fitness - Blog</title>
        <meta name="description" content="Explore our Health & Fitness blog for tips, workouts, and wellness advice." />
        <meta name="keywords" content="health, fitness, workouts, wellness, nutrition, exercise, home workout, fitness tips, healthy living, weight loss, muscle gain, cardio, strength training, yoga, meditation, mental health, healthy recipes, diet, motivation, lifestyle, self-care, stretching, HIIT, pilates, running, gym, bodyweight, endurance, flexibility, mindfulness, sports, personal training" />
      </Head>
      <main className="bg-gray-50 min-h-screen m-4">
        <section className="text-center py-14 bg-white shadow-sm">
          <h1 className="text-5xl font-bold text-gray-800">Health & Fitness</h1>
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
                <Link href={`/category/Health&Fitness/${post.slug}`}>
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