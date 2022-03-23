import * as React from "react";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";

const config = {
  initialColorMode: "dark",
};
const customTheme = extendTheme({ config });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={"dark"} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
