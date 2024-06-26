import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#e50914",
  pointRGB: "#e5091494",
};

export const GlobalPadding = {
  padding_640: "50px",
  padding_450: "20px",
};

export const VideoSize = {
  Vwidth: "950px",
  Vheight: "500px",
  Mwidth: "580px",
  Mheight: "350px",
  Swidth: "400px",
  Sheight: "350px",
};

export const GlobalStyled = createGlobalStyle`

    ${reset}

    *{
        box-sizing:border-box;
    }

    body{
        font-family: "Noto Sans KR", sans-serif;
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
