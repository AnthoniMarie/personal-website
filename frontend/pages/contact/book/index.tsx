import * as React from "react";
import { AspectRatio } from "@chakra-ui/react";

import Meta from "../../../components/seo/Meta";

export default function Contact() {
  const seoData = {
    title: "Anthoni Marie | Me contacter",
    description:
      "N'hésitez plus, contactez Anthoni Marie pour mener à bien votre projet informatique/web ou de digitalisation de votre entreprise!",
    keywords:
      "anthoni marie, anthoni, marie, anthoni marie contacter, anthoni marie téléphone, anthoni marie numéro, contacter anthoni marie, digitalisation société, digitalisation, digitalisation entreprise, développeur web, dev web, étudiant développeur, web dev, developer, epitech, développeur epitech, 42, informatique, dépannage informatique, aide informatique gagny, aide informatique paris, aide informatique région parisienne",
  };
  return (
    <>
      <Meta data={seoData} />
      <AspectRatio maxW="100%" ratio={1}>
        <iframe
          title="Prise de rendez-vous"
          src="https://anthonimarieplanification.setmore.com"
          allowFullScreen
        />
      </AspectRatio>
    </>
  );
}
