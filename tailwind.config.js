/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#cc79a7',
        background: '#030518',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
