import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
  }

  :root {
    --color-search: #006b3f;
    --color-lightgreen: #00d38d;
    --color-orange: #ff9d1e;
    --color-background: #f5f5f5;
    --color-link: #0073b1;
    --color-white: #fff;
    --color-lightgray: #d3d3d3;
  }
`;
