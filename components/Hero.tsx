"use client";
import Image from "next/image"; // Import the Image component

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-4 bg-white">
      {/* Left Side - Profile Image with Static Border */}
      <div className="flex justify-center md:w-1/2 md:justify-end mb-4 md:mb-0 md:mr-6">
        {/* Wrapper with Static Border */}
        <div className="relative w-80 h-80 overflow-hidden border-2 border-black rounded-full">
          {/* Image inside the border */}
          <Image
            src="/Joel.jpg" // Correct path to your image in the public folder
            alt="Joel Sng"
            layout="fill" // Fill the parent container
            objectFit="cover"
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-bold mb-2 inline-block relative">
          Joel Sng
          {/* Red Line */}
          <span className="absolute left-0 w-full h-1 bg-red-600 -bottom-3"></span>
        </h1>

        {/* Add margin-top to the first paragraph to create space from the red line */}
        <p className="text-lg mt-4 mb-2">
          Hello! I am an aspiring data professional with experience in machine
          learning and data visualization.
        </p>

        <p className="text-lg">I will be graduating in December 2025.</p>
      </div>
    </section>
  );
}
