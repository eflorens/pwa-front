import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg'
import Nav from "react-bootstrap/Nav"
import {Route} from 'react-router'
import UploadPhotoComponant from '../Photo/Upload_photo/UploadPhoto'

const Toolbar = (props) => (
    <div>
    <Route exact path="/upload" component={UploadPhotoComponant}/>
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
            <Nav.Link to="/upload" href="/upload">Add photo</Nav.Link>
        </Nav>
    </Navbar>
    </div>
);


export default Toolbar;