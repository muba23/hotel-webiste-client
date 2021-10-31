import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './BookOrder.css'

const BookOrder = () => {
    const { register, handleSubmit} = useForm();
    const {user} = useAuth();
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res=>res.json())
            .then(data=> setService(data));
    },[])
    const onSubmit = data => {  
        console.log(data);
    }
    return (
        <div className="book-order">
            <h4>Confirm Your Booking</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email")} />
                <input defaultValue={serviceId} {...register("service.name")} placeholder="Room ID" />
                <input placeholder="When do you want to book?"{...register("date")} />
    
                <input className="btn" type="submit" />
            </form>
        </div>
    );
};

export default BookOrder;