import * as React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

import Meta from "../../seo/Meta";
import { API_URL_ASSETS } from "../../../constants/misc";

const ArticleContent = ({ data }) => {
  const seoData = {
    title: "Anthoni Marie | Article " + data.title + " publié sur le blog",
    description: data.description,
    keywords:
      "anthoni marie, anthoni, marie, anthoni marie blog, développeur web, dev web, étudiant développeur, web dev, developer, epitech, développeur epitech, 42, informatique, dépannage informatique, aide informatique gagny, aide informatique paris, aide informatique région parisienne, blog informatique, blog développeur web, blog développeur informatique, visionner article",
  };
  const customArticle = {
    p: (props: { children: any }) => {
      const { children } = props;
      return (
        <Text
          as="p"
          fontSize="lg"
          style={{ textAlign: "center" }}
          marginTop="5"
        >
          {children}
        </Text>
      );
    },
  };
  return (
    <>
      <Meta data={seoData} />
      <Heading as="h2" marginTop="5" style={{ textAlign: "center" }}>
        {data.title}
      </Heading>
      <Text fontSize="sm" style={{ textAlign: "center" }}>
        Par {data.author} | Posté le{" "}
        {new Date(data.publishedAt).toLocaleDateString()}
      </Text>
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        {/*<Box boxSize='100%' >*/}
        {/*    <Image src='http://localhost:1337/uploads/large_ladefense_ia_1_fb1d0fa2e7.jpeg' alt={data.title} borderRadius="lg"/>*/}
        {/*</Box>*/}
        <ReactMarkdown
          components={ChakraUIRenderer(customArticle)}
          skipHtml
          transformImageUri={(uri) => API_URL_ASSETS + uri}
        >
          {data.content}
        </ReactMarkdown>
      </Box>
    </>
  );
};

export default ArticleContent;
