import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <img src="/assets/img/hero-bg.jpg" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>Welcome to <span>Restaurantly</span></h2>
            <p>Delivering great food for more than 18 years!</p>
            <div className="mt-4">
              <a href="#menu" className="cta-btn">Our Menu</a>
              <a href="#book-a-table" className="cta-btn">Book a Table</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
