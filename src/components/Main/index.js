import React from "react";
import { Container } from "react-bootstrap";

const Main = ({ children }) => {
    return <main className="d-flex flex-column flex-grow-1">
        <Container className="d-flex flex-column flex-grow-1 mt-0">
            { children }
        </Container>
    </main>
};

export default Main;