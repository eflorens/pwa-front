import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg'

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
    </Navbar>
);


export default toolbar;