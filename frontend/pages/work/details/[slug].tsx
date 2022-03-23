import * as React from "react";
import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AnimatedLogo } from "../../../components/branding/AnimatedLogo";
import ProjectContent from "../../../components/projects/project/ProjectContent";
import { API_URL } from "../../../constants/misc";

const Project = () => {
  const router = useRouter();
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(API_URL + "/api/projects?filters[slug][$eq]=" + slug)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setProject(data.data[0].attributes);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [router.isReady, router.query]);
  const LoadProject = () => {
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
    else return <ProjectContent data={project} />;
  };
  return (
    <>
      <Container maxW={"4xl"} py={12}>
        <LoadProject />
      </Container>
    </>
  );
};
export default Project;
