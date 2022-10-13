import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../../styles/global';
import { Container } from '../../styles/pages/app';
import { defaultTheme } from '../../styles/themes/default';

import { Header } from '../components/Header';
import { CartContextProvider } from '../contexts/useCart';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <Header />

          <Component {...pageProps} />
          
          <GlobalStyles />
        </CartContextProvider>
      </ThemeProvider>
    </Container>
  )
}

export default MyApp
