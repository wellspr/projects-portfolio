import "./index.css";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

// Reactstrap
import { 
    Container,
    Dropdown,
    Nav,
    Navbar,
    NavItem,
    NavLink,
} from "react-bootstrap";

import { useLocation } from "react-router-dom";

import { dropdownLinks } from "./dropdownLinks";
import { topNavbarLinks } from "./topNavbarLinks";
import { appBrandName } from "../../config";

// Top navbar links (show both on large and small screens)
export const NavlinkContent = ({ fontColor }) => topNavbarLinks().map(link => {
    const location = useLocation();
    const active = (location.pathname === link.path) ? true : false;
    return <Nav.Link 
        active={active}
        key={link.key}
        href={link.path}
        >
        <span style={{ color: fontColor }}>{link.label}</span>
    </Nav.Link>
});

const AppNavbar = () => {

    const location = useLocation();

    // Show on large screens as one clicks the user icon
    const DropdownContent = () => dropdownLinks().map(link => {
        return <Nav.Link 
            key={link.key}
            className="btn btn-dark text-light my-1 mx-2"
            href={link.path}
            >
            {link.label}
        </Nav.Link>
    });

    // Show only on small screens
    const DropdownContentAsNavlink = () => dropdownLinks().map(link => {
        const active = (location.pathname === link.path) ? true : false;
        return <Nav.Link 
            active={active}
            key={link.key}
            className="d-sm-none"
            href={link.path}
            >
            {link.label}
        </Nav.Link>;
    });

    const Menu = () => <React.Fragment>
        <Nav className="ms-auto">
            <NavlinkContent />
            <DropdownContentAsNavlink />
        </Nav>

        <Nav className="d-none d-sm-block" navbar>
            <Dropdown as={NavItem}
                id="app-nav-dropdown"
                align={"end"}
                >
                {false && (
                    <Dropdown.Toggle className="userDropdown" as={NavLink}>
                        {}
                    </Dropdown.Toggle>
                    )
                }
                <Dropdown.Menu>
                    <Dropdown.ItemText>
                        <span 
                            style={{ fontSize: "0.85rem" }}
                            >
                            {}
                        </span>
                    </Dropdown.ItemText>
                    <DropdownContent />
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    </React.Fragment>;

    return <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
            <Navbar.Brand href="/">{ appBrandName() }</Navbar.Brand>
            <Navbar.Toggle aria-controls="app-navbar-nav" />
            <Navbar.Collapse id="app-navbar-nav" >
                <Menu />
            </Navbar.Collapse>
        </Container>
    </Navbar>
};

export default AppNavbar;