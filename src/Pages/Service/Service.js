import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, name,capacity, size, view, img } = service;
    return (
        <div className="service-container">
            <div className="single-service my-3">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>Capacity: {capacity}</p>
                <p>Size: {size}</p>
                <p>View: {view}</p>
                <Link to={`/booking/${_id}`}><Button>Book the Room</Button></Link>
            </div>
        </div>
    );
};

export default Service;