"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-darkBackground px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-center text-black dark:text-darkText">About Me</h1>

      {/* Profile Picture */}
      <div className="relative w-40 h-40 mb-6">
        <Image
          src="/me.jpg" // Ensure this path is correct relative to the public folder
          alt="Joel Sng"
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-highlightRed dark:border-darkHighlight"
        />
      </div>

      {/* Description */}
      <div className="max-w-2xl text-center">
        <p className="text-lg text-gray-700 dark:text-darkText mb-4">
          Hi, I'm Joel Sng, a double degree student, fitness enthusiast, dog
          lover, and passionate advocate for community service. I am pursuing a
          double degree in Business Management and Information Systems at
          Singapore Management University and will be graduating in December
          2025.
        </p>
        <p className="text-lg text-gray-700 dark:text-darkText">
          With a keen interest in data visualization, machine learning, and
          software engineering, I am continually developing my skills and
          working on exciting projects that bridge the gap between data and
          actionable insights. My journey so far has been driven by a passion
          for learning and a commitment to making a positive impact.
        </p>
      </div>
    </section>
  );
}
