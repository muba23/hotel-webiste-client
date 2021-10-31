import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ManageBookings = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id =>{
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res=>res.json())
            .then(data=> {
                if(data.deletedCount){
                    alert('Deleted Successfully')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }   
                console.log(data);
            })
    }
    return (
        <div>
            <h2>Manage Your Bookings</h2>
            {
                services.map(service => <div
                key={service._id}>
                    <h4 style={{color: 'red'}}>{service.name}</h4>
                    <Button onClick={()=> handleDelete(service._id)}>Delete</Button>
                </div>)
            }
        </div>
    );
};

export default ManageBookings;