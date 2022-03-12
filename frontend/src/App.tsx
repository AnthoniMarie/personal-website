import * as React from "react"
import {
    ChakraProvider, extendTheme,
    theme,
} from "@chakra-ui/react"
import {Router} from "./routes/Router";

const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
}
const customTheme = extendTheme({ config })

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Router/>
  </ChakraProvider>
)
