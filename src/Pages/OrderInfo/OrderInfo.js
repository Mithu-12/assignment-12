import React from 'react';
import './OrderInfo.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import useFirebase from '../../Hook/useFirebase';
import { useParams } from 'react-router';

const OrderInfo = () => {
    const {id} = useParams()
    const {user} = useFirebase();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://rocky-dawn-87593.herokuapp.com/orderInfo', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
            }
        })
    }
    return (
        <div className='container add-service mt-5'>
            <h3>Please Confirrm Order</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input disabled {...register("name", { required: true, maxLength: 20 })} value={user?.displayName} required/>
                <input disabled {...register("email", { required: true, maxLength: 20 })} value={user?.email} required/>
                <textarea {...register("Address")} placeholder="Address" required/>
                <input type="number" {...register("phoneNumber")} placeholder="Phone Number" required/>
                <input {...register("image")} value={id?.img} required/>
                 <input type="submit" />
            </form>
        </div>
    );
};

export default OrderInfo;
