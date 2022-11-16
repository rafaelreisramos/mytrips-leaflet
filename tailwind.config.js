/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: 'var(--container)',
      },
      margin: {
        small: 'var(--small)',
        medium: 'var(--medium)',
        large: 'var(--large)',
      },
      colors: {
        white: 'var(--white)',
        highlight: 'var(--highlight)',
        background: 'var(--background)',
      },
      fontSize: {
        sm: 'var(--small)',
        md: 'var(--medium)',
        lg: 'var(--large)',
      },
      lineHeight: {
        sm: 'var(--small)',
        md: 'var(--medium)',
        lg: 'var(--large)',
      },
    },
  },
  plugins: [],
}
