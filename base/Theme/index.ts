import { createGlobalStyle, DefaultTheme, css } from 'styled-components';
import reset from 'styled-reset';

import { MediaQueryList } from './model';

const fontsURL = {
  noto: {
    thin: 'public/fonts/NotoSansKR-Thin.otf',
    regular: '/fonts/NotoSansKR-Regular.otf',
    medium: '/fonts/NotoSansKR-Medium.otf',
    bold: '/fonts/NotoSansKR-Bold.otf',
    black: '/fonts/NotoSansKR-Black.otf'
  }
};

const fonts = css`
  @font-face {
    font-family: 'NotoSans';
    font-style: normal;
    font-weight: 100;
    src: url(${fontsURL.noto.thin}) format('opentype');
  }

  @font-face {
    font-family: 'NotoSans';
    font-style: normal;
    font-weight: 400;
    src: url(${fontsURL.noto.regular}) format('opentype');
  }

  @font-face {
    font-family: 'NotoSans';
    font-style: normal;
    font-weight: 500;
    src: url(${fontsURL.noto.medium}) format('opentype');
  }

  @font-face {
    font-family: 'NotoSans';
    font-style: normal;
    font-weight: 700;
    src: url(${fontsURL.noto.bold}) format('opentype');
  }

  @font-face {
    font-family: 'NotoSans';
    font-style: normal;
    font-weight: 900;
    src: url(${fontsURL.noto.black}) format('opentype');
  }
`;

const mediaQuerySize: MediaQueryList = {
  tablet: '1023px',
  mobile: '767px'
};

export const ThemeResource: {
  mq: MediaQueryList;
} = {
  mq: {
    tablet: `@media only screen and (max-width: ${mediaQuerySize.tablet})`,
    mobile: `@media only screen and (max-width: ${mediaQuerySize.mobile})`
  }
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}

  html, body, #__next {
    height: 100%;
    font-family: 'NotoSans'
  }
`;

export default { ThemeResource, GlobalStyle };
