import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, name,capacity, img } = service;
    return (
        <div className="service-container">
            <div className="single-service my-3">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>Capacity: {capacity}</p>
                <Link to={`/booking/${_id}`}><Button className="mb-2" style={{backgroundColor:'green', border: '1px solid green'}}>Details</Button></Link>
                <Link to={`/bookOrder/${_id}`}><Button>Book the Room</Button></Link>
            </div>
        </div>
    );
};

export default Service;