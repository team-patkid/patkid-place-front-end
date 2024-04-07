import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    blue: "blue",
    white: "#ffffff",
    black: "#000000",
    pink: "#ff448d",
    gray50: "#fafafa",
    gray100: "#f5f5f5",
    gray200: "#f0f0f0",
    gray300: "#ebebeb",
    gray400: "#dcdcdc",
    gray500: "#aaaaaa",
    gray600: "#8c8c8c",
    gray700: "#555555",
    gray800: "#323232",
    gray900: "#1e1e1e",
    purple: "#722ED1",
    plum: "#D91AD9",
  },
});
