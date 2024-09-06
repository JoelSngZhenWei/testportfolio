"use client";

import { useState } from "react";

// Define the prop types
interface ThemeProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Theme({ isDarkMode, toggleDarkMode }: ThemeProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDarkModeToggle = () => {
    setIsAnimating(true); // Start the acceleration animation

    // Change the theme at the midpoint of the spin animation (250ms)
    setTimeout(() => {
      toggleDarkMode();
    }, 250); // Midpoint of the 500ms animation

    // Stop the spinning animation after it completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Total duration of 500ms for the animation
  };

  return (
    <button
      onClick={handleDarkModeToggle}
      className="flex items-center p-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
    >
      <span className="sr-only">Toggle dark mode</span>
      <div
        className={`transition-transform ${
          isAnimating ? "animate-spin-accelerate" : ""
        }`}
      >
        {isDarkMode ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Moon Icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12.79A9 9 0 1112.79 3a7 7 0 001.21 13.95 7.5 7.5 0 007-4.16 8.967 8.967 0 00-.79-.01z"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Sun Icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m8-9h1M4 12H3m15.364-7.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 015 5v0a5 5 0 01-5 5v0a5 5 0 01-5-5v0a5 5 0 015-5z"
            />
          </svg>
        )}
      </div>
    </button>
  );
}
