import * as React from "react";
import Head from "next/head";

export default function Meta(data: {
  data: { title: any; description: any; keywords: any };
}) {
  const title = data.data.title;
  const description = data.data.description;
  const keywords = data.data.keywords;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anthoni_marie" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image:src"
          content="/static/images/logo-black.png"
        />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content="Site Web" />
        <meta property="og:url" content="https://anthoni-marie.fr" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/images/logo-black.png" />
      </Head>
    </>
  );
}
