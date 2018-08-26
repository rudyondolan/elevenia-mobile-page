import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    box-sizing: border-box;
    font-family: "Open Sans",Helvetica,Arial,sans-serif;
  }
  html,
  body {
    position: relative;
    height: 100%;
    width: 100%;
    font-size: 14px;
  }
`;
