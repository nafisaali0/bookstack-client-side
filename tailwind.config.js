/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontFamily: {
    //   playfair: ["Playfair Display", "serif"],
    // },
    // colors: {
    //   teal: "#2b6777",
    // },
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
    extend: {},
  },
  plugins: [daisyui],
};
