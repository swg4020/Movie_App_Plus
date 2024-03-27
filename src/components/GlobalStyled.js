import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`

    ${reset}

    *{
        box-sizing:border-box;
    }

    body{
        background-color: #1d1d1d;
        color: white;
        letter-spacing: -1px;
    }

    a{
        text-decoration: none;
        color: white;
    }

    img{
        width: 100%;
        display: block;
    }

`;
