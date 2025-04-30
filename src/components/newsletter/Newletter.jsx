import React from "react";
import './Newletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">Join Our Newsletter</h2>
      <p className="newsletter-description">
        Stay updated with our latest news, offers, and exclusive content. No spam, promise!
      </p>
      <div className="newsletter-form">
        <input 
          type="email" 
          placeholder="Your best email address" 
          className="newsletter-input" 
        />
        <button className="newsletter-button">
          <span>Subscribe Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
      <div className="newsletter-privacy">
        <input type="checkbox" id="privacy-check" defaultChecked />
        <label htmlFor="privacy-check">I agree to the privacy policy</label>
      </div>
    </div>
  );
};

export default Newsletter;