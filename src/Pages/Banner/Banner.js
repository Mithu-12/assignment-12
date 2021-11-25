import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;