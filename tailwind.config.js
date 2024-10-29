/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#F48E28',
          900: '#e87a0c'
        }, // Azul oscuro, puedes cambiarlo
        secondary: '#B43F3F', // Verde, puedes cambiarlo
      },
    },
  },
  plugins: [],
}

