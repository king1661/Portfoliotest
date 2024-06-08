/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.5)', // Customize this as needed
      },
    },
  },
  plugins: [],
}