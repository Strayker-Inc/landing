module.exports = {

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: "#3FB0B0",
        ligth: "#36D28F",
      },
      dark: {
        DEFAULT: "#2B2F34"
      }
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#36d28e',
          hover : '#059669'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // import tailwind forms
 ],
}
