import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    chakra,
    useColorModeValue, Stat, StatLabel, Box, StatNumber, background, Center, Button,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import {
    FiCode,
    FiHelpCircle,
    FiStar,
} from 'react-icons/fi';
import {FcGlobe, FcConferenceCall, FcFolder, FcGraduationCap, FcFlashOn} from "react-icons/fc";
import { ReactElement } from 'react';
import Navbar from "../components/partials/Navbar";
import * as React from "react";
import Footer from "../components/partials/Footer";
import { AnimatedLogo } from "../components/branding/AnimatedLogo"
import Testimonials from "../components/testimonials/Testimonials";

import anthonimarie_profilepic from "../assets/images/anthonimarie_profilepic.jpg"
import {useNavigate} from "react-router-dom";
import {SimpleLogo} from "../components/branding/SimpleLogo";

interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
}

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function About() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar/>
            <Container maxW={'5xl'} py={12}>
                <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <Center><SimpleLogo h="10vmin" pointerEvents="none" /></Center>
                    <chakra.h1
                        textAlign={'center'}
                        fontSize={'4xl'}
                        py={10}
                        fontWeight={'bold'}>
                        Bonjour, je suis Anthoni Marie !
                    </chakra.h1>
                </Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}>
                            Qui suis-je ?
                        </Text>
                        <Heading>Développeur web et étudiant à Epitech</Heading>
                        <Feature
                            icon={
                                <Icon as={FiCode} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Développement Fullstack'}
                        />
                        <Feature
                            icon={<Icon as={FiHelpCircle} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Dépannage informatique'}
                        />
                        <Feature
                            icon={
                                <Icon as={FiStar} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Conseil informatique'}
                        />
                            <Text>Je m'appelle Anthoni, j'ai actuellement 21 ans et je vis sur Paris. Autodidacte passionné par le domaine de l'informatique et du web depuis maintenant plus de 5 ans, je suis capable de développer un site internet complet (dans la limitation de mes connaissances) avec l'aide d'un cahier des charges.</Text>
                            <Text>Pour me perfectionner dans le domaine je participe à l'élaboration de plusieurs projets. Ces différents projets que j'ai pu commencer pour le premier très jeune, m'ont permis d'évoluer d'années en années et d'acquérir de nombreuses connaissances à travers le travail en équipe.</Text>
                            <Text>Les parties que j'aime le plus dans l'informatique sont celles de la sécurité, le développement (d'infrastructures, d'applications et de sites internet).</Text>
                            <Text>L'informatique est ce qui me passionne le plus, dès que je peux faire quelque chose avec une équipe je le fais afin de satisfaire d'éventuels clients et d'en apprendre plus sur ce que je pratique.</Text>
                            <Text>Afin de m'aider à financer mes projets et le bon fonctionnement de mon site internet n'hésitez pas à m'aider par le biais de donations :) je vous remercie infiniment d'avance.</Text>
                        <Stack
                            spacing={4}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                                />
                            }>
                        </Stack>
                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={anthonimarie_profilepic}
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
                <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <chakra.h1
                        textAlign={'center'}
                        fontSize={'4xl'}
                        py={7}
                        fontWeight={'bold'}>
                        Quelques chiffres
                    </chakra.h1>
                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
                        <StatsCard
                            title={'Projets'}
                            stat={'42'}
                            icon={<FcFolder size={'3em'} />}
                        />
                        <StatsCard
                            title={'Clients'}
                            stat={'42'}
                            icon={<FcConferenceCall size={'3em'} />}
                        />
                        <StatsCard
                            title={'Visites uniques'}
                            stat={'42'}
                            icon={<FcGlobe size={'3em'} />}
                        />
                        <StatsCard
                            title={'Thèmes de travail'}
                            stat={'42'}
                            icon={<FcGraduationCap size={'3em'} />}
                        />
                    </SimpleGrid>
                </Box>
                <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <chakra.h1
                        textAlign={'center'}
                        fontSize={'4xl'}
                        py={7}
                        fontWeight={'bold'}>
                        Mon travail
                    </chakra.h1>
                    <Center>
                        <Button rightIcon={<FcFlashOn />} backgroundColor='#de8814' variant='solid' onClick={() => {navigate('/contact')}}>
                            Liste de mes projets
                        </Button>
                    </Center>
                </Box>
            </Container>
            <Testimonials/>
            <Footer/>
            </>
    );
}