import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ManageServices = () => {
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
            <h2>Manage Services</h2>
            {
                services.map(service => <div
                key={service._id}>
                    <h3>{service.name}</h3>
                    <Button onClick={()=> handleDelete(service._id)}>Delete</Button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;