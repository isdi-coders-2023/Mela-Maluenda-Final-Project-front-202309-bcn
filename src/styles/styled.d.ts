import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      error: string;
      light: string;
      lighter: string;
      accentLight: string;
      accentDark: string;
      backgroundLight: string;
      backgroundDark: string;
      backgroundDarkOpacity: string;
      mainText: string;
      input: string;
    };
    typography: {
      mainFontFamily: string;
      regularFontFamily: string;
      superMainSize: string;
      mainSize: string;
      titleSuperSize: string;
      titleSize: string;
      secondaryTitleSize: string;
      regularSize: string;
    };
  }
}
