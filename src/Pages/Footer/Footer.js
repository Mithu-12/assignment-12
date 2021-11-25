import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
             <footer className="footer-section bg-dark py-5 mt-5">
        <div className="container text-white d-flex justify-content-lg-between">
          <div className="footer-items">
            <div className="fotter-details d-lg-flex py-4">
              <h4>Download Now</h4>
              <h4 className="ms-lg-4">Ragistration Now</h4>
            </div>
            <div className=" d-lg-flex">
              <p className="me-4">About</p>
              <p>Pricing</p>
              <p className="me-4">Futured</p>
              <p className="me-4">Carears</p>
              <p className="me-4">Help</p>
              <p className="me-4">Policy</p>
            </div>
            <div className="copyright pt-lg-3">
              <p>© 2021 Tizzy. All rights reserved</p>
            </div>
          </div>
        </div>
        </footer>
        </div>
    );
};

export default Footer;