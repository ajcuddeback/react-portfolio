import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle `
    

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden !important;
    }

    :root {
        --background: rgb(3,0,0);
        --silver: #c5c6c7;
        --neon-blue: #43d3fe;
    }

    body {
        background-color: var(--background);
        color: var(--neon-blue);
    }
    
    a {
        text-decoration: none;
        color: #43d3fe;
    }
`


export default GlobalStyle;