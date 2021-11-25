import React from 'react';

import './About.css';


const About = () => {
    
    return (
        <div className='mt-5'>
            <h1 className='text-center'>ABOUT <span className='text-danger'>US</span></h1>
            <div className="row d-flex assets align-items-center justify-content-center my-5">
                <div className="col-md-3 my-5">
                    <div className='element'> <h1><i class="fas fa-user"></i></h1>
                        <h2>320+</h2>
                        <h2>Five Star Review</h2>
                        
                </div>
            </div>
                <div className="col-md-3">
                <div className='element'> <h1><i class="fas fa-dumbbell"></i></h1>
                        <h2>150+</h2>
                        <h2>Item Product</h2>
                        
                </div>
            </div>
                <div className="col-md-3">
                <div className='element'> <h1><i class="fas fa-person-booth"></i></h1>
                        <h2>24 Hours</h2>
                        <h2>Hot Delivery Service</h2>
                </div>
            </div>
                <div className="col-md-3">
                <div className='element'> <h1><i class="fas fa-chalkboard-teacher"></i></h1>
                        <h2>15+</h2>
                        <h2>Showroom</h2>
                        
                    </div>
            </div>
          
            </div>
            
        </div>
    );
};

export default About;