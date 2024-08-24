/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#F5F5F5',
        dark: '#181818',

      }
    },
  },
  plugins: [],
}