import * as React from "react"
import {
    Container,
} from '@chakra-ui/react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import { AnimatedLogo } from "../../components/branding/AnimatedLogo"
import Navbar from "../../components/partials/Navbar"
import Footer from "../../components/partials/Footer"
import ProjectContent from "../../components/projects/project/ProjectContent";
import {API_URL} from "../../constants/misc";

const Project = () => {
    const { slug } = useParams();
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const fetchData = () => {
        fetch(API_URL + '/api/projects?filters[slug][$eq]='+slug)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setProject(data.data[0].attributes);
            })
            .catch((error) => {
                setIsError(true);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    const LoadProject = () => {
        if (isLoading)
            return (<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}><AnimatedLogo h="10vmin" pointerEvents="none"/></div>)
        else
            return (
                <ProjectContent data={project}/>
            )
    }
    return (
        <>
            <>
                <Navbar/>
                <Container maxW={'4xl'} py={12}>
                    <LoadProject/>
                </Container>
                <Footer/>
            </>
        </>
    );
};
export default Project;