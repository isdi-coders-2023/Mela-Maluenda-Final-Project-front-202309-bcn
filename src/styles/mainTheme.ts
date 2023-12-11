import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    error: "#7c1404",
    light: "#f3eedd",
    lighter: "#f5f5f5",
    accentLight: "#fcd35a",
    accentDark: "#465e4f",
    backgroundLight: "#688086",
    backgroundLightOpacity: "#68808630",
    backgroundDark: "#384045",
    backgroundDarkOpacity: "#384045cc",
    mainText: "#213327",
    input: "#d9d9d9",
  },
  typography: {
    mainFontFamily: "'Playfair Display', serif",
    regularFontFamily: "'Nunito Sans', sans-serif",
    superSize: "2rem",
    superMainSize: "1.5rem",
    mainSize: "1.375rem",
    titleSuperSize: "1.6rem",
    titleSize: "1.25rem",
    secondaryTitleSize: "1.125rem",
    regularSize: "1rem",
  },
};

export default mainTheme;
