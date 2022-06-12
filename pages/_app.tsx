import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';

import { Theme } from '@base';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Theme.GlobalStyle />
      <ThemeProvider theme={Theme.ThemeResource}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
