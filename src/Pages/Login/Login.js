import React from 'react';
import './Login.css'
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Form className="form my-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email or Phone number</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>

                <div>Or</div>

                <Button className="form-button" type="submit">
                    Sign in Using Google
                </Button>
                <p><small>By continuing, you agree to our conditions and privacy notice.</small></p>
                <div className="register">
                    <p><small>New to Luxury Hotel?</small> </p>
                    <Button className="register-btn"><Link to="/register">Create a new account</Link></Button>
               </div>
           </Form>
             
           
        </div>
    );
};

export default Login;