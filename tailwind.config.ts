import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        highlightRed: "#D10000",
        // Define your dark mode colors here
        darkBackground: "#1a1a1a", // Example dark background color
        darkText: "#f0f0f0", // Example dark text color
        darkHighlight: "#FF4500", // Dark mode highlight color
      },
      boxShadow: {
        glowHighlight: "0 0 15px #D10000", // Custom shadow for glow effect in light mode
        darkGlowHighlight: "0 0 15px #FF4500", // Custom shadow for glow effect in dark mode
      },
    },
  },
  darkMode: "media", // Enables dark mode based on user's system preference
  plugins: [],
};

export default config;
