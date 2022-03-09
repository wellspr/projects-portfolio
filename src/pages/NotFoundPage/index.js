import React from "react";
import { Helmet } from "react-helmet";

const head  = () => {
    return (
        <Helmet>
            <title>404 Error</title>
            <meta property="og:title" content="404 Error" />
        </Helmet>
    );
};

const NotFoundPage = ({ staticContext = {} }) => {

    staticContext.notFound = true;
    
    return <>
        { head() }
        <h1>404 Error.</h1>
        <p>We could not find that resource...</p>
    </>;
};

export default {
    component: NotFoundPage
};