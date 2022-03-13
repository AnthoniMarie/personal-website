import * as React from "react"
import {
    Heading,
    Divider,
    Wrap,
    Container,
} from '@chakra-ui/react';
import {useEffect, useState} from "react";

import { AnimatedLogo } from "../../components/branding/AnimatedLogo"
import Navbar from "../../components/partials/Navbar"
import Footer from "../../components/partials/Footer"
import Card from "../../components/blog/list/Card";
import Meta from "../../components/seo/Meta";

import {API_URL} from "../../constants/misc";

const Blog = () => {
        const seoData = {
            title: "Anthoni Marie | Blog",
            description: "Profitez d'articles rédigés par Anthoni Marie sur l'informatique et bien d'autres choses !",
            keywords: "anthoni marie, anthoni, marie, anthoni marie blog, développeur web, dev web, étudiant développeur, web dev, developer, epitech, développeur epitech, 42, informatique, dépannage informatique, aide informatique gagny, aide informatique paris, aide informatique région parisienne, blog informatique, blog développeur web, blog développeur informatique"
        }
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
                    setIsError(true);
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
            <Meta data={seoData}/>
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