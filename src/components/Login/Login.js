import React, {useState} from "react";
import {Alert, Button, Card, Form} from "react-bootstrap"
import AuthService from "../../services/AuthService";

const Login = () => {

    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [state, setState] = useState({email: '', password: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;

        const updatedState = {...state}
        updatedState[name] = value;

        setState(updatedState)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const {email, password} = state
        AuthService.login(email, password)
            .then(response => {
                const {userId, token} = response.data;
                localStorage.setItem("userId", userId)
                localStorage.setItem("token", token)
            })
            .catch(error => {
                let errorStatus = error.response.status;
                if (errorStatus === 401) {
                    setError("Invalid credentials.")
                }
                if (errorStatus === 500) {
                    setError("Internal server error.")
                }
                setShow(true)
            })
        ;
    }

    let alertDialog = null;
    if (show) {
        alertDialog = (
            <Alert variant="danger" className="col-sm-12 col-md-8 mt-4 ml-auto mr-auto" onClose={() => setShow(false)}
                   dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>{error}</p>
            </Alert>
        );
    }

    return (
        <div>
            {alertDialog}
            <Card className="col-sm-12 col-md-8 mt-4 ml-auto mr-auto">
                <Card.Body>
                    <h2 className="text-center">Log In</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={state.email} onChange={handleChange}
                                          required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={state.password} onChange={handleChange}
                                          required/>
                        </Form.Group>
                        <Button type="submit" className="w-100 mt-2">
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;