"use client";
import { useState } from "react";
import LineDivider from "@/components/LineDivider";
import Specialisations from "@/components/Specialisations";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground";
import { HeroCard } from "@/components/HeroCard";
import { ReadMoreButton } from "@/components/read-more-button";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 overflow-hidden bg-white dark:bg-black transition-colors duration-500">

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Hero Section */}
      <HeroCard />

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
          <h2 className=" text-3xl font-bold mb-2 text-black dark:text-white">
            Neural Activity Visualisation with PCA
          </h2>
          <p className="text-gray-700 text-xl dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            lacus a sapien blandit viverra. Integer faucibus libero vitae nulla
            venenatis, non viverra massa suscipit...
          </p>
          <div className="flex justify-end mt-2">
            <Link href="/projects/project1">
              <ReadMoreButton />
            </Link>
          </div>
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
          <h2 className=" text-3xl font-bold mb-2 text-black dark:text-white">
            Joel Sng
          </h2>
          <p className="text-gray-700 text-xl dark:text-gray-300">
            Double degree student, fitness junkie, dog owner, and community
            service advocate. I am adding more text here to pad this out. Hello there!
          </p>
          <div className="flex justify-end mt-2">
            <Link href="/about">
              <ReadMoreButton />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
