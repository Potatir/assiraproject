/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        card: '#1C1C1E',
        cardHover: '#2C2C2E',
        neonCoral: '#FF2D55',
        electricBlue: '#007AFF',
        electricBlueLight: '#32ADE6',
        mintGreen: '#00C7BE',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
