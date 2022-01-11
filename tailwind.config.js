module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2.5rem',
        md: '3rem',
        lg: '3.5rem',
        xl: '5rem',
      },
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {
      colors:{
        primary: "#042235",
        secondary: "#042235",
        footerclr: "#042235",
        footerclr2: "#071F2E",
      },
      fontFamily: {
        serif: ['Quando'],
        body: ['Roboto'],
      },
      fontSize: {
        titlexl: ['2.986em'],
        titlelg: ['2.074em'],
        titlemd: ['1.728em'],
        subtitle: ['1.2em'],
        intxt: ['1em'],
        intable: ['0.833em'],
        inbtn: ['1.2em'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
