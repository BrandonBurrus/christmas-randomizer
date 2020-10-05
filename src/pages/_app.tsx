import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from '../app/theme';

function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
