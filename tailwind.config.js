/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crimsonProRegular: ["CrimsonPro-regular"],
        crimsonProSemi: ["CrimsonPro-semibold"],
        firaSansRegular: ["FiraSans-regular"],
        firaSansSemi: ["FiraSans-semibold"],
        fira: ['Fira Sans', 'sans-serif'],
        crimson: ['Crimson Pro', 'serif'],
      },
      colors: {
        customGray: '#282B26',
      },
    },
  },
  plugins: [],
}

