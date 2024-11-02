/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        source: ['var(--font-source)', ...fontFamily.sans]
      },
      colors: {
        gold: "#e9b44b",
        offWhite: "#f3f4f6",
        offBlack:"#0a0a0a",
        brown: "#1d130d"
      }
    },
    screens:{
      "2xl": {max:"1535px"},
      // => @media(max-width: 1535px)

      xl:{max:"1279px"},
      // => @media(max-width: 1279px)

      lg:{max:"1023px"},
      // => @media(max-width: 1023px)

      md:{max:"767px"},
      // => @media(max-width: 767px)

      sm:{max:"639px"},
      // => @media(max-width: 639px)

      xs:{max:"479px"},
      // => @media(max-width: 479px)
    }
  },
  plugins: [],
};
