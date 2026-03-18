import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#090d1f",
        accent: "#22d3ee",
        accentSoft: "#0f172a",
        danger: "#fb7185"
      }
    }
  },
  plugins: []
};

export default config;

