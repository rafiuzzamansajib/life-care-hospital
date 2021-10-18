import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark p-4" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    <Navbar.Brand href="#home">Genius</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="header-link"  to="/home#home">Home</Nav.Link>
                        <Nav.Link className="header-link"  to="/home#services">Services</Nav.Link>
                        <Nav.Link className="header-link"  to="/home#specialist">Doctors</Nav.Link>
                        <Nav.Link className="header-link"  to="">About Us</Nav.Link>
                        <Nav.Link className="header-link"  to="">Contact Us</Nav.Link>
                            <Button variant="light">Logout</Button>
                            <Nav.Link className="header-link" to="/login">Login</Nav.Link>
                        <Navbar.Text>
                            Signed in as:
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;