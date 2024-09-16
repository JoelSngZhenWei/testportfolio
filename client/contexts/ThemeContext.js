"use client"; // Mark as client-side

import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(
    () => typeof window !== "undefined" && localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    // Apply the dark mode class to the document element based on the saved preference
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save the new mode to local storage
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create a custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
