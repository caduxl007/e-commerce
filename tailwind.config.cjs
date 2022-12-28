/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Saira, sans-serif'
      },
      colors: {
        white: '#ffffff',
        black: '#09090A',

        blue: {
          700: '#115D8C',
          800: '#123952',
        },
        orange: {
          400: '#FFA585',
        },
        green: {
          100: '#DCF5DD',
          400: '#51B853'
        },
        red: {
          500: '#DE3838',
        },
        gray: {
          100: '#F5F5FA',
          200: '#F5F8FA',
          300: '#DCE2E5',
          400: '#F3F5F6',
          500: '#DEDEDE',
          600: '#E9E9F0',
          700: '#737380',
          800: '#617480',
        }
      }
    },
  },
  plugins: [],
}
