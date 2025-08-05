"use client"
import Image from 'next/image';
import Head from 'next/head';

const GameWalkthroughs = () => {
  return (
    <>
      <Head>
        <title>Game Walkthroughs: Win Every Level</title>
        <meta name="description" content="Unlock the secrets to mastering your favorite games with our comprehensive walkthroughs." />
        <meta
          name="keywords"
          content="game walkthroughs, gaming tips, level guides, cheat codes, strategy guides, video game solutions, puzzle hints, boss fight tips, mission help, achievement guides, trophy guides, speedrun tips, hidden secrets, easter eggs, game maps, collectibles, unlockables, walkthrough videos, playthroughs, game strategies, quest guides"
        />
      </Head>
      <main className="min-h-screen bg-gray-950 text-white p-6 sm:p-12">
        <div className="max-w-3xl mx-auto mt-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-blue-400">
            Game Walkthroughs: Win Every Level
          </h1>

          <Image 
            src="/images/walkthrough.jpg" 
            alt="Game Walkthrough" 
            width={1000} 
            height={600} 
            className="rounded-2xl shadow-lg mb-6 w-full h-auto object-cover"
          />

          <p className="text-lg leading-relaxed mb-4">
            Are you stuck in a game level? Don&apos;t worry! A <strong>game walkthrough</strong> is a guide that shows you how to play and win a game step by step. It helps you understand puzzles, secrets, and strategies. Whether you&apos;re playing action games, puzzles, or open-world adventures, walkthroughs save your time and frustration.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-300">🔍 Why Use a Game Walkthrough?</h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Learn how to pass hard levels.</li>
            <li>Discover hidden items and shortcuts.</li>
            <li>Save time by avoiding trial-and-error.</li>
            <li>Enjoy a stress-free gaming experience.</li>
          </ul>

          <Image 
            src="/images/gaming-guide.jpg" 
            alt="Gaming Guide" 
            width={1000} 
            height={500} 
            className="rounded-xl shadow mb-6 w-full h-auto object-cover"
          />

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-300">🎮 Popular Games with Walkthroughs</h2>
          <p className="mb-4">Some games have amazing walkthroughs online:</p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Minecraft - Explore and build with ease.</li>
            <li>GTA V - Complete missions and earn faster.</li>
            <li>Legend of Zelda - Solve smart puzzles step-by-step.</li>
            <li>Call of Duty - Strategy guides for every mode.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-300">📌 Final Tip</h2>
          <p className="mb-6">
            Use video walkthroughs or written guides from YouTube, gaming blogs, or Reddit. Practice makes perfect—but smart tips make you faster!
          </p>

          <div className="text-center">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
              onClick={() => window.open('https://www.ign.com/wikis/', '_blank')}
            >
              Explore Game Guides
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default GameWalkthroughs;
