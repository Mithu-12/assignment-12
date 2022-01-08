import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from './../Product/Product';




const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://rocky-dawn-87593.herokuapp.com/sunglass')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    return (
        <div>
             <div className="container my-5 d-block" >
                <h1 className='text-center'>MAKE<span className='text-danger'> YOUR PERFECT EYES</span></h1>
            <Row xs={1} md={3} className="g-4 my-5">
                {
                        products.slice(0, 6).map(product => <Product
                            product={product}
                            key = {product.id}
                        ></Product>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Products;