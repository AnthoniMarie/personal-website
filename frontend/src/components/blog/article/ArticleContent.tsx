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
            <VStack paddingTop="40px" spacing="2" alignItems="center">
                <Heading as="h2" style={{textAlign:'center'}}>{data.title}</Heading>
                <Text as="p" fontSize="lg">
                    {data.description}
                </Text>
            </VStack>
            <Text>Data: {JSON.stringify(data)}</Text>
        </>
    );
}

export default ArticleContent;