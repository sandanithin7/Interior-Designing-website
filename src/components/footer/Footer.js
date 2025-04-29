import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Interior</h2>
          <p>Greater Noida, Uttar Pradesh, India</p>
          <p>&copy; 2024 TCJ. All rights reserved</p>
        </div>

        <div className="footer-links">
          <h4>About Us</h4>
          <ul>
            <li>Our Story</li>
            <li>Designer</li>
            <li>Craftmanship</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li>FAQ's</li>
            <li>Shipping & Returns</li>
            <li>Care Guide</li>
            <li>Guaranty</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>+91 123456789</p>
          <p>Email</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 TCJ. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
