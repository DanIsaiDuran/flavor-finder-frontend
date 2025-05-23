const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#f2b272',
          700: '#F48E28',
          900: '#e87a0c'
        }, 
        secondary: '#B43F3F',
        textBackground: '#F0EBE1',
        cardColor: {
          700: '#f7ead7',
          900: '#efd4ad'
        }
      },
    },
  },
  plugins: [flowbiteReact],
}