import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../theme";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>LightningBall</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
