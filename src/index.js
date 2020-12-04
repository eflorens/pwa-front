import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import AuthProvider from "./contexts/AuthContext";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import {Container} from "react-bootstrap";
import UploadPhotoComponant from './components/Photo/Upload_photo/UploadPhoto'


const isAuthenticated = () => {
    return localStorage.getItem('token') != null;
}

ReactDOM.render(
    <AuthProvider>
        <BrowserRouter>
            <Container>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/upload" component={UploadPhotoComponant}/>
                    <Route render={(e) => {
                        console.log(e)
                        if (isAuthenticated()) {
                            if (e.location.pathname === '/upload') {
                                return <Redirect to="/upload"/>
                            } else {
                                return <Redirect to="/home"/>;
                            }
                        } else {
                            return <Redirect to="/login"/>;
                        }
                    }}/>
                </Switch>
            </Container>
        </BrowserRouter>
    </AuthProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
