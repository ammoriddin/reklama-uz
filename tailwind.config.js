/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/filter-rols/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/company-ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/manager-ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/system-components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14002E',
        black: '#322C39',
        purple: '#7000FF',
        borderColor: '#EEEEEE',
        navbarBackground: '#F5F5F5',
        lightPurple: '#F8F2FF',
        hrColor: '#EFEFEF',
        secondary: '#121212',
        red: '#F00F00',
        secondaryGray: '#F6F5F7',
        darkPurple: '#DCD8E0',
        darkGray: '#EFEEF1',
        yellow: "#F4761A",
      },
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
      },
      screens: {
        'laptop': '1441px'
      }
    },
  },
  plugins: [],
};
