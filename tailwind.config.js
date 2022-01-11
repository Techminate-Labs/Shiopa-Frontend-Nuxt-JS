module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
        xl: '4rem',
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px"
      }
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
  }
}
