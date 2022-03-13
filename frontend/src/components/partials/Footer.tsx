import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    Image,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { SimpleLogo } from "../branding/SimpleLogo"
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ColorModeSwitcher } from "../../ColorModeSwitcher"
import { ReactNode } from 'react';
import phoneinformations_whitebg from "../../assets/images/contact/5_whitebg.png";
import phoneinformations_defaultbg from "../../assets/images/contact/5.png";

const SocialButton = ({
                          children,
                          label,
                          href,
                      }: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Stack direction={'row'} spacing={6} justify={'center'} align={'center'}>
                <Stack direction={'row'} marginTop="10">
                <Image src="https://api.codeur.com/widgets/badge.svg?k=v7oPAwyJHQjXqAz4"/>
                <Image src={useColorModeValue(phoneinformations_whitebg, phoneinformations_defaultbg)} onClick={() => window.location.href = 'tel:0766082188'}/>
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={6}
                   justify={'center'}
                   align={'center'}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    spacing={4}
                    justify={'center'}
                    align={'center'}>
                    <SimpleLogo h="30" />
                    <Text>L'informatique au service des autres.</Text>
                    <Text fontSize={'xs'}>99 Av. Achille Peretti, 92200 Neuilly-sur-Seine</Text>
                </Container>
            </Stack>
            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>

                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2022 Anthoni Marie. All rights reserved.</Text>
                    <Text fontSize="xs">Made with 🚀 with Chakra UI.</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Container>
            </Box>
        </Box>
    );
}