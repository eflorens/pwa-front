import React, {useState} from "react";
import {Alert, Button, Card, Form} from "react-bootstrap"
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";

const Register = () => {

    const auth = useAuth();
    let history = useHistory();
    const {register, handleSubmit, errors} = useForm();
    const [state, setState] = useState({message: '', status: ''})

    /**
     * Launch register request when form data is valid.
     * @param data the data contained in the form.
     */
    const onSubmit = (data) => {
        const {username, email, password} = data;
        auth.authRegister(username, email, password).then(
            res => {
                const status = res.status;
                switch (status) {
                    case 201:
                        setState({message: 'Your account was created successfully', status: 'success'})
                        break;
                    default:
                        setState({message: 'Internal server error, your account couldn\'t be created', status: 'danger'})
                        break;
                }

                setTimeout(() => {
                    history.push("/login")
                }, 3000)
            }
        )
    }

    /**
     * Validate a given email.
     * @param value the email to validate
     * @returns {boolean} returns true if the email is valid, otherwise false.
     */
    const validateEmail = (value) => {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
    }

    let alert = null;
    if (state.message !== '') {
        alert = (
            <Alert className="col-sm-12 col-md-8 mt-4 ml-auto mr-auto" variant={state.status}>
                {state.message}
            </Alert>
        )
    }

    return (
        <div>
            {alert}
            <Card className="col-sm-12 col-md-8 mt-4 ml-auto mr-auto">
                <Card.Body>
                    <h2 className="text-center">Register</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group id="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text"
                                          name="username"
                                          value={register.username}
                                          ref={register({required: true, minLength: 3, maxLength: 25})}
                                          isInvalid={errors.username}
                                          required/>
                            <Form.Control.Feedback type="invalid">
                                {errors.username && errors.username.type === "minLength" && "The username must at least 3 characters long."}
                                {errors.username && errors.username.type === "maxLength" && "The username must not exceed 25 characters."}
                                {errors.username && errors.username.type === "required" && "The username field is required."}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text"
                                          name="email"
                                          value={register.email}
                                          ref={register({
                                              required: true,
                                              maxLength: 320,
                                              validate: value => validateEmail(value)
                                          })}
                                          isInvalid={errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email && errors.email.type === "maxLength" && "The email must not exceed 320 characters."}
                                {errors.email && errors.email.type === "required" && "The email field is required."}
                                {errors.email && errors.email.type === "validate" && "The email format is invalid."}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          name="password"
                                          value={register.password}
                                          ref={register({required: true, minLength: 8, maxLength: 30})}
                                          isInvalid={errors.password}
                                          required/>
                            <Form.Control.Feedback type="invalid">
                                {errors.password && errors.password.type === "minLength" && "The password must at least 8 characters long."}
                                {errors.password && errors.password.type === "maxLength" && "The password must not exceed 30 characters."}
                                {errors.password && errors.password.type === "required" && "The password field is required."}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit" className="w-100 mt-2">
                            Register
                        </Button>
                    </Form>
                    <Link to="/login">Back to login.</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Register;