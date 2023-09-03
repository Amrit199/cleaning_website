/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#009EE2',
        darkblue: '#006BAA',
        green: '#00AE83',
        skyblue: '#D1F5FF',
        
      }
    },
  },
  plugins: [],
}
