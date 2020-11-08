import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import main from '../styles/theme';
import { Reset } from '../styles/Reset';

// components
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <ThemeProvider theme={main}>
      <Head>
        <title>Coding Notes - a blog by Kadu Magalhães</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Reset />
    </ThemeProvider>
  );
}
