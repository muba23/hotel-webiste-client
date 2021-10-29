import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mb-3 newsletter">
                <h2>Newsletter</h2>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Control className="text-area" type="" placeholder="" />
                </Form.Group>
                <Button className="button" type="submit">
                    Subscribe
                </Button>
            </div>
        </div>
    );
};

export default Home;