import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme, Button, useBreakpointValue, Stack, Flex, position, Center,
} from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'
import TypeAnimation from 'react-type-animation';

import { SimpleLogo } from "../components/branding/SimpleLogo"
import Navbar from "../components/partials/Navbar"
import Footer from "../components/partials/Footer"

import biarritzVideo from "../assets/videos/biarritz.mp4"
import { useNavigate } from "react-router-dom";
import Granim from "granim";
import {useEffect} from "react";

export default function Landing() {
    const navigate = useNavigate();
    useEffect(() => {
        new Granim({
            element: '#canvas-basic',
            direction: 'top-bottom',
            isPausedWhenNotInView: true,
            states: {
                "default-state": {
                    gradients: [
                        ['#ff9966', '#cc9735'],
                        ['#dd9505', '#ada79a'],
                        ['#e66829', '#f05053']
                    ]
                }
            }
        });
    }, []);
    return (
    <>
        <Navbar/>
        <Flex
            textAlign="center"
            w={'full'}
            h={'100vh'}
            >
            {/*<video loop autoPlay muted style={{position: 'absolute', right: 'O', minWidth: '100%', minHeight: '100%'}}>
                <source src={biarritzVideo}/>
                Your browser does not support the video tag.
            </video>*/}
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({base: 4, md: 8})}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <canvas id="canvas-basic" style={{position: 'absolute',
                    display: 'block',
                    zIndex:'-1',
                    width: '100%',
                    height: '100%'}}
                />
                <Center><SimpleLogo h="15vmin" pointerEvents="none" /></Center>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({base: '4xl', md: '5xl'})}>
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                'Donnez vie à vos projets IT',
                                2000,
                                'rapidement et simplement.',
                                2000,
                            ]}
                            wrapper="strong"
                            repeat={Infinity}
                        />
                    </Text>
                    <Stack align={'center'}
                           alignSelf={'center'}
                           position={'relative'}>
                        <Button leftIcon={<Search2Icon/>} backgroundColor='#de8814' variant='solid' onClick={() => {navigate('/blog')}}>
                            Découvrir
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
        <Footer/>
    </>
    );
}