import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-sora)", "sans-serif"],
      },
      colors: {
        ink: "#1b1713",
        paper: {
          DEFAULT: "#f3efe5",
          dark: "#ece2d3",
        },
        accent: {
          DEFAULT: "#8a4b2b", // Earthy red
          teal: "#2f5f5d",    // Scientific teal
          gold: "#c79a5b",    // Academic gold
        },
        mist: "rgba(255, 255, 255, 0.8)",
      },
      animation: {
        "fade-in": "fade 0.5s ease-out forwards",
        "rise": "rise 0.8s ease-out forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Essential for blog content
  ],
};
export default config;