/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryRed: 'hsl(1, 90%, 64%)',
        primaryBlue: 'hsl(219, 85%, 26%)',

        neutral100: 'hsl(0, 0%, 100%)',
        neutral200: 'hsl(210, 60%, 98%)',
        neutral301: 'hsl(211, 68%, 94%)',
        neutral302: 'hsl(205, 33%, 90%)',
        neutral500: 'hsl(219, 14%, 63%)',
        neutral600: 'hsl(219, 12%, 42%)',
        neutral900: 'hsl(224, 21%, 14%)',
      },

      fontFamily: {
        primary: "Plus Jakarta Sans"
      },

      fontWeight: {
        bold500: 500,
        bold800: 800
      },
      screens: {
        halfxl: '1440px'
      },
      maxWidth: {
        '2.51xl': '46rem'
      }
    },
  },
  plugins: [],
}

