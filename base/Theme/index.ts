import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

import { MediaQueryList } from './model';

const mediaQuerySize: MediaQueryList = {
  tablet: '1023px',
  mobile: '767px'
};

export const ThemeResource: DefaultTheme = {
  mq: {
    tablet: `@media only screen and (max-width: ${mediaQuerySize.tablet})`,
    mobile: `@media only screen and (max-width: ${mediaQuerySize.mobile})`
  }
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #__next {
    height: 100%;
  }
`;

export default { ThemeResource, GlobalStyle };
