import * as React from "react";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const Testimonials = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Avis</Heading>
          <Text>Quelques avis de clients avec qui j'ai pu collaborer</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Sérieux, investi, réactif et professionnel.
              </TestimonialHeading>
              <TestimonialText>
                Nous sommes satisfaits de son travail et de son implication dans
                le projet qui lui a été confié.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src="static/images/testimonials/ltr.png"
              name={"Digital"}
              title={"Lagardère Travel Retail (DFG)"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Un jeune développeur à qui vous pouvez faire entièrement
                confiance !
              </TestimonialHeading>
              <TestimonialText>
                Encore merci à Anthoni de m’avoir assisté dans cette mission !
                Ce jeune développeur montre déjà de belles qualités !!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src="static/images/testimonials/boulistenaute.png"
              name={"Lionel Zanet (Google)"}
              title={"Boulistenaute"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Merci à Anthoni</TestimonialHeading>
              <TestimonialText>
                Quelqu'un sur lequel on peut compter, ce qui est devenu une
                valeur rare!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src="static/images/testimonials/sonoscanner.png"
              name={"Directeur des opérations"}
              title={"Sonoscanner"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};
export default Testimonials;
