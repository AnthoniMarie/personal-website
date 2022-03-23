import * as React from "react";
import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AnimatedLogo } from "../../../components/branding/AnimatedLogo";
import ArticleContent from "../../../components/blog/article/ArticleContent";

import { API_URL } from "../../../constants/misc";

const Article = () => {
  const router = useRouter();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(API_URL + "/api/blogs?filters[slug][$eq]=" + slug)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setArticle(data.data[0].attributes);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [router.isReady, router.query]);
  const LoadArticle = () => {
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
    else return <ArticleContent data={article} />;
  };
  return (
    <>
      <Container maxW={"4xl"} py={12}>
        <LoadArticle />
      </Container>
    </>
  );
};
export default Article;
