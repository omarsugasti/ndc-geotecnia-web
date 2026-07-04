import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        earth: {
          50: "#f7f4f0",
          600: "#8a6a4b",
          700: "#6e5339",
        },
        steel: {
          600: "#3c6e8f",
          700: "#2f5670",
        },
      },
    },
  },
  plugins: [],
};

export default config;
