/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#9b0016", dark: "#7d0012", card: "#7f2a2c" },
        gold: { DEFAULT: "#fdbb0a", dark: "#e5a800" },
        ink: "#1b2a3a",
        cream: "#fffaf0",
        footer: "#770614",
        footerBg: "#770614",
        footerIcon: "#a50f23",
        help: { DEFAULT: "#f26a1b", dark: "#d95a10" },
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        head: ["Philosopher", "serif"],
        serif: ["Cardo", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
