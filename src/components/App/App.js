import React from 'react';
import Toolbar from "../Toolbar/Toolbar";
import Login from "../Login/Login"
import Container from "react-bootstrap/Container";

function App() {
    return (
        <>
            <Toolbar/>
            <Container>
                <Login/>
            </Container>
        </>
    );
}

export default App;
