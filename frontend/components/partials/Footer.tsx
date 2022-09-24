import * as React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import { SimpleLogo } from "../branding/SimpleLogo";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

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
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const [lang, setLang] = useState("");
  const contact_img = useColorModeValue(
    "/static/images/contact/5_whitebg.png",
    "/static/images/contact/5.png"
  );
  function getElementText(response, elementName) {
    return response.getElementsByTagName(elementName)[0].innerHTML;
  }

  useEffect(() => {
    fetch("http://api.hostip.info")
      .then((res) => res.text())
      .then((response) => {
        return new window.DOMParser().parseFromString(response, "text/xml");
      })
      .then((responseXmlParsed) => {
        let countryName = getElementText(responseXmlParsed, "countryName");
        setLang(countryName);
      })
      .catch(() => {});
  }, []);
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack direction={"row"} spacing={6} justify={"center"} align={"center"}>
        {lang == "FRANCE" ? (
          <Stack direction={"row"} marginTop="10">
            <Image
              src="https://api.codeur.com/widgets/badge.svg?k=v7oPAwyJHQjXqAz4"
              alt={"Avis codeur.com de Anthoni Marie"}
            />
            <Image
              src={contact_img}
              alt={"Appeler Anthoni Marie"}
              onClick={() => (window.location.href = "tel:0766082188")}
            />
          </Stack>
        ) : (
          ""
        )}
      </Stack>
      <Stack direction={"row"} spacing={6} justify={"center"} align={"center"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <SimpleLogo h="30" />
          <Text>L'informatique au service des autres.</Text>
          <Text fontSize={"xs"}>
            99 Av. Achille Peretti, 92200 Neuilly-sur-Seine, France
          </Text>
        </Container>
      </Stack>
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Anthoni Marie. All rights reserved.</Text>
          <Text fontSize="xs">Made with 🚀 with Chakra UI.</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/anthoni_marie"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"GitHub"}
              href={"https://github.com/AnthoniMarie"}
            >
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"http://instagram.com/anthoni.marie"}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton
              label={"Linkedin"}
              href={"https://www.linkedin.com/in/anthoni-marie/"}
            >
              <FaLinkedin />
            </SocialButton>
          </Stack>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Container>
      </Box>
    </Box>
  );
}
