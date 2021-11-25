import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const {_id, FrameColor, price,LensMaterial, name, img, FrameMaterial } = product;
  return (
    <div>
      <Col className='mx-auto '>
        <Card className='card-details cardHeight '>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="name">{name}</Card.Title>
            <Card.Text>
              <span className='text-warning'>FrameMaterial :</span> {FrameMaterial}
            </Card.Text>
            <Card.Text>
              <span className='text-warning text-bold'>LensMaterial :</span> {LensMaterial}
            </Card.Text>
            <Card.Text>
              <span className='text-warning'>Price :</span> {price}
            </Card.Text>
            <Card.Text>
              <span className='text-warning'>FrameColor :</span> {FrameColor}
            </Card.Text>
            <Link to={`/placeOrder/${_id}`}><button className='btn btnStyle'>BUY NOW</button></Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Product;