import React from 'react';
import { Navbar, Container, } from 'react-bootstrap';
import LinkBar from './LinkBar';

const NavLink = ()=> {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">String Functions</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <LinkBar classDef="me-auto" />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavLink;