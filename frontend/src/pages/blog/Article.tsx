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
import ArticleContent from "../../components/blog/article/ArticleContent";
import {API_URL} from "../../constants/misc";
import {useParams} from "react-router-dom";

const Article = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const fetchData = () => {
        fetch(API_URL + '/api/blogs?filters[slug][$eq]='+slug)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setArticle(data.data[0].attributes);
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
    const LoadArticle = () => {
        if (isLoading)
            return (<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}><AnimatedLogo h="10vmin" pointerEvents="none"/></div>)
        else
            return (
                <ArticleContent data={article}/>
            )
    }
    return (
        <>
            <Navbar/>
            <Container maxW={'7xl'} p="12">
                <Heading as="h2" marginTop="5">
                    Article
                </Heading>
                <LoadArticle/>
            </Container>
            <Footer/>
        </>
    );
};
export default Article;