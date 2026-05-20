import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This maps 'font-sans' to our Next.js loaded Roboto font variable
        sans: ["var(--font-roboto)", "sans-serif"],
      },
      colors: {
        cookie: {
          teal: "#16B595",
          pink: "#F7C3C7",
          dark: "#282828",
        },
      },
    },
  },
  plugins: [],
};
export default config;