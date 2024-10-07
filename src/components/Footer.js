import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">Restaurantly</span>
            </a>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street, New York, NY 535022</p>
              <p><strong>Phone:</strong> +1 5589 55488 55</p>
              <p><strong>Email:</strong> info@example.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news!</p>
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="container text-center mt-4">
        <p>© Restaurantly - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
