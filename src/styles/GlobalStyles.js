import { createGlobalStyle } from 'styled-components';

import AvertaBoldWoff from '../assets/fonts/AvertaStd-Bold.woff';
import AvertaBoldWoff2 from '../assets/fonts/AvertaStd-Bold.woff2';

import AvertaRegularWoff from '../assets/fonts/AvertaStd-Regular.woff';
import AvertaRegularWoff2 from '../assets/fonts/AvertaStd-Regular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'averta-regular';
    src: local('averta-regular'), url(${AvertaRegularWoff}) format('woff'), url(${AvertaRegularWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'averta-bold';
    src: local('averta-bold'), url(${AvertaBoldWoff}) format('woff'), url(${AvertaBoldWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden;
  }


  *, button, input {
    font-family: 'averta-regular';
  }

  :root {
    --color-search: #006b3f;
    --color-lightgreen: #00d38d;
    --color-orange: #ff9d1e;
    --color-background: #f5f5f5;
    --color-link: #0073b1;
    --color-white: #fff;
    --color-lightgray: #d3d3d3;
    --color-black: #000000;
    --color-lightblack: #242625;
  }
`;
