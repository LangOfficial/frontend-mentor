/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(0, 0%, 100%)',
          100: 'hsl(275, 100%, 97%)',
          600: 'hsl(292, 16%, 49%)',
          900: 'hsl(292, 42%, 14%)',
        },
      },
      screens: {
        'xs': '320px',
        '2xl': '1440px'
      },
      fontFamily: {
        primary: 'Work Sans',
      },
    },
  },
  plugins: [],
}