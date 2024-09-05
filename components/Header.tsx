"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname(); 

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a link is active
  const isActive = (href: string) => pathname === href;

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-highlightRed">
              JOEL SNG
            </span>
          </a>
          <div className="flex items-center">
            {/* Mobile Menu Toggle Button */}
            <button
              id="menu-toggle"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
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
            className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? "" : "hidden"}`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-black">
              <li>
                <a href="/about" className={`block py-2 pr-4 pl-3 ... ${isActive("/about") ? "text-highlightRed" : ""}`}>
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className={`block py-2 pr-4 pl-3 ... ${isActive("/projects") ? "text-highlightRed" : ""}`}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/resume" className={`block py-2 pr-4 pl-3 ... ${isActive("/resume") ? "text-highlightRed" : ""}`}>
                  Résumé
                </a>
              </li>
              <li>
                <a href="/contact" className={`block py-2 pr-4 pl-3 ... ${isActive("/contact") ? "text-highlightRed" : ""}`}>
                  Contact
                </a>
              </li>
              {/* Dark Mode Switch */}
              <li className="mt-2 md:mt-0 md:ml-4">
                <button
                  onClick={handleDarkModeToggle}
                  className="flex items-center p-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  {isDarkMode ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8-9h1M4 12H3m15.364-7.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 015 5v0a5 5 0 01-5 5v0a5 5 0 01-5-5v0a5 5 0 015-5z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1112.79 3a7 7 0 001.21 13.95 7.5 7.5 0 007-4.16 8.967 8.967 0 00-.79-.01z" />
                    </svg>
                  )}
                  <span className="sr-only">Toggle dark mode</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
