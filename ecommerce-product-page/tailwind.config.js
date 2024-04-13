/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: {
          100: 'hsl(25, 100%, 94%)',
          600: 'hsl(26, 100%, 55%)',
        },
        neutralCustom: {
          50: 'hsl(0, 0%, 100%)',
          100: 'hsl(223, 64%, 98%)',
          300: 'hsl(220, 14%, 75%)',
          600: 'hsl(219, 9%, 45%)',
          800: 'hsl(220, 13%, 13%)',
          900: 'hsl(0, 0%, 0%)'
        }
      },
      screens: {
        halfxl: '1440px',
      },
      fontFamily: {
        primary: 'Kumbh Sans',
      },

      keyframes: {
        "slideIn": {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      
        "slideOut": {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
         },
      },
      
      animation: {
        "slideIn": "slideIn 0.5s ease-out",
        "slideOut": "slideOut 0.5s ease-out",
      },
    },
  },
  plugins: [],
}