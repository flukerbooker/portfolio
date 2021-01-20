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
    }

    body {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: black;
        box-sizing: border-box;
        background: linear-gradient(#ade8f4, #9198e5);
    }
`