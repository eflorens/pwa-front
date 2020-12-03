import React from 'react';
import Toolbar from "../Toolbar/Toolbar";
import Login from "../Login/Login"
import Container from "react-bootstrap/Container";
import Profil from "../Profile/Profile"
import UploadPhotoComponant from '../Photo/Upload_photo/UploadPhoto';

function App() {
    return (
        <>
            <Toolbar/>
            <Container>
                <Login/>
            </Container>
            <Profil/>
            <UploadPhotoComponant/>
        </>
    );
}

export default App;
