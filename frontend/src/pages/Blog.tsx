import * as React from "react"
import {
    Box,
    Heading,
    Divider,
    Wrap,
    Container,
} from '@chakra-ui/react';
import {useEffect, useState} from "react";

import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { AnimatedLogo } from "../components/branding/AnimatedLogo"
import Navbar from "../components/partials/Navbar"
import Footer from "../components/partials/Footer"
import IndividualBlog from "../components/blog/list/IndividualBlog";

const Blog = () => {
        const [blogs, setBlogs] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [isError, setIsError] = useState(false);
        const fetchData = () => {
            fetch('http://localhost:1337/api/blogs?populate=*')
                .then((response) => response.json())
                .then((data) => {
                    setIsLoading(false);
                    setBlogs(data.data);
                    //console.log(JSON.stringify(data.data[0].attributes.title));
                })
                .catch((error) => {
                    setIsLoading(false);
                    setIsError(true);
                    console.log(error);
                });
        };
        useEffect(() => {
            fetchData();
        }, []);
        if (isLoading)
            return <div>Loading...</div>;
    return (
        <>
        <Navbar/>
            <Container maxW={'7xl'} p="12">
                    <Heading as="h2" marginTop="5">
                        Derniers articles
                    </Heading>
                    <Divider marginTop="5" />
                    <Wrap spacing="30px" marginTop="5">
                        {blogs && <IndividualBlog data={blogs}/>}
                    </Wrap>
                </Container>
        <Footer/>
        </>
    );
};
export default Blog;