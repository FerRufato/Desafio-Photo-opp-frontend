import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    background-color: #ffffff;
    color: #000000;
    font-family: 'Inter', sans-serif;
  }

  button {
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    background: none;
  }
`;

export default GlobalStyle;
