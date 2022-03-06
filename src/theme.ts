import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: 60,
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#f9004d",
      dark: "#d90043",
    },
  },
});
