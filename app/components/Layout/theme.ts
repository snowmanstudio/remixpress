import { createTheme } from "@mui/material/styles";
import { red, teal } from "@mui/material/colors";
import ApercuRegularWoff from "~/resources/fonts/apercu_regular-webfont.woff";
import ApercuRegularWoff2 from "~/resources/fonts/apercu_regular-webfont.woff2";
import ApercuBoldWoff from "~/resources/fonts/apercu_bold-webfont.woff";
import ApercuBoldWoff2 from "~/resources/fonts/apercu_bold-webfont.woff2";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "apercu, Arial",
    body1: {
      fontSize: "1.0625rem",
      lineHeight: "1.7",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
                font-family: 'apercu';
                src: url(${ApercuRegularWoff2}) format('woff2'),
                    url(${ApercuRegularWoff}) format('woff');
                font-weight: light;
                font-style: normal; 
            },
            @font-face {
              font-family: 'apercu';
              src: url(${ApercuBoldWoff2}) format('woff2'),
                   url(${ApercuBoldWoff}) format('woff');
              font-weight: bold;
              font-style: bold;
          }
          `,
    },
  },
  palette: {
    primary: {
      main: "#660644",
    },
    secondary: {
      main: "#ff0067",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
