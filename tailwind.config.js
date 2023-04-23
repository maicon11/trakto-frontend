/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      'brand-green': '#1DC763',
      'brand-blue': '#0095FF',
      'brand-violet': '#4743FF',
      'brand-red': '#FF0100',
      'brand-light': '#66BFFF',
      'neutral-light': '#E4EBFB',
      'neutra-clear': '#D0DAEF',
      'neutral-cloudy': '#7183A6',
      'neutral-dark': '#354564',
      'neutral-darkest': '#04183E',
      'light1': '#EFF2F9',
      'light2': '#F5F5F5',
      'dark1': '#1D1B1B',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'sans': ['roboto', 'sans-serif'],
      'serif': ['poppins', 'serif'],
    }
  },
  plugins: [],
}

