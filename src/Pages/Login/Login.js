import React from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <Form className="form my-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email or Phone number</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>

                <Button className="login-button" type="submit">
                    Login
                </Button>

                <div>Or</div>

                <Button onClick={signInUsingGoogle} className="form-button" type="">
                    Sign in Using Google
                </Button>
                <p><small>By continuing, you agree to our conditions and privacy notice.</small></p>
                <div className="register">
                    <hr />
                    <p><small>New to Luxury Hotel?</small> </p>
                    <Button className="register-btn"><Link to="/register">Create a new account</Link></Button>
               </div>
           </Form>
             
           
        </div>
    );
};

export default Login;