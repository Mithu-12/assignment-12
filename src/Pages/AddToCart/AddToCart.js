import React from 'react';
import './AddToCart.css'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import OrderInfo from '../OrderInfo/OrderInfo';
import { useForm } from "react-hook-form";

const AddToCart = () => {
    const {user} = useFirebase();
    const {
        formState: { errors },
        register,
        handleSubmit,
        reset} = useForm();
    
    const {id} = useParams();
    let [addToCart, setAddToCart] = useState([]);

    useEffect(() => {
        fetch(`https://rocky-dawn-87593.herokuapp.com/sunglass/${id}`)
            .then(res => res.json())
            .then(data => {
                setAddToCart(data)
                reset(data)
            })
            
    }, [reset])

    const onSubmit = (data) => {
        console.log(data);
        data.status = 'pending';
        delete data._id
        console.log(data);
        fetch('https://rocky-dawn-87593.herokuapp.com/orderInfo', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => {
                alert("added succesfully")
                reset(res)
        })
    }

    return (
    <Container>
     <Row>
        <Col xs={12} md={6} className='mt-4'>
                    <img className='mb-3' src={addToCart?.img} style={{ height: 500, width: 500 }} alt="" />
                    <p>Description: {addToCart?.discription}</p>
        </Col>
                <Col xs={12} md={6} className='mt-4'>
                    <div>
                    <h3>Product <span className='text-danger mt-3'>Details</span></h3>
                    <h6>FrameColor: {addToCart?.FrameColor}</h6>
                    <h6>LensMaterial: {addToCart?.LensMaterial}</h6>
                    <h6>FrameMaterial: {addToCart?.FrameMaterial}</h6>
                    <h5>price: {addToCart?.price}</h5>
                   </div>
                <div className="add-service">
                <h3>Please Confirrm Order</h3>
               
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true} )} defaultValue={addToCart?.name}  />
                            
                            <textarea {...register("Address", { required: true})} placeholder="Address" />
                            
                            <input {...register("img", { required: true})} defaultValue={addToCart?.img}  />

                            <input type="number" {...register("price",{ required: true})} defaultValue={addToCart?.price} required />

                            <input {...register("email", { required: true})} defaultValue={user?.email}/>
                           
                            <input type="submit" />
                            </form>
                         </div>
             
      </Col>
    </Row>
  </Container>
    );
};

export default AddToCart;