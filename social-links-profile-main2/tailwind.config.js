/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        halfxl: '1440px'
      },
      colors: {
        primaryGreen: 'hsl(75, 94%, 57%)',

        neutral100: ' hsl(0, 0%, 100%)',
        neutral600: 'hsl(0, 0%, 20%)',
        neutral700: 'hsl(0, 0%, 12%)',
        neutral800: 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        primary: 'Inter'
      },
      fontWeight: {
        bold600: 600,
        bold700: 700
      },
      width: {
        '9/10': '90%'
      }
    },
  },
  plugins: [],
}

