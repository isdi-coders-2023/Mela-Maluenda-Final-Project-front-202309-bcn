import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      error: string;
      lighter: string;
      accentLight: string;
      accentDark: string;
      backgroundLight: string;
      backgroundDark: string;
      mainText: string;
    };
    typography: {
      mainFontFamily: string;
      regularFontFamily: string;
      mainSize: string;
      titleSize: string;
      secondaryTitleSize: string;
      regularSize: string;
    };
  }
}
