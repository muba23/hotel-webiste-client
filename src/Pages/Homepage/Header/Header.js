import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
import './Header.css'

const Header = () => {
    return (
        <>
           <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand className="hotel-name" href="#home"><h2>Luxury Hotel</h2></Navbar.Brand>        
                    <Navbar.Toggle className="justify-content-end" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto navlink">
                        <NavLink as={HashLink} to="/home#home">Home</NavLink>
                        <NavLink as={HashLink} to="/home#services">Services</NavLink>
                        <NavLink as={HashLink} to="/home#services">Accomodation</NavLink>
                        <NavLink as={HashLink} to="/home#services">Blog</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </Nav>
                        <Navbar.Text>
                                Welcome <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
</> 
        </>
    );
};

export default Header;