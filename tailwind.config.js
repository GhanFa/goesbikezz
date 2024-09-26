const { Rajdhani } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
      "2xl": "1536px",
    },
    fontFamily: {
      Rajdhani: "var(--font-rajdhani)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222222",
          hover: "#2f2f2f",
        },
        accent: {
          DEFAULT: "#ed1d24",
          hover: "#d6001c",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
