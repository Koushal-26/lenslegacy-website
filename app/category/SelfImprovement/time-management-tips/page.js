import Image from 'next/image'
import Head from 'next/head'

const Page = () => {
  return (
    <div>
      <Head>
        <title>Time Management Tips for Students</title>
        <meta name="description" content="Discover effective time management strategies to boost your productivity and academic performance." />
        <meta
          name="keywords"
          content="time management, productivity, study tips, student success, academic performance, organization, planning, scheduling, focus, discipline, student life, efficiency, self-improvement, motivation, goal setting, procrastination, routines, habits, time blocking, prioritization"
        />
      </Head>
      <article className="max-w-3xl mx-auto px-4 py-10 mt-10">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Time Management Tips for Students.
        </h1>

        <Image
          src="/images/time-management.jpg"
          alt="Student using time management techniques"
          width={800}
          height={400}
          className="rounded-2xl shadow-lg mx-auto mb-8 mt-4"
          unoptimized={true}
        />

        <p className="text-xl mb-4">
          Time is a valuable gift. For students, using time smartly can reduce
          stress and help you succeed in studies and life.
        </p>
        <hr />

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">
          Why is Time Management Important?
        </h2>
        <p className="mb-4 text-xl">
          Time management helps you complete your homework on time, prepare for
          exams, and still have time to relax. It makes you more focused and
          confident. 🎯
        </p>
        <hr />

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">
          5 Simple Tips to Manage Time
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-xl">
          <li>📅 Make a daily schedule or to-do list</li>
          <li>⏰ Set time limits for each task</li>
          <li>📵 Avoid mobile distractions while studying</li>
          <li>🧘‍♀️ Take short breaks to stay fresh</li>
          <li>😴 Get enough sleep to stay active</li>
        </ul>
        <Image
          src="/images/student-planning.jpg"
          alt="Student planning their day"
          width={800}
          height={400}
          className="rounded-2xl shadow-lg mx-auto mb-8"
          unoptimized={true}
        />
        <p className="text-xl mb-4">
          Remember, managing time is like training a muscle. The more you practice,
          the better you get! 💪
        </p>
        <hr />

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">
          Final Thought
        </h2>
        <p className="mb-4 text-xl">
          Good time management makes you a better student and a happier person.
          Start today, one step at a time! ✅
        </p>
        <hr />

        <p className="text-sm text-gray-600 mt-8">
          *Written by An Infinite Thread | Last updated: July 22, 2025*
        </p>
      </article>
    </div>
  )
}

export default Page
