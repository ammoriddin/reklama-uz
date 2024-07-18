/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
