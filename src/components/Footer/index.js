import React from "react";
import { Container } from "react-bootstrap";
import { appBrandName } from "../../config";
import { NavlinkContent } from "../AppNavbar";
import Copy from "./Copy";
import { FaGithub } from "react-icons/fa";

const Footer = () => <footer>
    <Container 
        className="d-flex justify-content-evenly align-items-center my-2"
        style={{ fontSize: "0.75rem" }}
        >
        <Copy appBrandName={appBrandName()} />
        <div><a href="https://github.com/wellspr/create-ssr-react-app"><FaGithub color="black" /></a></div>
        <div className="d-flex"><NavlinkContent fontColor={"black"} /></div>
    </Container>
</footer>;

export default Footer;