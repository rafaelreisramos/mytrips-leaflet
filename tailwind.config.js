/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e20e8d',
        background: '#030518',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
