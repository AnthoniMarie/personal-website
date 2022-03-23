import * as React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  VStack,
  Grid,
  GridItem,
  chakra,
  Center,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { TimeIcon, PhoneIcon } from "@chakra-ui/icons";
import { FcCurrencyExchange, FcCursor, FcFlashOn } from "react-icons/fc";

import { SimpleLogo } from "../../components/branding/SimpleLogo";
import ContactModal from "../../components/contact/Modal";
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

export default function Contact() {
  const seoData = {
    title: "Anthoni Marie | Me contacter",
    description:
      "N'hésitez plus, contactez Anthoni Marie pour mener à bien votre projet informatique/web ou de digitalisation de votre entreprise!",
    keywords:
      "anthoni marie, anthoni, marie, anthoni marie contacter, anthoni marie téléphone, anthoni marie numéro, contacter anthoni marie, digitalisation société, digitalisation, digitalisation entreprise, développeur web, dev web, étudiant développeur, web dev, developer, epitech, développeur epitech, 42, informatique, dépannage informatique, aide informatique gagny, aide informatique paris, aide informatique région parisienne",
  };
  const router = useRouter();
  return (
    <>
      <Meta data={seoData} />
      <Container maxW="full" p={0} overflow="hidden">
        <Grid
          p={{ sm: 5, md: 5, lg: 16 }}
          alignItems="center"
          justifyContent="center"
          backgroundImage="/static/images/contact/banner.jpg"
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <Center>
            <GridItem colSpan={1}>
              <VStack alignItems="flex-start" spacing="20px" marginTop="5">
                <chakra.h2 fontSize="3xl" fontWeight="700">
                  Voyez les choses en grand.
                </chakra.h2>
                <chakra.p>
                  Parce que réaliser un projet n'est pas une mince affaire...
                </chakra.p>
                <Button
                  bg={"#de8814"}
                  _hover={{ bg: "#ff9100" }}
                  size="md"
                  onClick={() => {
                    router.push("#getintouch");
                  }}
                >
                  Me contacter
                </Button>
              </VStack>
            </GridItem>
          </Center>
          <GridItem>
            <VStack spacing="20px">
              <SimpleLogo h="10vmin" />
            </VStack>
          </GridItem>
        </Grid>
        <Box
          maxW="7xl"
          mx={"auto"}
          pt={5}
          px={{ base: 2, sm: 12, md: 17 }}
          borderRadius="lg"
          style={{ textAlign: "center" }}
          id={"getintouch"}
        >
          <Heading style={{ textTransform: "uppercase" }}>
            Entrons en liaison
          </Heading>
          <chakra.p marginTop="10">
            Parce que réaliser un projet n'est pas une mince affaire...
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
                columns={{ base: 1, md: 3 }}
                spacingX="10"
                spacingY={{ base: "8", md: "14" }}
              >
                <Feature
                  title="Votre devis est gratuit"
                  icon={<FcCurrencyExchange />}
                >
                  Pour votre projet, la production du devis est entièrement
                  gratuite et sans engagement. Ainsi, vous savez à quoi vous
                  attendre.
                </Feature>
                <Feature
                  title="Planifiez notre rendez-vous"
                  icon={<FcCursor />}
                >
                  Vous avez un emploi du temps très chargé et vous voulez que
                  cela aille vite ? Aucun souci, planifiez vous même directement
                  en ligne notre rendez-vous téléphonique, simplement,
                  facilement et rapidement.
                </Feature>
                <Feature title="N'attendez pas" icon={<FcFlashOn />}>
                  Parce que je sais que développer son projet demande d'être
                  rapide et engage beaucoup d'angoisse, je vous propose un temps
                  de réponse dans les plus brefs délais et pratique.
                </Feature>
              </SimpleGrid>
            </Box>
          </Box>
          <Box p={2}>
            <Box
              as="section"
              maxW="3xl"
              mx="auto"
              py="12"
              px={{ base: "6", md: "8" }}
            >
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacingX="5"
                spacingY={{ base: "4", md: "12" }}
              >
                <ContactModal />
                <Button
                  leftIcon={<PhoneIcon />}
                  backgroundColor="#de8814"
                  variant="solid"
                  onClick={() => (window.location.href = "tel:0766082188")}
                >
                  M'appeler
                </Button>
                <Button
                  leftIcon={<TimeIcon />}
                  backgroundColor="#6e695e"
                  variant="solid"
                  onClick={() => {
                    router.push("/contact/book");
                  }}
                >
                  Planifier un rendez-vous
                </Button>
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
