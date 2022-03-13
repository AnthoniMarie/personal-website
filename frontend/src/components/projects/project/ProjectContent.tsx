import * as React from "react"
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import {API_URL} from "../../../constants/misc";
import {useParams} from "react-router-dom";

const ProjectContent = ({data}) => {
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