import React from 'react';
import Toolbar from '../Toolbar/Toolbar'
import PhotoFeed from '../Photo/PhotoFeed/PhotoFeed'

const Home = () => {
    console.log(localStorage.getItem('token'))
    return (
        <div>
        <Toolbar/>
            <h1>Home</h1>            
            <PhotoFeed />
        </div>
    )
}

export default Home;