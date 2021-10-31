import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import SpecialOffers from '../../SpecialOffers/SpecialOffers';
import './Home.css'
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div id="home">
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
            {/* <Services></Services> */}
            <SpecialOffers></SpecialOffers>
            <Contact></Contact>
            
            
        </div>
    );
};

export default Home;