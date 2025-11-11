/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F5EF',
        brown: '#7C5E5E',
        green: '#2F4F4F',
      },
    },
  },
  plugins: [],
}
