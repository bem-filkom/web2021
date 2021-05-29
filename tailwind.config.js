const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        "88" : "22rem"
      },
      colors: {
        purple: {
          DEFAULT: "#471F3C",
        },
        yellow: {
          DEFAULT: "#DC9E25",
          light: "#E5B350",
        },
        orange: {
          DEFAULT: "#DA6D0D",
          light : '#E5B350'
        },
        pink: {
          DEFAULT: "#F4D1A7",
          light: "#F4EEE0",
        },
        gray: {
          DEFAULT: "#E5DDC5",
        },
      },
    },
    screens: {
      'xs': '576px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
