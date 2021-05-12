module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#471F3C",
        },
        yellow:{
          DEFAULT : '#DC9E25',
          light : '#E5B350'
        },
        orange : {
          DEFAULT : '#DA6D0D'
        },
        pink : {
          DEFAULT : '#F4D1A7'
        },
        gray : {
          DEFAULT : '#E5DDC5'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
