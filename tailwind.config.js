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
        'backgroundHome' : '#F8FDFF',
        'backgroundBox' : ' #EBEEFF',
        'backgroundCart' : '#AED3E2',
         'backgroundFooter': '#ECF4FF',

      },
      screens:{
        'xs': {'min':'300px', 'max':'639px'},

      },
    },
  },
  plugins: [],
}

