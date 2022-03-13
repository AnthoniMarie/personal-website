import * as React from "react"
import {
    Box,
    Heading,
    Text,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import Meta from "../../seo/Meta";
import {API_URL} from "../../../constants/misc";

const ProjectContent = ({data}) => {
    const seoData = {
        title: "Anthoni Marie | Projet " + data.title + " publié sur la liste des projets",
        description: data.description,
        keywords: "anthoni marie, anthoni, marie, anthoni marie blog, développeur web, dev web, étudiant développeur, web dev, developer, epitech, développeur epitech, 42, informatique, dépannage informatique, aide informatique gagny, aide informatique paris, aide informatique région parisienne, blog informatique, blog développeur web, blog développeur informatique, visionner projet"
    }
    const customProject = {
        p: props => {
            const { children } = props;
            return (
                <Text as="p" fontSize="lg" style={{textAlign:'center'}} marginTop="5">
                    {children}
                </Text>
            );
        },
    };
    return (
        <>
            <Meta data={seoData}/>
            <Heading as="h2" marginTop="5" style={{textAlign:'center'}}>
                {data.title}
            </Heading>
            <Text fontSize="sm" style={{textAlign:'center'}}>Posté le {new Date(data.publishedAt).toLocaleDateString()}</Text>
            <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                <ReactMarkdown components={ChakraUIRenderer(customProject)} children={data.content} skipHtml transformImageUri={uri => API_URL + uri}/>
            </Box>
        </>
    );
}

export default ProjectContent;