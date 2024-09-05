// app/page.tsx
"use client";
import Hero from "@/components/Hero";
import LineDivider from "@/components/LineDivider";
import Specialisations from "@/components/Specialisations"; // Corrected the import
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full px-6 ">
      {/* Hero Section */}
      <Hero />

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
          <h2 className="text-highlightRed text-3xl font-bold mb-2">Neural Activity Visualisation with PCA</h2>
          <p className="text-gray-700 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibus libero vitae nulla venenatis, non viverra massa suscipit... {/* Adjust to control character limit */}
          </p>
          <Link href="/projects/project1">
            <button className="mt-4 px-4 py-2 bg-highlightRed text-white font-bold rounded hover:bg-red-700 transition duration-300">
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
              className="rounded-lg cursor-pointer"
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
              className="rounded-lg cursor-pointer"
            />
          </Link>
        </div>

        {/* Right Column - Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-highlightRed text-3xl font-bold mb-2">Joel Sng</h2>
          <p className="text-gray-700 text-xl">
            Double degree student, fitness junkie, dog owner, and community service advocate. I am adding more text here to pad this out. Hello!  {/* Adjust to control character limit */}
          </p>
          <Link href="/about">
            <button className="mt-4 px-4 py-2 bg-highlightRed text-white font-bold rounded hover:bg-red-700 transition duration-300">
              Read More
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
