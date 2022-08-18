/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        subtext: "#93ADB7",
        accent: "#8BCFCB",
      },
    },
  },
  plugins: [],
};
