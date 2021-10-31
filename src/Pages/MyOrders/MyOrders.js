import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyOrders = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

//     useEffect(()=> {
//         fetch(`https://ghastly-skeleton-09753.herokuapp.com/services/${serviceId}`)
//            .then(res=>res.json())
//            .then(data=> setService(data));
// },[]);
    return (
        <div>
            <h2>My orders</h2>
            <hr />
            <p>Booking for: {serviceId}</p>
            <h5>You have choosed <b>{service.name}</b></h5>
            <img src={service.img} alt="" />
            
        </div>
    );
};

export default MyOrders;