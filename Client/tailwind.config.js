import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#a0e870",
        secondary:"#143400",
      },
      fontFamily:{
        popies:"Poppins, serif",
      },
      keyframes:{
        "infinite-scroll":{
          "0%":{transform: "translateX(0)"},
          "100%":{transform: "translateX(calc(-50% - 1px))"}
        }
      },
      animation:{
        "infinite-scroll": "infinite-scroll 20s linear infinite"
      },
      
    },

  },
  plugins: [],
}