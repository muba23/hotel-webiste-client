import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Service information added successfully!!');
                reset();
            }
        })   
    }
    return (
        <div className="addService">
            <small style={{color: 'grey'}}>***Only admin can add new services</small>
            <h2>Add a new service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Service name" />
                <input {...register("capacity")} placeholder="Capacity" />
                <input {...register("size")} placeholder="Size"/>
                <input {...register("view")} placeholder="View" />
                <input {...register("img")} placeholder="Image URL"/>
                <input className="btn" type="submit" />
            </form>
        </div>
    );
};

export default AddService;