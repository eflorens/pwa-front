import React from "react";
import {Button, Card, Form} from "react-bootstrap"

const login = () => {
    return (
        <div className="col-sm-12 col-md-8 ml-auto mr-auto mt-4">
            <Card>
                <Card.Body>
                    <h2 className="text-center">Log In</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required/>
                        </Form.Group>
                        <Button className="w-100 mt-2" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Card.Body></Card>
        </div>
    );
}

export default login;