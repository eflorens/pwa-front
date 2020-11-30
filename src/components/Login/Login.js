import React, {useState} from "react";
import {Button, Card, Form} from "react-bootstrap"
import {useAuth} from "../../contexts/AuthContext";

const Login = () => {

    const auth = useAuth();

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        const updatedState = {...state}
        updatedState[name] = value;

        setState(updatedState)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const {email, password} = state
        let res = auth.login(email, password);

        console.log(res)
    }

    return (
        <div className="col-sm-12 col-md-8 ml-auto mr-auto mt-4">
            <Card>
                <Card.Body>
                    <h2 className="text-center">Log In</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={state.email} onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={state.password} onChange={handleChange} required/>
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