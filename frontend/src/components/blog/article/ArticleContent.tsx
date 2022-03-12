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


interface IBlogTags {
    tags: Array<string>;
    marginTop?: SpaceProps['marginTop'];
}
interface BlogAuthorProps {
    date: Date;
    name: string;
}
export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};
const BlogTags: React.FC<IBlogTags> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

const ArticleContent = ({data}) => {

    console.log(data);

    return (
        <>
            <Heading as="h2" marginTop="5" style={{textAlign:'center'}}>
                {data.title}
            </Heading>
            <Text fontSize="sm" style={{textAlign:'center'}}>Par {data.author} | Posté le {new Date(data.publishedAt).toLocaleDateString()}</Text>
                <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                <Box boxSize='100%' >
                    <Image src='http://localhost:1337/uploads/large_ladefense_ia_1_fb1d0fa2e7.jpeg' alt={data.title} borderRadius="lg"/>
                </Box>
                <Text as="p" fontSize="lg" style={{textAlign:'center'}} marginTop="5">
                    <ReactMarkdown components={ChakraUIRenderer()} children={data.content} skipHtml transformImageUri={uri => API_URL + uri}/>
                </Text>
                </Box>
        </>
    );
}

export default ArticleContent;