import React from 'react';
import Toolbar from "../Toolbar/Toolbar";
import Login from "../Login/Login"
import Container from "react-bootstrap/Container";
import Profil from "../Profile/Profile"

function App() {
    return (
        <>
            <Toolbar/>
            <Container>
                <Login/>
            </Container>
            <Profil/>
        </>
    );
}

export default App;
