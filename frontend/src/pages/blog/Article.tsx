import * as React from "react"
import {
    Container,
} from '@chakra-ui/react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import { AnimatedLogo } from "../../components/branding/AnimatedLogo"
import Navbar from "../../components/partials/Navbar"
import Footer from "../../components/partials/Footer"
import ArticleContent from "../../components/blog/article/ArticleContent";
import {API_URL} from "../../constants/misc";

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
                setIsError(true);
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
            <Container maxW={'4xl'} py={12}>
                <LoadArticle/>
            </Container>
            <Footer/>
        </>
    );
};
export default Article;