import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html{
        font-size: 62.5%;
        box-sizing: border-box !important;
    }

    body {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: black;
        background: linear-gradient(#ade8f4, #9198e5);
        height: 100vh;
        background-repeat: no-repeat;
    }
`