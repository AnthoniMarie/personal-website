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
    Textarea, Grid, GridItem, chakra, Center, Image, useColorModeValue, SimpleGrid, AspectRatio
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
import { FcCurrencyExchange, FcCursor, FcFlashOn } from 'react-icons/fc'
import {TimeIcon, ChatIcon, PhoneIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";
import {AnimatedLogo} from "../components/branding/AnimatedLogo";
import Card from "../components/blog/list/Card";
import ContactModal from "../components/contact/Modal";

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


export default function Contact({data}) {
    const navigate = useNavigate();

    console.log(data);
    const LoadContact = () => {
        if (data == "details")
            return (
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
                                <VStack alignItems="flex-start" spacing="20px" marginTop="5">
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
                            <Center><Image src={useColorModeValue(phoneinformations_whitebg, phoneinformations_defaultbg)} onClick={() => window.location.href = 'tel:0766082188'} marginTop="5" style={{width: '350px'}}/></Center>
                            <Box p={4}>
                                <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
                                    <SimpleGrid columns={{ base: 1, md: 3 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
                                        <Feature title="Votre devis est gratuit" icon={<FcCurrencyExchange />}>
                                            Pour votre projet, la production du devis est entièrement gratuite et sans engagement. Ainsi, vous savez à quoi vous attendre.
                                        </Feature>
                                        <Feature title="Planifiez notre rendez-vous" icon={<FcCursor />}>
                                            Vous avez un emploi du temps très chargé et vous voulez que cela aille vite ? Aucun souci, planifiez vous même directement en ligne notre rendez-vous téléphonique, simplement, facilement et rapidement.
                                        </Feature>
                                        <Feature title="N'attendez pas" icon={<FcFlashOn />}>
                                            Parce que je sais que développer son projet demande d'être rapide et engage beaucoup d'angoisse, je vous propose un temps de réponse dans les plus brefs délais et pratique.
                                        </Feature>
                                    </SimpleGrid>
                                </Box>
                            </Box>
                            <Stack align={'center'}
                                   alignSelf={'center'}
                                   position={'relative'}
                                   marginBottom="5">

                                <Button leftIcon={<PhoneIcon/>} backgroundColor='#de8814' variant='solid' onClick={() => window.location.href = 'tel:0766082188'}>
                                    M'appeler
                                </Button>
                                <ContactModal/>
                                <Button leftIcon={<TimeIcon/>} backgroundColor='#6e695e' variant='solid' onClick={() => {navigate('/contact/book')}}>
                                    Planifier un rendez-vous
                                </Button>
                            </Stack>
                        </Box>
                    </Flex>
                </Container>
            )
        else
            return (
                <AspectRatio maxW='100%' ratio={1}>
                    <iframe
                        title='Prise de rendez-vous'
                        src='https://anthonimarieplanification.setmore.com'
                        allowFullScreen
                    />
                </AspectRatio>
            )
    }
    return (
        <>
            <Navbar/>
            <LoadContact/>
            <Footer/>
        </>
    );
}