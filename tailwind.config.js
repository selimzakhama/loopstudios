/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}','./*.html'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '800px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily:{
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata']
      },
      letterSpacing:{
        widest: '0.5em',
      }
    },
  },
  plugins: [],
}

