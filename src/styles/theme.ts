import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primaryColor: "#d0fd3e",
    secondaryColor: "#fff ",
    errorColor: "#ff0000",
    backgroundColor: "#1c1c1e",
    inactiveColor: "#505050",
  },

  fontFamilies: {
    mainFontFamily: "roboto, sans serif",
  },

  fontSizes: {
    mainFontSize: "1rem",
    biggerFontSize: "1.125rem",
    biggestFontSize: "1.25rem",
    bigTitleFontSize: "2rem",
  },

  sizes: {
    mobileWidth: "320px",
    desktopBreakpoint: "900px",
    inputHeight: "60px",
  },

  distances: {
    inputLeftPadding: "16px",
  },
};

export default theme;
