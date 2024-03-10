/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        halfxl: '1440px'
      },
      colors: {
        primary400: 'hsl(35, 77%, 62%)',
        primary500: 'hsl(5, 85%, 63%)',
        
        neutral100: 'hsl(36, 100%, 99%)',
        neutral200: 'hsl(233, 8%, 79%)',
        neutral500: 'hsl(236, 13%, 42%)',
        neutral900: 'hsl(240, 100%, 5%)'
      },
      fontFamily: {
        primary: 'Inter'
      },
      letterSpacing: {
        widestReal: '.2em'
      }
    },
  },
  plugins: [],
}

