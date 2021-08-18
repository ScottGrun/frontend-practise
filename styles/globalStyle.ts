import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Props to https://medium.com/geekculture/headless-woocommerce-next-js-set-up-styled-components-with-typescript-and-next-js-18cc047ccd79 for the following 
    border box tips */
 
    /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
  html {
    box-sizing: border-box;
  }
  /* Only using * omits pseudo elements so specifically include these  */
  * , *:before, *:after {
    box-sizing: inherit;
  }


`;

export default GlobalStyle;
