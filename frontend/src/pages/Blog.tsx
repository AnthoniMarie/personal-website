import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme, Button, useBreakpointValue, Stack, Flex,
} from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'

import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { AnimatedLogo } from "../components/branding/AnimatedLogo"
import Navbar from "../components/partials/Navbar"
import Footer from "../components/partials/Footer"

export default function Blog() {
    return (
        <>
            <Navbar/>
            <Text>Blog there.</Text>
            <Footer/>
        </>
    );
}