"use client"
import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const blogPosts = [
  {
    title: "Quick Meals for Students",
    slug: 'quick-meals',
    summary: "Discover simple and fast recipes perfect for busy students.",
    date: 'July 16, 2025',
    image: '/images/quickMeals.jpg',
  },
];

const page = () => {
  return (
    <div>
      <Head>
        <title>Food & Recipes | LensLegacy</title>
        <meta name="description" content="Explore delicious recipes and cooking tips for every occasion." />
        <meta
          name="keywords"
          content="food, recipes, cooking, quick meals, healthy eating, student meals, easy recipes, culinary tips, meal prep, vegetarian, vegan, gluten-free, desserts, snacks, breakfast, lunch, dinner, international cuisine, kitchen hacks, nutrition, grocery shopping, budget meals, comfort food, baking, grilling, food trends, seasonal recipes, family meals, meal planning"
        />
      </Head>
      <main className="bg-gray-50 min-h-screen m-4">
        <section className="text-center py-14 bg-white shadow-sm">
          <h1 className="text-5xl font-bold text-gray-800">Food & Recipes</h1>
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
                <Link href={`/category/Food&Recipes/${post.slug}`}>
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