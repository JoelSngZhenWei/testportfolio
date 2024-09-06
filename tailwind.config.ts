import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        highlightRed: "#D10000", // Custom color for highlighting elements
      },
      boxShadow: {
        glowHighlight: "0 0 15px #D10000", // Custom shadow for glow effect
      },
    },
  },
  plugins: [],
};

export default config;
