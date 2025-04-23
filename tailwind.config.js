/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', 'serif'],
      },
      fontSize: {
        base: '15px',
      },
      lineHeight: {
        normal: '24px',
      },
      fontWeight: {
        normal: '400',
      },
      colors: {
        black: '#000',
      },
    },
  },
  plugins: [],
}
