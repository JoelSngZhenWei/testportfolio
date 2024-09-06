"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black px-6 py-12 transition-colors duration-500">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-center text-black dark:text-white">
        About Me
      </h1>

      {/* Profile Picture */}
      <div className="relative w-40 h-40 mb-6">
        <Image
          src="/me.jpg" // Ensure this path is correct relative to the public folder
          alt="Joel Sng"
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-highlightRed"
        />
      </div>

      {/* Description */}
      <div className="max-w-2xl text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Hi, I am Joel Sng, a double degree student, fitness enthusiast, dog lover, and passionate advocate for community service...
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          With a keen interest in data visualization, machine learning, and software engineering...
        </p>
      </div>
    </section>
  );
}
