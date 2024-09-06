'use client';

import { useState } from 'react';

interface ThemeProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Theme({ isDarkMode, toggleDarkMode }: ThemeProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDarkModeToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      toggleDarkMode();
    }, 250);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <button
      onClick={handleDarkModeToggle}
      className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      <div
        className={`transition-transform duration-500 ${
          isAnimating ? 'animate-spin' : ''
        }`}
      >
        {isDarkMode ? (
          <svg
            className="w-6 h-6 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12.79A9 9 0 1112.79 3a7 7 0 001.21 13.95 7.5 7.5 0 007-4.16 8.967 8.967 0 00-.79-.01z"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
