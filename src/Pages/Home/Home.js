import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ReviewHome from './../ReviewHome/ReviewHome';
import Offer from './../Offer/Offer';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <Offer></Offer>
            <ReviewHome></ReviewHome>
        </div>
    );
};

export default Home;