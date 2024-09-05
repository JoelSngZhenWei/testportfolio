import type { Config } from "tailwindcss";

const config: Config = {
  // Remove or disable dark mode
  darkMode: false, // This will disable dark mode completely

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        highlightRed: "#D10000",
        // Remove any dark mode specific colors
      },
      boxShadow: {
        glowHighlight: "0 0 15px #D10000", // Custom shadow for glow effect
      },
    },
  },
  plugins: [],
};

export default config;
