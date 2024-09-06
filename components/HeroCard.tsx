'use client'

import Image from "next/image"
import { useTheme } from "@/contexts/ThemeContext" // Import the useTheme hook

export function HeroCard() {
  const { isDarkMode } = useTheme(); // Access the dark mode state

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
      <div className="z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 py-4">
        <div className="relative md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src="/Joel.jpg"
              alt="Joel Sng"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left md:pl-8">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Joel Sng
          </h1>
          <p className={`text-xl md:text-2xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Hello! I am an aspiring data professional with experience in machine learning and data visualization.
          </p>
          <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            I will be graduating in December 2025.
          </p>
          <div className="mt-8">
            <a
              href="/projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out mr-4"
            >
              My Projects
            </a>
            <a
              href="https://www.linkedin.com/in/joelsngzw/"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
