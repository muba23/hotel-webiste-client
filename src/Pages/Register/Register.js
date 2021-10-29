import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div>
            <Form className="form my-5">
                <h2 className="mb-3">Create account</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile number or email</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Re-enter password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                <Button className="continue-button" type="submit">
                    Continue
                </Button>
                <p><small>By continuing, you agree to our conditions and privacy notice.</small></p>
                <div className="register">
                    <p><small>Already have an account?</small> </p>
                    <Button className="login-btn"><Link to="/login">Sign In</Link></Button>
               </div>
           </Form>
        </div>
    );
};

export default Register;