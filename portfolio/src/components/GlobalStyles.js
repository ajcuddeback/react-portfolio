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
    .red-border {
        border-right: 1px solid blue;
    }

    .title-flex {
        display: flex;
        justify-content: center;
    }

    .main-titles {
        font-size: 3rem;
        width: 20%;
        text-align: center;
        margin-top: 150px;
        margin-bottom: 20px;
        border-bottom: 1px solid blue;
}
`


export default GlobalStyle;