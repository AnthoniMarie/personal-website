import * as React from "react"
import {
    Box,
    Heading,
    Divider,
    Wrap,
    Container,
} from '@chakra-ui/react';
import {useEffect, useState} from "react";

import { ColorModeSwitcher } from "../../ColorModeSwitcher"
import { AnimatedLogo } from "../../components/branding/AnimatedLogo"
import Navbar from "../../components/partials/Navbar"
import Footer from "../../components/partials/Footer"
import Card from "../../components/blog/list/Card";

import {API_URL} from "../../constants/misc";

const Blog = () => {
        const [blogs, setBlogs] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [isError, setIsError] = useState(false);
        const fetchData = () => {
            fetch(API_URL + '/api/blogs?populate=*')
                .then((response) => response.json())
                .then((data) => {
                    setIsLoading(false);
                    setBlogs(data.data);
                })
                .catch((error) => {
                    //setIsLoading(false);
                    setIsError(true);
                    console.log(error);
                });
        };
        useEffect(() => {
            fetchData();
        }, []);
        const LoadBlogs = () => {
            if (isLoading)
                return (<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}><AnimatedLogo h="10vmin" pointerEvents="none"/></div>)
            else
                return (
                    <Wrap spacing="30px" marginTop="5">
                        {blogs && <Card data={blogs}/>}
                    </Wrap>
                )
        }
    return (
        <>
        <Navbar/>
            <Container maxW={'7xl'} p="12">
                    <Heading as="h2" marginTop="5">
                        Derniers articles
                    </Heading>
                    <Divider marginTop="5" />
                    <LoadBlogs/>
                </Container>
        <Footer/>
        </>
    );
};
export default Blog;