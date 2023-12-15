/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  content: ["./src/components/*.{js, jsx}"],
  theme: {
    extend: {
      colors:{
        'primary' : '#007FF4',
        'primaryText' : '#0073FF',
        'orangeText' :'#FF9F6A',
        'backgroundHome' : ' #f8fdff',
        'backgroundBox' : ' #EBEEFF',

      },
      screens:{
        'xs': {'min':'300px', 'max':'639px'},

      },
    },
  },
  plugins: [],
}

