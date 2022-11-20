/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#181818",
        accent: {
          50: "#feeff0",
          100: "#dfd7d7",
          200: "#c3bdbd",
          300: "#a8a3a3",
          400: "#8f898a",
          500: "#756f70",
          600: "#5c5758",
          700: "#433e3f",
          800: "#2a2426",
          900: "#17080e",
        },
      },
    },
  },
  plugins: [],
};
