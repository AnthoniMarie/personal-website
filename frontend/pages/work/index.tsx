import * as React from "react";
import { Heading, Divider, Wrap, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { AnimatedLogo } from "../../components/branding/AnimatedLogo";
import Line from "../../components/projects/list/Line";
import Meta from "../../components/seo/Meta";
import { API_URL } from "../../constants/misc";

const Projects = () => {
  const seoData = {
    title: "Anthoni Marie | Liste des projets réalisés",
    description:
      "Liste  des projets programmés, en cours ou terminés d'Anthoni Marie.",
    keywords:
      "anthoni marie, anthoni, marie, anthoni marie projets, développeur web, dev web, étudiant développeur, web dev, developer, epitech, développeur epitech, 42, informatique, dépannage informatique, aide informatique gagny, aide informatique paris, aide informatique région parisienne, projets informatique",
  };
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetch(API_URL + "/projects?sort=publishedAt:DESC&?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setProjects(data.data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);
  const LoadProjects = () => {
    if (isLoading || isError)
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
          }}
        >
          <AnimatedLogo h="10vmin" pointerEvents="none" />
        </div>
      );
    else
      return (
        <Wrap spacing="30px" marginTop="5">
          {projects && <Line data={projects} />}
        </Wrap>
      );
  };
  return (
    <>
      <Meta data={seoData} />
      <Container maxW={"7xl"} p="12">
        <Heading as="h2" marginTop="5">
          Derniers projets
        </Heading>
        <Divider marginTop="5" />
        <LoadProjects />
      </Container>
    </>
  );
};
export default Projects;
