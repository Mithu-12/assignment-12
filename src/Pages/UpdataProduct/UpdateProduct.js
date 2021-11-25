import React from 'react';
import './UpdateProduct.css'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import useFirebase from '../../Hook/useFirebase';
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
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
        // console.log(data);
        // data.status = 'pending';
        // delete data._id
        // console.log(data);
        fetch(`https://rocky-dawn-87593.herokuapp.com/update/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => {
                alert("update succesfully")
                reset(res)
        })
    }

    return (
    <Container>
            <Row>
            
                <Col xs={12} md={6} className='mt-4'>
                <Col className='mx-auto '>
            <Card className='card-details cardHeight '>
          <Card.Img className="height-50" style={{height: 300}} variant="top" src={addToCart?.img} />
          <Card.Body>
            <Card.Title className="name">{addToCart?.name}</Card.Title>
            <Card.Text>
              <span className='text-warning'>FrameMaterial :</span> {addToCart?.FrameMaterial}
            </Card.Text>
            <Card.Text>
              <span className='text-warning text-bold'>LensMaterial :</span> {addToCart?.LensMaterial}
            </Card.Text>
            <Card.Text>
              <span className='text-warning'>Price :</span> {addToCart?.price}
            </Card.Text>
            <Card.Text>
              <span className='text-warning'>FrameColor :</span> {addToCart?.FrameColor}
            </Card.Text>
          </Card.Body>
        </Card> 
        </Col>  
            </Col>
         <Col xs={12} md={6} className='mt-4'>
                   
                <div className="add-service">
                <h3>Update Product</h3>
               
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true} )} defaultValue={addToCart?.name}  />
                            
                            <textarea {...register("description", { required: true})} defaultValue={addToCart?.discription} />
                            
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

export default UpdateProduct;