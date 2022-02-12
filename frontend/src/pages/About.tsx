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
    useColorModeValue, Stat, StatLabel, Box, StatNumber,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import {
    BiStats,
    BiUserPlus,
    BiWorld,
} from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { ReactElement } from 'react';
import Navbar from "../components/partials/Navbar";
import * as React from "react";
import Footer from "../components/partials/Footer";

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
    return (
        <>
            <Navbar/>
            <Container maxW={'5xl'} py={12}>
                <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <chakra.h1
                        textAlign={'center'}
                        fontSize={'4xl'}
                        py={10}
                        fontWeight={'bold'}>
                        Hi, I Am Anthoni Marie !
                    </chakra.h1>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                        <StatsCard
                            title={'Users'}
                            stat={'5,000'}
                            icon={<BsPerson size={'3em'} />}
                        />
                        <StatsCard
                            title={'Servers'}
                            stat={'1,000'}
                            icon={<FiServer size={'3em'} />}
                        />
                        <StatsCard
                            title={'Datacenters'}
                            stat={'7'}
                            icon={<GoLocation size={'3em'} />}
                        />
                    </SimpleGrid>
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
                            Our Story
                        </Text>
                        <Heading>A digital Product design agency</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore
                        </Text>
                        <Stack
                            spacing={4}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                                />
                            }>
                            <Feature
                                icon={
                                    <Icon as={BiStats} color={'yellow.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                                text={'Business Planning'}
                            />
                            <Feature
                                icon={<Icon as={BiWorld} color={'green.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('green.100', 'green.900')}
                                text={'Financial Planning'}
                            />
                            <Feature
                                icon={
                                    <Icon as={BiUserPlus} color={'purple.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('purple.100', 'purple.900')}
                                text={'Market Analysis'}
                            />
                        </Stack>
                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            }
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
                        Les chiffres
                    </chakra.h1>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                        <StatsCard
                            title={'Users'}
                            stat={'5,000'}
                            icon={<BsPerson size={'3em'} />}
                        />
                        <StatsCard
                            title={'Servers'}
                            stat={'1,000'}
                            icon={<FiServer size={'3em'} />}
                        />
                        <StatsCard
                            title={'Datacenters'}
                            stat={'7'}
                            icon={<GoLocation size={'3em'} />}
                        />
                    </SimpleGrid>
                </Box>
            </Container>
            <Footer/>
            </>
    );
}