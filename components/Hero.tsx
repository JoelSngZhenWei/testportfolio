"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-start min-h-screen w-full px-6">
      {/* Content Container with Transparent Background and Non-blocking Interactions */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start w-full px-6 py-10 bg-white/20 backdrop-blur-sm rounded-lg pointer-events-none">
        {/* Left Side - Profile Image with Static Border */}
        <div className="flex justify-center md:w-1/2 mb-4 md:mb-0 md:mr-6 pointer-events-auto">
          {/* Wrapper with Static Border */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden border-2 border-black rounded-full mx-auto">
            {/* Image inside the border */}
            <Image
              src="/Joel.jpg"
              alt="Joel Sng"
              layout="fill"
              objectFit="cover"
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-left md:w-1/2 pointer-events-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 inline-block relative">
            Joel Sng
            {/* Red Line */}
            <span className="absolute left-0 w-full h-1 bg-red-600 -bottom-3"></span>
          </h1>

          <p className="text-lg mt-4 mb-2">
            Hello! I am an aspiring data professional with experience in machine
            learning and data visualization.
          </p>

          <p className="text-lg">I will be graduating in December 2025.</p>
        </div>
      </div>
    </section>
  );
}
