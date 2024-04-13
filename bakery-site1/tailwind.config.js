/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
  'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        primary: {
          100: '#ffffff',
          200: '#BFC0C0',
          400: '#61cf89',
          500: '#4F5D75',
          600: '#EF8354',
          700: '#2D3142',
        }
        
      },
      fontFamily: {
        primary: 'Rubik',
        cursive: 'Dancing Script'
      },
      keyframes: {
        "slideIn": {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      
        "slideOut": {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },

        "arrow": {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(10px)',

          },
          '100%': {
            transform: 'translateY(0)',
          }
        }
      },
      
      animation: {
        "slideIn": "slideIn 0.5s ease-out",
        "slideOut": "slideOut 0.5s ease-out",
        "arrowAnimate": "arrow 1.3s ease-in infinite",
      },


    },
    
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
}