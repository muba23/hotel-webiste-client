import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res=>res.json())
            .then(data=> setService(data));
    },[])
    return (
        <div>
            <h3>Details of {service.name}</h3>
            <p>This is booking: {serviceId}</p>
        </div>
    );
};

export default Booking;