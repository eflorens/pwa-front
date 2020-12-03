import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg'
import Nav from "react-bootstrap/Nav"

const toolbar = (props) => (
    <Navbar bg="light">
        <Navbar.Brand>
            <img
                alt="Photobox logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            /> {' '}
            Photobox
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Profile</Nav.Link>
            <Nav.Link href="#addPhoto">Add photo</Nav.Link>
        </Nav>
    </Navbar>
);


export default toolbar;