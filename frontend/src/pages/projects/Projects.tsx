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
import Line from "../../components/projects/list/Line";

import {API_URL} from "../../constants/misc";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const fetchData = () => {
        fetch(API_URL + '/api/projects?populate=*')
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setProjects(data.data);
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
    const LoadProjects = () => {
        if (isLoading)
            return (<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}><AnimatedLogo h="10vmin" pointerEvents="none"/></div>)
        else
            return (
                <Wrap spacing="30px" marginTop="5">
                    {projects && <Line data={projects}/>}
                </Wrap>
            )
    }
    return (
        <>
            <Navbar/>
            <Container maxW={'7xl'} p="12">
                <Heading as="h2" marginTop="5">
                    Derniers projets
                </Heading>
                <Divider marginTop="5" />
                <LoadProjects/>
            </Container>
            <Footer/>
        </>
    );
};
export default Projects;