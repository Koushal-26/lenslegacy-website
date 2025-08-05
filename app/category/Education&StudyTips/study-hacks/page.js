// pages/study-hacks.js
import Image from "next/image";
import Head from "next/head";

export default function StudyHacks() {
  return (
    <>
      <Head>
        <title>Study Hacks for Slow Learners | Boost Your Learning</title>
        <meta
          name="description"
          content="Best study tips and tricks for slow learners to improve focus, memory, and results. Simple hacks for better learning."
        />
        <meta name="keywords" content="study tips, slow learners, learning hacks, memory improvement, focus techniques" />
      </Head>

      <main className="max-w-3xl mx-auto p-6 font-sans text-xl mt-10">
        <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">
          🧠 Study Hacks for Slow Learners
        </h1>

        <Image
          src="/images/study-tips.jpg"
          alt="Study hacks for slow learners"
          width={700}
          height={400}
          className="rounded-2xl shadow-md mx-auto mb-6"
          unoptimized={true}
        />

        <p className="text-xl mb-4">
          Learning slowly doesn&apos;t mean you can&apos;t learn well. With the right
          hacks, anyone can become a smart learner. Here are some easy and
          powerful tips to help slow learners study better.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">
          1. Break Study Time Into Small Parts
        </h2>
        <p className="mb-4">
          Use the <strong>Pomodoro Technique</strong>: Study for 25 minutes, take a 5-minute break. This keeps your brain fresh and focused.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">
          2. Use Visual Aids
        </h2>
        <p className="mb-4">
          Try <strong>diagrams, charts, and flashcards</strong>. Images help you understand faster and remember longer.
        </p>
        <Image
          src="/images/flashcards.jpg"
          alt="Flashcards for study"
          width={600}
          height={300}
          className="rounded-xl shadow-sm mx-auto my-4"
          unoptimized={true}
        />

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">
          3. Learn by Teaching
        </h2>
        <p className="mb-4">
          After studying, explain what you learned to someone else—or even a
          mirror! Teaching boosts your memory.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">
          4. Use Simple Notes
        </h2>
        <p className="mb-4">
          Don&apos;t write everything. Use bullet points and keywords. Keep your
          notes clean and easy to revise.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">
          5. Stay Positive & Take Breaks
        </h2>
        <p className="mb-6">
          Don&apos;t compare yourself. Everyone has a different pace. Take breaks,
          eat healthy, and sleep well.
        </p>

        <div className="bg-indigo-100 p-4 rounded-xl shadow-md mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            💡 Bonus Tip:
          </h3>
          <p>
            Use tools like <strong>Notion</strong> or <strong>Google Keep</strong> to organize your study tasks.
          </p>
        </div>
        <hr />
          <p className="text-sm text-gray-500">
            keywords: &quot;study tips&quot;, &quot;slow learners&quot;, &quot;how to study better&quot;, &quot;learning hacks&quot;, &quot;memory improvement&quot;, &quot;focus techniques&quot;
          </p>
      </main>
    </>
  );
}
