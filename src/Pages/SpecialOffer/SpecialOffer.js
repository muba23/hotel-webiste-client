import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './SpecialOffer.css'
import img from '../../images/Services/service-6.png'

const SpecialOffer = ({specialOffer}) => {
    const {img, name, description} = specialOffer;
    return (
        <div className="offers col-lg-4 col-sm-6 col-12">
            <Card border="light" style={{ width: '18rem' }}>
                <Card.Header><img src={img} alt="" /></Card.Header>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="card-text">
                   {description}
                </Card.Text>
                </Card.Body>
                <Button>Book the offer</Button>
            </Card>
        </div>
    );
};

export default SpecialOffer;