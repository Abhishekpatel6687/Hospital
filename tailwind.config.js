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
        'h1Color' : '#003B79',
        'pColor' : '#002348',
        'footColor' :'#667C94',

      },
      screens:{
        'xs': {'min':'300px', 'max':'639px'},

      },
    },
  },
  plugins: [],
}

