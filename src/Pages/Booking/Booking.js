import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        fetch(`https://ghastly-skeleton-09753.herokuapp.com/services/${serviceId}`)
            .then(res=>res.json())
            .then(data=> setService(data));
    },[])
    return (
        <div className="details my-4">
            <h3 style={{color: 'blue'}}>Details of your Bookings </h3>
            <hr />
            <p>Booking for: {serviceId}</p>
            <h5>You have choosed <b>{service.name}</b></h5>
            <p>It is about {service.size} sized room and {service.capacity} can be occupied in this room easily. The whole Dhaka city can be viewed from this room. </p>
            <img src={service.img} alt="" />
            
        </div>
    );
};

export default Booking;