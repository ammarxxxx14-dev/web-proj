/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        accent: '#e63946',
        'accent-glow': '#ff4d5a',
        'accent-2': '#7b5cff',
        'accent-3': '#00d4aa',
      },
    },
  },
  plugins: [],
}
