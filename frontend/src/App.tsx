import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import {Landing} from "./pages/Landing";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Landing/>
  </ChakraProvider>
)
