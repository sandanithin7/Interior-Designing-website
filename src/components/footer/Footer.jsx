import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <h2 className="logo">INTERIOR<span className="logo-dot">.</span></h2>
          <p className="brand-tagline">Crafting spaces that tell your story</p>
          
          <div className="social-links">
            <a href="#" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="social-icon" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin className="social-icon" /></a>
            <a href="#" aria-label="Pinterest"><FaPinterest className="social-icon" /></a>
          </div>
          
          <div className="contact-info">
            <p><strong>Greater Noida, Uttar Pradesh, India</strong></p>
            <p>+91 123456789</p>
            <p>hello@interior.tcj</p>
          </div>
        </div>

        {/* Links Columns */}
        <div className="links-column">
          <h3 className="column-title">Navigation</h3>
          <ul className="footer-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="links-column">
          <h3 className="column-title">Services</h3>
          <ul className="footer-menu">
            <li><a href="#">Interior Design</a></li>
            <li><a href="#">Space Planning</a></li>
            <li><a href="#">Custom Furniture</a></li>
            <li><a href="#">Lighting Design</a></li>
            <li><a href="#">Consultation</a></li>
          </ul>
        </div>

        <div className="links-column">
          <h3 className="column-title">Legal</h3>
          <ul className="footer-menu">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="newsletter-column">
          <h3 className="column-title">Stay Updated</h3>
          <p className="newsletter-text">Subscribe to our newsletter for design insights</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          &copy; {new Date().getFullYear()} TCJ INTERIOR DESIGN. All rights reserved.
        </div>
        <div className="payment-methods">
          <span className="payment-icon">VISA</span>
          <span className="payment-icon">MC</span>
          <span className="payment-icon">UPI</span>
          <span className="payment-icon">BTC</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;