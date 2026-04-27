import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0588309b",
      light: "#5A9C57",
      dark: "#144926d2",
      contrastText: "#302f2f",
    },
    secondary: {
      main: "#C5C5C5",
      light: "#efecec",
      dark: "#6b6b6b",
      contrastText: "#393838",
    },
    success: {
      main: "#49ba6f",
    },
    error: {
      main: "rgb(167, 52, 52)",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    h1: {
      fontSize: "5rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1rem",
      fontFamily: "Raleway, sans-serif",
    },
    button: {
      fontSize: "1.2rem",
    },
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1rem",
    },
    caption: {
      fontSize: "1rem",
      fontFamily: "Raleway, sans-serif",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: ".8rem",
      fontFamily: "Raleway, sans-serif",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 10,
  },
  spacing: 8,
});
