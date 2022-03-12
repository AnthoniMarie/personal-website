import * as React from "react";
import {useEffect} from "react";
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    Stack,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea, Grid, GridItem, chakra, Center, Image, useColorModeValue, SimpleGrid,
} from '@chakra-ui/react';
import Navbar from "../components/partials/Navbar"
import Footer from "../components/partials/Footer"
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { SimpleLogo } from "../components/branding/SimpleLogo";
import banner from "../assets/images/contact/banner.jpg";
import phoneinformations_whitebg from "../assets/images/contact/3_whitebg.png";
import phoneinformations_defaultbg from "../assets/images/contact/3.png";
import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc'

interface FeatureProps {
    title: string
    children: React.ReactNode
    icon: React.ReactElement
}

export const Feature = (props: FeatureProps) => {
    const { title, children, icon } = props
    return (
        <Stack spacing={{ base: '3', md: '6' }} direction={{ base: 'column', md: 'row' }}>
            <Box fontSize="6xl">{icon}</Box>
            <Stack spacing="1">
                <Text fontWeight="extrabold" fontSize="lg">
                    {title}
                </Text>
                <Box color={useColorModeValue('gray.600', 'gray.400')}>{children}</Box>
            </Stack>
        </Stack>
    )
}


export default function Contact() {
    return (
        <>
        <Navbar/>
            <Container maxW="full" p={0} overflow="hidden">
                <Grid
                      p={{ sm: 5, md: 5, lg: 16 }}
                      alignItems="center"
                      justifyContent="center"
                      backgroundImage={banner}
                      backgroundSize={'cover'}
                      backgroundPosition={'center center'}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                    }}
                    gap={4}>
                    <Center>
                    <GridItem colSpan={1}>
                        <VStack alignItems="flex-start" spacing="20px">
                            <chakra.h2 fontSize="3xl" fontWeight="700">
                                Voyez les choses en grand.
                            </chakra.h2>
                            <chakra.p>
                                Parce que réaliser un projet n'est pas une mince affaire...
                            </chakra.p>
                            <Button bg={'#de8814'} _hover={{bg: '#ff9100'}} size="md">
                                Me contacter
                            </Button>
                        </VStack>
                    </GridItem>
                    </Center>
                    <GridItem>
                        <VStack spacing="20px">
                            <SimpleLogo h="10vmin"/>
                        </VStack>
                    </GridItem>
                </Grid>
                <Flex>
                    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} borderRadius="lg" style={{textAlign:'center'}}>
                        <Heading style={{textTransform: 'uppercase'}}>Entrons en liaison</Heading>
                        <chakra.p marginTop="10">
                            Parce que réaliser un projet n'est pas une mince affaire...
                        </chakra.p>
                        <Center><Image src={useColorModeValue(phoneinformations_whitebg, phoneinformations_defaultbg)} marginTop="5" style={{width: '350px'}}/></Center>
                        <Box p={4}>
                            <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
                                <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
                                    <Feature title="Secure by default" icon={<FcPrivacy />}>
                                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                        takimata sanctus.
                                    </Feature>
                                    <Feature title="Always up to date" icon={<FcTimeline />}>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                        invidunt ut labore.
                                    </Feature>
                                    <Feature title="Incredible statistics" icon={<FcDoughnutChart />}>
                                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                        takimata sanctus.
                                    </Feature>
                                    <Feature title="Support for multiple devices" icon={<FcMultipleDevices />}>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                        invidunt ut labore.
                                    </Feature>
                                </SimpleGrid>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Container>
            <Footer/>
        </>
    );
}