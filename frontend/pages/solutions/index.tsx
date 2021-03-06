import * as React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  chakra,
  Center,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  FcAssistant,
  FcTodoList,
  FcPodiumWithSpeaker,
  FcCollaboration,
  FcCircuit,
  FcTabletAndroid,
  FcInvite,
} from "react-icons/fc";

import Meta from "../../components/seo/Meta";

interface FeatureProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactElement;
}
export const Feature = (props: FeatureProps) => {
  const { title, children, icon } = props;
  return (
    <Stack
      spacing={{ base: "3", md: "6" }}
      direction={{ base: "column", md: "row" }}
    >
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={useColorModeValue("gray.600", "gray.400")}>{children}</Box>
      </Stack>
    </Stack>
  );
};

export default function Solutions() {
  const seoData = {
    title: "Anthoni Marie | Solutions",
    description:
      "Envie d'un site internet, d'obtenir une visibilité sur internet ou tout simplement une question informatique ? Optez pour les solutions proposées par Anthoni Marie.",
    keywords:
      "anthoni marie, anthoni, marie, anthoni marie solutions, développeur web, digitalisation société, digitalisation, digitaliation entreprise, dev web, étudiant développeur, web dev, developer, epitech, développeur epitech, 42, informatique, dépannage informatique, aide informatique gagny, aide informatique paris, aide informatique région parisienne, solutions développeur, solutions informatique, prix informatique",
  };
  const router = useRouter();
  return (
    <>
      <Meta data={seoData} />
      <Container maxW="full" p={0} overflow="hidden">
        <Flex>
          <Box
            maxW="7xl"
            mx={"auto"}
            pt={5}
            px={{ base: 2, sm: 12, md: 17 }}
            borderRadius="lg"
            style={{ textAlign: "center" }}
          >
            <Heading style={{ textTransform: "uppercase" }}>
              Les solutions
            </Heading>
            <chakra.p marginTop="10">
              Profitez de plusieurs types de services pour la réalisation de
              votre projet informatique.
            </chakra.p>
            <Box p={4}>
              <Box
                as="section"
                maxW="5xl"
                mx="auto"
                py="12"
                px={{ base: "6", md: "8" }}
              >
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacingX="10"
                  spacingY={{ base: "8", md: "14" }}
                >
                  <Feature title="Dépannage" icon={<FcAssistant />}>
                    Un problème avec votre ordinateur familial ? Votre
                    ordinateur est plus lent que d'habitude ? Dépannage en IDF
                    (analyse à distance au préalable).
                  </Feature>
                  <Feature
                    title="Conseil informatique"
                    icon={<FcCollaboration />}
                  >
                    Etude de vos besoins et analyse des meilleures solutions
                    pour y subvenir. Rapport détaillé sur mes analyses.
                  </Feature>
                  <Feature
                    title="Digitalisation"
                    icon={<FcPodiumWithSpeaker />}
                  >
                    Aujourd'hui plus que jamais, rendre visible sa société sur
                    internet est devenu un "must-have". Profitez d'une
                    digitalisation de celle-ci via la création d'un site web et
                    d'un référencement sur internet. (nom de domaine,
                    référencement google, adresse e-mail...).
                  </Feature>
                  <Feature
                    title="Développement web sur mesure"
                    icon={<FcTodoList />}
                  >
                    Parce qu'être visibile sur internet est devenu crucial pour
                    le développement d'une entreprise ou un indépendant.
                    Portfolio, E-commerce, OnePage, Site vitrine, CRM...,
                    entièrement sur mesure, sur base d'un cahier des charges.
                  </Feature>
                  <Feature title="Low/no code" icon={<FcCircuit />}>
                    Limitez le coût de vos projets web via des projets réalisés
                    sur mesure et rapidement grâce à no/low code.
                  </Feature>
                  <Feature
                    title="Développement d'application mobile sur mesure"
                    icon={<FcTabletAndroid />}
                  >
                    Développement de votre application mobile en React Native
                    avec mise en ligne sur les stores (en savoir plus par
                    appel).
                  </Feature>
                </SimpleGrid>
              </Box>
            </Box>
            <Box
              maxW="7xl"
              mx={"auto"}
              pt={5}
              px={{ base: 2, sm: 12, md: 17 }}
              marginBottom="10"
            >
              <chakra.h1
                textAlign={"center"}
                fontSize={"4xl"}
                py={7}
                fontWeight={"bold"}
              >
                Me contacter
              </chakra.h1>
              <Center>
                <Button
                  rightIcon={<FcInvite />}
                  backgroundColor="#de8814"
                  variant="solid"
                  onClick={() => {
                    router.push("/contact");
                  }}
                >
                  Envoyer un message
                </Button>
              </Center>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
