import * as React from "react"
import {Helmet, HelmetProvider} from "react-helmet-async";
import logoblack from "../../assets/images/logo-black.png";

export default function Meta(data) {
    const title = data.data.title;
    const description = data.data.description;
    const keywords = data.data.keywords;

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords} />
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@anthoni_marie"/>
                    <meta name="twitter:title" content={title}/>
                    <meta name="twitter:description" content={description}/>
                    <meta name="twitter:image:src" content={logoblack}/>
                    <meta property="og:site_name" content={title}/>
                    <meta property="og:title" content="Site Web"/>
                    <meta property="og:url" content="https://anthoni-marie.fr"/>
                    <meta property="og:locale" content="fr_FR"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content={logoblack}/>
                </Helmet>
            </HelmetProvider>
        </>
    );
}