/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
      './src/components/**/**/*.{ts,tsx}',
      './src/components/**/*.{ts,tsx}',
      './src/examples/**/*.{ts,tsx}',
      './src/examples/*.{ts,tsx}',
      './src/views/**/**/*.{ts,tsx}',
      './src/views/**/*.{ts,tsx}',
      './src/*.{ts,tsx}'
  ],
  theme: {
    extend: {
        colors: {
          'primary': '#121316',
          'secondary': '#27282d',
          'third': '#787878',
          'fourth': '#545454'
        }
    },
  },
}
