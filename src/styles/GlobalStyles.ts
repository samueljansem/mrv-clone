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
    border: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
    background: var(--color-background);
    overflow-x: hidden;
    overflow-y: overlay;
    scroll-behavior: smooth;
  }


  ::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;

  }

  ::-webkit-scrollbar-button {
      display: none;
      width: 0;
      height: 0;
  }

  ::-webkit-scrollbar-corner {
      background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
      background-color: var(--color-search);
      border-radius: 10px;
  }

  :root {
    --color-search: #006b3f;
    --color-lightgreen: #00d38d;
    --color-card-detail: #079d56;
    --color-orange: #ff8b22;
    --color-lightorange: #ffb719;
    --color-background: #f5f5f5;
    --color-link: #0073b1;
    --color-white: #fff;
    --color-lightgray: #d3d3d3;
    --color-gray: #5d615f;
    --color-black: #000000;
    --color-lightblack: #242625;
    --color-yellow: #ffb719;
  }
`;
