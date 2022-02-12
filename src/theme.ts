import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: 64,
      lineHeight: "76.8px",
      fontWeight: 700,
    },
    h2: {
      fontSize: 48,
      lineHeight: "72px",
      fontWeight: 700,
      fontFamily: "Playfair Display, serif",
    },
    h3: {
      fontSize: 40,
      lineHeight: "60px",
      fontWeight: 700,
      fontFamily: "Playfair Display, serif",
    },
    h6: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "27.28px",
      fontFamily: "Nunito, sans-serif",
    },
    body1: {
      fontSize: 24,
      lineHeight: "36px",
      fontWeight: 400,
      fontFamily: "Nunito, sans-serif",
    },
    body2: {
      fontSize: 18,
      lineHeight: "27px",
      fontWeight: 400,
      fontFamily: "Nunito, sans-serif",
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: "27px",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 16,
      lineHeight: "21.82px",
      fontWeight: 600,
      fontFamily: "Nunito, sans-serif",
    },
    caption: {
      fontSize: 16,
      lineHeight: "21.82px",
      fontWeight: 400,
      fontFamily: "Nunito, sans-serif",
    },
  },
  palette: {
    primary: {
      main: "#25282B",
    },
    secondary: {
      main: "#FDC435",
    },
    text: {
      primary: "#828282",
      secondary: "#333",
    },
  },
});
