import React from "react";
import { Helmet } from "react-helmet";

import aboutPage from "./about.html";
const htmlDoc = {__html: aboutPage};

const head  = () => (
    <Helmet>
        <title>About</title>
        <meta property="og:title" content="About" />
    </Helmet>
);

const About = () => {
    return <>
        { head() }
        <div dangerouslySetInnerHTML={htmlDoc} />
    </>;
};

export default {
    component: About
};