module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary-cyan': 'hsl(180, 66%, 49%)',
        'primary-dark-violet': 'hsl(257, 27%, 26%)',
        'secondary-red': 'hsl(0, 87%, 67%)',
        'neutral-gray': 'hsl(0, 0%, 75%)',
        'neutral-gray-violet': 'hsl(257, 7%, 63%)',
        'neutral-dark-blue': 'hsl(255, 11%, 22%)',
        'neutral-dark-violet': 'hsl(260, 8%, 14%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
