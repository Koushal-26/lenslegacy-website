import React from 'react'
import Link from 'next/link'

const Contact = () => {
 return (
  <div className='transform-none'>
   <h2 className="text-4xl font-bold tracking-tighter">Get In Touch</h2>
   <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto text-gray-400">Have an idea in your mind or wanted to contact us? I&apos;d love to hear from you.</p>
   <Link
    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=contact@aninfinitethread.com"
    target="_blank"
    className='mt-6 inline-block text-2xl font-semibold transition-colors hover:text-gray-500'
   >
    hello@lenslegacy.com
   </Link>
  </div>
 )
}

export default Contact
