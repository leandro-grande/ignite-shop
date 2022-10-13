import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.color_gray900};
    color: ${props => props.theme.color_gray100};
    -webkit-font-smothing: antialiased;
  }

  body, input, textarea, button {
    font-family: Roboto;
    font-weight:400;    
  }

`;