import * as React from "react";
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
  useColorModeValue,
  Stat,
  StatLabel,
  Box,
  StatNumber,
  Center,
  Button,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { FiCode, FiHelpCircle, FiStar } from "react-icons/fi";
import {
  FcGlobe,
  FcConferenceCall,
  FcFolder,
  FcGraduationCap,
  FcFlashOn,
} from "react-icons/fc";

import Testimonials from "../../components/testimonials";
import { SimpleLogo } from "../../components/branding/SimpleLogo";
import Meta from "../../components/seo/Meta";

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
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  const seoData = {
    title: "Anthoni Marie | A propos",
    description: "A propos d'Anthoni Marie, son parcours et ses comp??tences.",
    keywords:
      "anthoni marie, anthoni, marie, anthoni marie a propos, d??veloppeur web, dev web, informations dev web, about, a propos, ??tudiant d??veloppeur, web dev, developer",
  };
  const router = useRouter();
  return (
    <>
      <Meta data={seoData} />
      <Container maxW={"5xl"} py={12}>
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <Center>
            <SimpleLogo h="10vmin" pointerEvents="none" />
          </Center>
          <chakra.h1
            textAlign={"center"}
            fontSize={"4xl"}
            py={10}
            fontWeight={"bold"}
          >
            Bonjour, je suis Anthoni Marie !
          </chakra.h1>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Qui suis-je ?
            </Text>
            <Heading>D??veloppeur web et ??tudiant ?? Epitech</Heading>
            <Feature
              icon={<Icon as={FiCode} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"D??veloppement Fullstack"}
            />
            <Feature
              icon={<Icon as={FiHelpCircle} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"D??pannage informatique"}
            />
            <Feature
              icon={<Icon as={FiStar} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Conseil informatique"}
            />
            <Text>
              Je m'appelle Anthoni, j'ai actuellement 21 ans et je vis sur
              Paris. Autodidacte passionn?? par le domaine de l'informatique et
              du web depuis maintenant plus de 5 ans, je suis capable de
              d??velopper un site internet complet (dans la limitation de mes
              connaissances) avec l'aide d'un cahier des charges.
            </Text>
            <Text>
              Pour me perfectionner dans le domaine je participe ?? l'??laboration
              de plusieurs projets. Ces diff??rents projets que j'ai pu commencer
              pour le premier tr??s jeune, m'ont permis d'??voluer d'ann??es en
              ann??es et d'acqu??rir de nombreuses connaissances ?? travers le
              travail en ??quipe.
            </Text>
            <Text>
              Les parties que j'aime le plus dans l'informatique sont celles de
              la s??curit??, le d??veloppement (d'infrastructures, d'applications
              et de sites internet).
            </Text>
            <Text>
              L'informatique est ce qui me passionne le plus, d??s que je peux
              faire quelque chose avec une ??quipe je le fais afin de satisfaire
              d'??ventuels clients et d'en apprendre plus sur ce que je pratique.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            ></Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src="static/images/anthonimarie_profilepic.jpg"
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={"center"}
            fontSize={"4xl"}
            py={7}
            fontWeight={"bold"}
          >
            Quelques chiffres
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
              title={"Projets"}
              stat={"+50"}
              icon={<FcFolder size={"3em"} />}
            />
            <StatsCard
              title={"Clients"}
              stat={"+20"}
              icon={<FcConferenceCall size={"3em"} />}
            />
            <StatsCard
              title={"Avis"}
              stat={"+10"}
              icon={<FcGlobe size={"3em"} />}
            />
            <StatsCard
              title={"Axes de travail"}
              stat={"+5"}
              icon={<FcGraduationCap size={"3em"} />}
            />
          </SimpleGrid>
        </Box>
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={"center"}
            fontSize={"4xl"}
            py={7}
            fontWeight={"bold"}
          >
            Mon travail
          </chakra.h1>
          <Center>
            <Button
              rightIcon={<FcFlashOn />}
              backgroundColor="#de8814"
              variant="solid"
              onClick={() => {
                router.push("/work");
              }}
            >
              Liste de mes projets
            </Button>
          </Center>
        </Box>
      </Container>
      <Testimonials />
    </>
  );
}
