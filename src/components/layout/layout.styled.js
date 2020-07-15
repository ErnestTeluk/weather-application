import styled, { createGlobalStyle } from "styled-components";

import MontserratRegularWoff2 from "assets/fonts/Montserrat-Regular.woff2";
import MontserratRegularWoff from "assets/fonts/Montserrat-Regular.woff";
import MontserratBoldWoff2 from "assets/fonts/Montserrat-Bold.woff2";
import MontserratBoldWoff from "assets/fonts/Montserrat-Bold.woff";

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Montserrat";
        src: local('Montserrat'), local('Montserrat'),
        url(${MontserratRegularWoff2}) format('woff2'),
        url(${MontserratRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: local('Montserrat'), local('Montserrat'),
        url(${MontserratBoldWoff2}) format('woff2'),
        url(${MontserratBoldWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }


    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        line-height: 1.15;
    }
`;

export const SiteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  ${({ theme }) => theme.mq.tablet} {
    height: 100vh;
  }
`;
