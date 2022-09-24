import * as React from "react";
import {
  Container,
  Box,
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
import { PhoneIcon } from "@chakra-ui/icons";
import { FcCursor } from "react-icons/fc";

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
                  Entrons en contact.
                </chakra.h2>
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
          <chakra.p marginTop="10">
            N'hésitez pas à me contacter pour toute demande de renseignement
            concernant mes études ou mes compétences.
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
                columns={{ base: 1, md: 1 }}
                spacingX="10"
                spacingY={{ base: "8", md: "14" }}
              >
                <Feature title="Une réponse rapide !" icon={<FcCursor />}>
                  Vous avez un emploi du temps très chargé et vous voulez que
                  cela aille vite ? Dès réception de votre demande, une réponse
                  vous sera apportée au maximum dans les 24H.
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
                columns={{ base: 1, md: 2 }}
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
                {/*<Button
                  leftIcon={<TimeIcon />}
                  backgroundColor="#6e695e"
                  variant="solid"
                  onClick={() => {
                    router.push("/contact/book");
                  }}
                >
                  Planifier un rendez-vous
                </Button>*/}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
