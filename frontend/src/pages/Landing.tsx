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

import { AnimatedLogo } from "../components/branding/AnimatedLogo"
import Navbar from "../components/partials/Navbar"
import Footer from "../components/partials/Footer"

export default function Landing() {
    return (
    <>
        <Navbar/>
        <Flex
            textAlign="center"
            w={'full'}
            h={'100vh'}
            backgroundImage={
                'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({base: 4, md: 8})}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({base: '3xl', md: '4xl'})}>
                        Your IT projects, as you never seen before.
                    </Text>
                    <Stack align={'center'}
                           alignSelf={'center'}
                           position={'relative'}>
                        <Button leftIcon={<Search2Icon/>} backgroundColor='#de8814' variant='solid'>
                            Discover
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
        <Footer/>
    </>
    );
}