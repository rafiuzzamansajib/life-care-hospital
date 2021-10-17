import React from 'react';
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
                        <Nav.Link  to="/home#home">Home</Nav.Link>
                        <Nav.Link  to="/home#services">Services</Nav.Link>
                        <Nav.Link  to="/home#specialist">Specialist</Nav.Link>
                        <Nav.Link  to="">About Us</Nav.Link>
                        <Nav.Link  to="">Contact Us</Nav.Link>
                            <Button variant="light">Logout</Button>
                            <Nav.Link to="/login">Login</Nav.Link>
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