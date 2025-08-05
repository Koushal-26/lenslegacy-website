"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const blogPosts = [
  {
    title: 'Study Hacks for Slow Learners | Boost Your Learning',
    slug: 'study-hacks',
    summary: "Best study tips and tricks for slow learners to improve focus, memory, and results. Simple hacks for better learning.",
    date: 'July 15, 2025',
    image: '/images/study-hacks-for-slow-learners.jpg',
  },
];

const page = () => {
  return (
    <div>
      <Head>
        <title>Education & Study Tips | LensLegacy</title>
        <meta name="description" content="Discover articles, tutorials, and resources about education and study tips." />
        <meta name="keywords" content="education, study tips, learning, tutorials, resources, study hacks, memory improvement, focus enhancement, slow learners, exam preparation, note taking, productivity, motivation, time management, effective learning, student success, academic skills, concentration, revision techniques, study routines, online learning, self improvement, cognitive skills, test strategies, educational resources, study habits" />
      </Head>

      <main className="bg-gray-50 min-h-screen m-4">
        <section className="text-center py-14 bg-white shadow-sm">
          <h1 className="text-5xl font-bold text-gray-800">Education & Study Tips</h1>
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
                <Link href={`/category/Education&StudyTips/${post.slug}`} className="mt-4 text-blue-600 font-semibold hover:underline block">
                  Read More →
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