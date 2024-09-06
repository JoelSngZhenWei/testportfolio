"use client";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext"; // Import the custom hook
import Theme from "@/components/Theme"; // Adjust the import path as needed
import NavButton from "@/components/NavButton"; // Adjust the import path as needed

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use the custom hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 shadow transition-colors duration-500">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-highlightRed dark:text-white">
              JOEL SNG
            </span>
          </a>
          <div className="flex items-center">
            <button
              id="menu-toggle"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 md:hidden"
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div
            className={`w-full md:flex md:items-center md:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-black dark:text-gray-400">
              <li>
                <NavButton href="/about" label="About" />
              </li>
              <li>
                <NavButton href="/projects" label="Projects" />
              </li>
              <li>
                <NavButton href="/resume" label="Résumé" />
              </li>
              <li>
                <NavButton href="/contact" label="Contact" />
              </li>
              {/* Dark Mode Switch with Spinning Icon */}
              <li className="mt-2 md:mt-0 md:ml-4">
                <Theme isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
