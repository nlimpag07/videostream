import type { AppProps } from 'next/app';
import React from 'react';
import '../index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
