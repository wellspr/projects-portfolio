import "./index.css";

// React
import React, { useState, useEffect } from "react";

// Redux
// import { connect } from "react-redux";

// Local imports
import Section, { BackToTop, Content, NextSection } from "../../components/Section";

import { Helmet } from "react-helmet";

const head  = () => {
    return (
        <Helmet>
            <title>Home</title>
            <meta property="og:title" content="Home" />
        </Helmet>
    );
};

const Home = () => {
    const renderHomePage = () => {
        return (
            <div 
                className="d-flex flex-column justify-content-center align-items-center h-100"
                style={{ position: "relative" }}
                >

                <Section 
                    id="openning" 
                    fitScreen={true}
                    >
                    <Content>
                        <h1>Projects Portfolio</h1>

                        <p>Web Development</p>
                    </Content>
                    <NextSection next="#other-section" />
                </Section>

                <Section 
                    id="other-section" 
                    fitScreen={true}
                    >
                    <Content>
                        <h1>Another Section</h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum felis eu ultricies pretium. Mauris sit amet eros consectetur, hendrerit ante sit amet, maximus odio. Quisque ut efficitur augue, sed luctus velit. Pellentesque rutrum sem ex, nec condimentum risus euismod sed. Nam ex dolor, dignissim sed mollis vel, sodales sed eros. Pellentesque arcu enim, feugiat ac enim pulvinar, fermentum congue justo. Vivamus rutrum dolor id convallis blandit. Sed aliquam in enim non vehicula. Sed eget laoreet dui. Ut viverra eget quam ac aliquet. Sed eu nisi ipsum. 
                        </p>
                    </Content>
                </Section>

                <BackToTop />

            </div>
        );
    };

    return <>
        { head() }
        { renderHomePage() }
    </>
};

// const mapStateToProps = state => {
//     return {};
// };

// const loadData = store => {
//     return store.dispatch(fetchPosts());
// };

export default {
    // loadData,
    // component: connect(mapStateToProps, { fetchPosts })(Home)
    component: Home
};