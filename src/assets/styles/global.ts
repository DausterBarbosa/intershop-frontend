import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Arial, helvetica, sans-serif;
        background: #f5f6fa;
    }
`;

export default GlobalStyle;