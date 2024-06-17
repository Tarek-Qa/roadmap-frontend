// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #f5f5f5;
    color: #333;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
