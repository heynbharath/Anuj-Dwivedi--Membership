/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#05070B", // Obsidian
          900: "#07111F", // Midnight Navy
          800: "#0D1E36",
          700: "#152D50",
          600: "#1F3F6D",
        },
        gold: {
          300: "#E5C66E", // Deep/Bright Gold
          400: "#F0D58A", // Soft Gold
          500: "#D9AA43", // Antique Gold
          600: "#B88628",
          700: "#8C6518",
        },
        ivory: {
          50: "#FAFAF7",
          100: "#F6F2E8", // Warm Ivory
          200: "#EAE3D2",
          300: "#DDD2BC",
        },
        silver: {
          300: "#E2E6EC",
          400: "#C7CDD5", // Silver
          500: "#A3ACB9",
        },
        bronze: {
          400: "#C58B5C",
          500: "#A96F43", // Bronze
          600: "#8C552D",
          700: "#6B3E1C",
        },
        obsidian: "#101114",
        midnight: "#0B1726",
        warmIvory: "#F6F1E5",
        antiqueGold: "#C9A04A",
        deepGold: "#E5C66E",
        mutedText: "#65615A",
        slate: {
          400: "#8792A3", // Slate
          500: "#637083",
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
