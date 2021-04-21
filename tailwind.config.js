module.exports = {
  purge: [
    './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#BC4141',
        secondary: '#CA9893',
        base: '#A7A4A4'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
