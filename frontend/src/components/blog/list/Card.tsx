import * as React from "react"
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    WrapItem,
    SpaceProps,
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
            <Text fontWeight="medium">Par {props.name}</Text>
            <Text>—</Text>
            <Text>Posté le {props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

const Card = ({data}) => {
    console.log(data);
    return (
        <>
            {data && data.map((item, index) =>
            <WrapItem key={index} width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
            <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">

                    <Link href={"/blog/details/" + item.attributes.slug} textDecoration="none" _hover={{ textDecoration: 'none' }}>
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

export default Card;