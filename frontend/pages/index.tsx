import * as React from "react";
import {
  Text,
  VStack,
  Button,
  useBreakpointValue,
  Stack,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Granim from "granim";
import { Search2Icon } from "@chakra-ui/icons";
import Typed from "react-typed";

import { SimpleLogo } from "../components/branding/SimpleLogo";
import Meta from "../components/seo/Meta";

export default function Landing() {
  const seoData = {
    title: "Anthoni Marie | Site web",
    description:
      "Découvrez dès maintenant mes services de développement web et informatique. Digitalisation de votre société.",
    keywords:
      "anthoni marie, anthoni, marie, anthoni marie c'est qui, développeur web, digitalisation société, digitalisation, digitalisation entreprise, dev web, étudiant développeur, web dev, developer, epitech, développeur epitech, 42, informatique, dépannage informatique, aide informatique gagny, aide informatique paris, aide informatique région parisienne",
  };
  const router = useRouter();
  useEffect(() => {
    new Granim({
      element: "#canvas-basic",
      direction: "top-bottom",
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#ff9966", "#cc9735"],
            ["#dd9505", "#ada79a"],
            ["#e66829", "#f05053"],
          ],
        },
      },
    });
  }, []);
  // @ts-ignore
  return (
    <>
      <Meta data={seoData} />
      <Flex textAlign="center" w={"full"} h={"100vh"}>
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <canvas
            id="canvas-basic"
            style={{
              position: "absolute",
              display: "block",
              zIndex: "-1",
              width: "100%",
              height: "100%",
            }}
          />
          <Center>
            <SimpleLogo h="15vmin" pointerEvents="none" />
          </Center>
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
            >
              <Typed
                strings={[
                  "Bienvenue sur mon blog ! 👨‍💻",
                  "Welcome on my blog ! 👨‍💻",
                  "Passionné par l'informatique. 🖥️",
                  "IT lover. 🖥️",
                  "IoT enthusiast. 🌐",
                  "Passionnate about cars. 🚗",
                  "Picture lover. 📷",
                ]}
                typeSpeed={10}
                backSpeed={20}
                loop
              />
            </Text>
            <Stack align={"center"} alignSelf={"center"} position={"relative"}>
              <Button
                leftIcon={<Search2Icon />}
                backgroundColor="#de8814"
                variant="solid"
                onClick={() => {
                  router.push("/about");
                }}
              >
                Découvrir mon blog !
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
}
