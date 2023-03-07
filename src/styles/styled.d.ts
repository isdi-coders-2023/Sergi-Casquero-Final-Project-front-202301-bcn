import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      errorColor: string;
      backgroundColor: string;
      inactiveColor: string;
    };

    fontFamilies: {
      mainFontFamily: string;
    };

    fontSizes: {
      mainFontSize: string;
      biggerFontSize: string;
      biggestFontSize: string;
      bigTitleFontSize: string;
    };

    sizes: {
      mobileWidth: string;
      desktopBreakpoint: string;
      inputHeight: string;
    };

    distances: {
      inputLeftPadding: string;
    };
  }
}
