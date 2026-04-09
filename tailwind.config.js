/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "backgrround": "#0a0a0a",
        "surface": "#111111",
        "surface2": "#1a1a1a",
        "accent": "#00ff99",
        "text": "#f0f0f0",
        "muted": "#888888",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

