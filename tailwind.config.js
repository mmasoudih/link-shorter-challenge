module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors:{
        'primary-cyan': 'hsl(180, 66%, 49%)',
        'primary-cyan-light': '#9be3e2',
        'primary-dark-violet': 'hsl(257, 27%, 26%)',
        'secondary-red': 'hsl(0, 87%, 67%)',
        'neutral-gray': 'hsl(0, 0%, 75%)',
        'neutral-gray-violet': 'hsl(257, 7%, 63%)',
        'neutral-dark-blue': 'hsl(255, 11%, 22%)',
        'neutral-dark-violet': 'hsl(260, 8%, 14%)',
        'neutral-light-violet': '#544a6d',
        'neutral-light-gray': 'hsl(230, 25%, 95%)'
      },
      backgroundImage: theme => ({
        'shorten-box-desktop-pattern': 'url(/bg-shorten-desktop.svg)',
        'shorten-box-mobile-pattern': 'url(/bg-shorten-mobile.svg)',
        'boost-link-desktop-pattern': 'url(/bg-boost-desktop.svg)',
        'boost-link-mobile-pattern': 'url(/bg-boost-mobile.svg)',
        

      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
