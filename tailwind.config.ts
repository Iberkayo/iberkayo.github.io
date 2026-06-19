import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07090d",
        panel: "#0d1118",
        line: "#202631",
        muted: "#9aa4b2",
        lime: "#b8f25c",
        cyan: "#71d7ff",
        violet: "#a78bfa"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(184, 242, 92, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
