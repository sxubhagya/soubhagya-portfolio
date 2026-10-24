/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0562ef',
          dark: '#01081d',
          navy: '#042d62',
          ice: '#bfe4f9',
          sky: '#98dcff',
        }
      },
      fontFamily: {
        banto: ['Banto', 'BantoTrial-Medium', 'sans-serif'],
        helvetica: ['"Helvetica Now Display"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
