import React from 'react';
import Toolbar from "../Toolbar/Toolbar";
import Login from "../Login/Login"
import PhotoFeed from "../Photo_feed/PhotoFeed"

function App() {
    return (
        <div className="App">
            <Toolbar/>
            <Login/>
            <PhotoFeed />
        </div>
    );
}

export default App;
