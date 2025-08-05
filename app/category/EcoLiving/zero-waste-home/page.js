
import React from 'react';
import Image from "next/image";
import Head from "next/head";

export default function ZeroWasteHome() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <Head>
        <title>Zero Waste Home Setup | Eco-Friendly Living</title>
        <meta
          name="description"
          content="Learn how to start a zero waste home with simple steps. Reduce waste, save money, and protect the planet."
        />
        <meta name="keywords" content="zero waste, eco-friendly, sustainable living, green home, waste reduction" />
      </Head>

      <h1 className="text-4xl font-bold text-green-700 mb-4 mt-14">
        🏡 Zero Waste Home Setup: A Simple Guide
      </h1>

      <Image
        src="/images/zero-waste.jpg"
        alt="Zero Waste Home"
        width={1200}
        height={600}
        className="rounded-2xl shadow-md mb-6 w-full h-auto"
      />

      <p className="text-lg mb-4">
        A zero waste home means using less plastic, recycling smartly, and
        making eco-friendly choices. It&apos;s not about being perfect — it&apos;s about
        progress. Here&apos;s how to begin:
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🌿 1. Use Reusables</h2>
      <p className="mb-4">
        Replace plastic bags, bottles, and containers with cloth bags, glass
        jars, and stainless-steel bottles.
      </p>

      <Image
        src="/images/reusables.jpg"
        alt="Reusable items"
        width={800}
        height={400}
        className="rounded-xl mb-6 w-full h-auto"
      />

      <h2 className="text-2xl font-semibold mt-6 mb-2">🧼 2. Make DIY Cleaners</h2>
      <p className="mb-4">
        Mix vinegar, lemon, and baking soda to clean your kitchen and bathroom
        — no chemicals needed!
      </p>

      <Image
        src="/images/diy-cleaners.jpg"
        alt="DIY Natural Cleaners"
        width={800}
        height={400}
        className="rounded-xl mb-6 w-full h-auto"
      />

      <h2 className="text-2xl font-semibold mt-6 mb-2">🍎 3. Shop Smart</h2>
      <p className="mb-4">
        Buy loose fruits and vegetables, and carry your own containers for bulk
        foods to reduce packaging waste.
      </p>

      <Image
        src="/images/eco-shopping.jpg"
        alt="Eco-friendly shopping"
        width={800}
        height={400}
        className="rounded-xl mb-6 w-full h-auto"
      />

      <h2 className="text-2xl font-semibold mt-6 mb-2">♻️ 4. Compost Waste</h2>
      <p className="mb-4">
        Turn kitchen scraps into compost for your garden. It reduces landfill
        waste and nourishes plants.
      </p>

      <Image
        src="/images/compost-bin.jpg"
        alt="Compost Bin"
        width={800}
        height={400}
        className="rounded-xl mb-6 w-full h-auto"
      />

      <div className="mt-8 p-4 bg-green-50 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Final Tip 🌱</h3>
        <p>
          Start small. Even one swap makes a difference. A zero waste home is
          better for the planet and healthier for you!
        </p>
      </div>
    </div>
  );
}
