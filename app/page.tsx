"use client";
import { useState } from "react";
import LineDivider from "@/components/LineDivider";
import Specialisations from "@/components/Specialisations";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground"; // Import your particles background component

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={handleDarkModeToggle}
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2"
      >
        Toggle Dark Mode
      </button>

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-start min-h-screen w-full px-6 text-black dark:text-white transition-colors duration-500">
        {/* Left Side - Profile Image with Circular Border */}
        <div className="flex justify-center md:w-1/2 mb-4 md:mb-0 md:mr-6 pointer-events-auto">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden border-2 border-black dark:border-white rounded-full mx-auto">
            <Image
              src="/Joel.jpg"
              alt="Joel Sng"
              layout="fill"
              objectFit="cover"
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text Content with Blurred Background */}
        <div className="relative z-10 md:w-1/2 bg-white/20 dark:bg-black/20 backdrop-blur-md p-6 pointer-events-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 inline-block relative">
            Joel Sng
            <span className="absolute left-0 w-full h-1 bg-red-600 -bottom-3"></span>
          </h1>
          <p className="text-lg mt-4 mb-2">
            Hello! I am an aspiring data professional with experience in machine
            learning and data visualization.
          </p>
          <p className="text-lg">I will be graduating in December 2025.</p>
        </div>
      </section>

      {/* Line Divider for Specialisations */}
      <LineDivider text="Specialisations" />

      {/* Specialisations Section */}
      <Specialisations />

      {/* Line Divider for Featured Project */}
      <LineDivider text="Featured Project" />

      {/* Featured Project Section */}
      <section className="w-full max-w-screen-lg px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-highlightRed text-3xl font-bold mb-2 dark:text-white">
            Neural Activity Visualisation with PCA
          </h2>
          <p className="text-gray-700 text-xl dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            lacus a sapien blandit viverra. Integer faucibus libero vitae nulla
            venenatis, non viverra massa suscipit...
          </p>
          <Link href="/projects/project1">
            <button className="mt-4 px-4 py-2 bg-highlightRed text-white font-bold hover:bg-red-700 dark:hover:bg-red-500 transition duration-300">
              Read More
            </button>
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full h-64">
          <Link href="/projects/project1">
            <Image
              src="/project1.jpg"
              alt="Featured Project"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </section>

      {/* Line Divider for More About Me */}
      <LineDivider text="More About Me" />

      {/* More About Me Section */}
      <section className="w-full max-w-screen-lg px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="relative w-full h-64">
          <Link href="/about">
            <Image
              src="/me.jpg"
              alt="More About Me"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Right Column - Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-highlightRed text-3xl font-bold mb-2 dark:text-white">
            Joel Sng
          </h2>
          <p className="text-gray-700 text-xl dark:text-gray-300">
            Double degree student, fitness junkie, dog owner, and community
            service advocate. I am adding more text here to pad this out. Hello!
          </p>
          <Link href="/about">
            <button className="mt-4 px-4 py-2 bg-highlightRed text-white font-bold hover:bg-red-700 dark:hover:bg-red-500 transition duration-300">
              Read More
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
