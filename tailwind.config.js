/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#d1a054",
      },
      fontFamily: {
        inter: ["Inter", "serif"],
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [daisyui],
};
