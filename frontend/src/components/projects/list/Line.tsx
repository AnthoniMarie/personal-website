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

const Line = ({data}) => {
    console.log(data);
    return (
        <>
            {data && data.map((item, index) =>
                <WrapItem key={index} width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
                    <Box w="100%">
                        <Box borderRadius="lg" overflow="hidden">
                            <Link href={"/work/details/" + item.attributes.slug} textDecoration="none" _hover={{ textDecoration: 'none' }}>
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
                    </Box>
                </WrapItem>
            )}
        </>
    );
}

export default Line;