import React, { useState } from 'react';
import contactImage from '../image/contact4.jpg';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="contact-container">
      {/* Diagonal split layout */}
      <div className="image-section">
        <div className="image-overlay"></div>
        <img src={contactImage} alt="Contact visual" className="contact-visual" />
        <div className="image-content">
          <h2>CONTACT</h2>
          <div className="contact-method">
            <span>✉️</span>
            <p>hello@example.com</p>
          </div>
          <div className="contact-method">
            <span>📱</span>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      <div className="form-section">
        <form onSubmit={handleSubmit} className="radial-form">
          <h3>SEND US A MESSAGE</h3>
          
          <div className="input-group floating">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className="input-group floating">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="input-group">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button type="submit" className="glow-button">
            <span>SEND</span>
            <div className="glow"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;