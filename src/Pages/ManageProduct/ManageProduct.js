import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://rocky-dawn-87593.herokuapp.com/sunglass')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const removeItem = (id) => {
        const proced = window.confirm("Are you sure you want to remove")
        if (proced) {
            console.log(id);
            fetch(`https://rocky-dawn-87593.herokuapp.com/sunglass/${id}`, {
              method: "DELETE",
              headers: {'content-type': 'application/json'}
            })
              .then(res => res.json())
                .then(data => {
                  console.log(data);
                  if (data.deletedCount) {
                    alert('Deleted')
                  const remaining = products.filter(product => product._id !== id)
                  setProducts(remaining)
                }
                  
                })
         
        }
              
  }
    return (
        <div>
             <div className="container my-5 d-block" >
                <h1 className='text-center'>MANAGE<span className='text-danger'> ALL PRODUCT</span></h1>
            <Row xs={1} md={3} className="g-4 my-5">
            {
                    products.map(product => (
                        <Col className='mx-auto '>
                        <Card className='card-details cardHeight '>
                          <Card.Img variant="top" src={product?.img} />
                          <Card.Body>
                            <Card.Title className="name">{product?.name}</Card.Title>
                            <Card.Text>
                              <span className='text-warning'>FrameMaterial :</span> {product?.FrameMaterial}
                            </Card.Text>
                            <Card.Text>
                              <span className='text-warning text-bold'>LensMaterial :</span> {product?.LensMaterial}
                            </Card.Text>
                            <Card.Text>
                              <span className='text-warning'>Price :</span> {product?.price}
                            </Card.Text>
                            <Card.Text>
                              <span className='text-warning'>FrameColor :</span> {product?.FrameColor}
                            </Card.Text>
                                    <Link to={`/updateProduct/${product?._id}`}><button className='btn btnStyle'>Update</button></Link>
                                    <button onClick={() =>  removeItem(product._id)}
                                    className="  btn ms-3 btn-warning">Remove
                                    </button>
                          </Card.Body>
                        </Card>
                      </Col>

                    ))
                }
            </Row>
            </div>
        </div>
    );
};

export default ManageProduct;
