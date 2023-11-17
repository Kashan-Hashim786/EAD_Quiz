import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;

/* font sizes */
--font-size-xl: 20px;
--font-size-21xl: 40px;
--font-size-9xl: 28px;

/* Colors */
--color-black: #000;
--color-white: #fff;
--color-gray: #808080;

/* Border radiuses */
--br-3xs: 10px;

}
`;
