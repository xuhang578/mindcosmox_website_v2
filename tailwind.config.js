/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef5ef",
          100: "#d9e8db",
          300: "#8fb79b",
          500: "#4f7d60",
          700: "#2d533c",
          900: "#183326"
        },
        mist: {
          50: "#f7f9f8",
          100: "#edf2ef",
          200: "#dbe6e6",
          300: "#b9cbd1",
          500: "#7896a2"
        },
        linen: "#f5f0e8",
        cloud: "#fbfaf7"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        song: [
          "Noto Serif SC",
          "Songti SC",
          "STSong",
          "serif"
        ]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(24, 51, 38, 0.10)",
        line: "inset 0 0 0 1px rgba(45, 83, 60, 0.09)"
      }
    }
  },
  plugins: []
};
