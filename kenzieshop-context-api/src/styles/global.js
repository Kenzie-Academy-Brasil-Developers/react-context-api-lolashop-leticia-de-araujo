import { createGlobalStyle } from "styled-components";
import { createTheme } from "@mui/material/styles";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
        
    }

    body {
      margin: 0;
      padding: 0;
    }

`;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fe6d73",
    },
    secondary: {
      main: "#f5f5f5",
      // #424242
    },
  },
});

export default GlobalStyle;
