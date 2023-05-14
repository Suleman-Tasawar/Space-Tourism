/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontFamily:{
        barlow:['Barlow', 'sans-serif']
      },
      colors:{
        NearDarkGrey:'#979797',
        homeTextGrey:"#D0D6F9"
      }
    },
  },
  plugins: [],
}

