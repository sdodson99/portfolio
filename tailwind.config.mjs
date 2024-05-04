/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#475BA1",
        secondary: "#FFD97A",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
