/** @type {import('tailwindcss').Config} */

const palette = {
  poe: {
    text: "#a38d6d",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ...palette },
      backgroundImage: {
        poe: "url('/src/assets/poe-bg.jpg')",
      },
    },
  },
  plugins: [],
};
