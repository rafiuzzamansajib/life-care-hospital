import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark p-2" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Life Care<br />Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="header-link" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="header-link" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="header-link" as={HashLink} to="/home#specialist">Doctors</Nav.Link>
                        <Nav.Link className="header-link" as={HashLink} to="/home#contact">Contact Us</Nav.Link>
                            {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} className="header-link" to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                        <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;