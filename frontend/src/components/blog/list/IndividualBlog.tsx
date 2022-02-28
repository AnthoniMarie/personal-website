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

const IndividualBlog = ({data}) => {
    return (
        <>
            {data && data.map((item, index) =>
            <WrapItem key={index} width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
            <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <Image style={{aspectRatio: '3/2'}}
                            transform="scale(1.0)"
                            src={

                                API_URL + item.attributes.banner.data.attributes.formats.large.url
                            }
                            width="100%"
                            transition="0.3s ease-in-out"
                            _hover={{
                                transform: 'scale(1.05)',
                            }}
                        />
                    </Link>
                </Box>
                <BlogTags tags={['tag1', 'tag2']} marginTop="3" />
                <Heading fontSize="xl" marginTop="2">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        {item.attributes.title}
                    </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                    {item.attributes.description}
                </Text>
                <BlogAuthor
                    name={item.attributes.author}
                    date={new Date(item.attributes.publishedAt)}
                />
            </Box>
        </WrapItem>
                )}
        </>
    );
}

export default IndividualBlog;