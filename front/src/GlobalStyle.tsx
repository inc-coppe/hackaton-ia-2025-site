import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* Prevent horizontal scrolling */
    user-drag: none;
    user-select: none;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    background-color: #FFFFFF; /* Example background color */
    user-drag: none;
    user-select: none;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    user-drag: none;
    user-select: none;
  }
`;
