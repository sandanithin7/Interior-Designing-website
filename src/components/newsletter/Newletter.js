// import React from 'react';
// import './Newsletter.css';
import React from "react";
import './Newletter.css';
const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
      <p className="newsletter-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed libero doloremque ab eum!
      </p>
      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email" className="newsletter-input" />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
