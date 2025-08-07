import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
 return (
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center transform-none">
   <div>
    <Image priority={true}
    src="/artificial-intelligence.jpg"
     alt="Portrait of a Standing Robart (AI)"
     width={500}
     height={500}
     className="rounded-lg shadow-2xl w-full h-auto object-cover"
    />
   </div>


   <div>
    <h2 className="text-2xl font-bold tracking-tighter">
     Welcome to <strong>LensLegacy</strong> - where imagination meets artificial intelligence.
    </h2>
    <p className="text-gray-400 text-lg mt-4">
     We specialize in creating <strong>AI-generated photos</strong> that blur the line between art and reality. Our mission is to push the boundaries of visual storytelling using advanced AI tools and creative vision.
    </p>
    <p className="text-gray-400 text-lg mt-4">
     Whether you&apos;re looking for futuristic portraits, or concept art that doesn&apos;t exist in the real world-our gallery is full of <strong>limitless creativity</strong> powered by machine learning.
    </p>

    <p className="text-gray-400 text-lg mt-4">
     We believe that the future of visual content lies in <strong>AI-enhanced creativity</strong>. Our platform is designed for curious minds and creative thinkers who want to explore beyond the lens.
    </p>
    <p className="text-center mt-8">
     <Link
      href="#gallery"
      className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-400 transition mr-4"
     >
      Explore Gallery
     </Link>
    </p>
   </div>
  </div>
 );
};

export default About;
