/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Saira, sans-serif'
      },
      colors: {
        white: '#fffff',

        blue: {
          700: '#115D8C',
          800: '#123952',
        },
        green: {
          100: '#DCF5DD',
          400: '#51B853'
        },
        red: {
          500: '#DE3838',
        },
        gray: {
          200: '#F5F8FA',
          600: '#A0ACB3',
          500: '#DEDEDE',
          700: '#737380',
          800: '#617480',
        }
      }
    },
  },
  plugins: [],
}
