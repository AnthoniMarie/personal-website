import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme, Button,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { AnimatedLogo } from "../components/branding/AnimatedLogo"
import Navbar from "../components/partials/Navbar"
import Footer from "../components/partials/Footer"

export const Landing = () => (
    <>
        <Navbar/>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack spacing={8}>
                    <AnimatedLogo h="40vmin" pointerEvents="none" />
                    <Text>
                        Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
                    </Text>
                    <Link
                        color="teal.500"
                        href="https://chakra-ui.com"
                        fontSize="2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button colorScheme='teal' size='lg'>
                            Discover
                        </Button>
                    </Link>
                </VStack>
            </Grid>
        </Box>
        <Footer/>
    </>
)