import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewHome = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://rocky-dawn-87593.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data));
    },[])
    return (
        <div className="mt-5">
            <div className="container my-5 d-block" >
                <h1 className='text-center'>CUSTOMER<span className='text-danger'> REVIEW ABOUT US</span></h1>
            <Row xs={1} md={3} className="g-4 my-5">
            {
                    review.map(reviews => (
                        <Col className='mx-auto '>
                        <Card className='card-details '>
                          <Card.Body>
                            <Card.Title className="name">{reviews?.name}</Card.Title>
                            <Card.Text>
                              <span className='text-warning'>Description :</span> {reviews?.Description}
                            </Card.Text>
                            <Card.Text>
                                        <span className='text-lightgrey'>Ratting: <Rating
                                    initialRating={reviews?.rate}
                                     emptySymbol="far fa-star text-warning"
                                     fullSymbol="fas fa-star text-warning"      
                                    readonly
                                /></span> {}
                            </Card.Text>
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

export default ReviewHome;