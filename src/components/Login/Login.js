import React, {useState} from "react";
import {Alert, Button, Card, Form} from "react-bootstrap"
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

const Login = () => {

    const auth = useAuth();
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
        auth.authLogin(email, password).then(res => console.log(res));
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
                    <Link to="/register">No account ? Create one.</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;