import React from 'react';
import './SideMatter.css';
import { FaArrowRight, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import image from '../image/banner2.png';

const SideMatter = () => {
  return (
    <div className="side-matter-container">
      <div className="side-matter-content">
        {/* Text Content - Now on the right */}
        <div className="side-matter-text">
          <span className="section-label">PREMIUM DESIGN SERVICES</span>
          <h2 className="side-matter-title">
            <span className="title-line">CRAFTING YOUR</span>
            <span className="title-line accent">VISION INTO</span>
            <span className="title-line">REALITY</span>
          </h2>
          
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p>Bespoke interior solutions tailored to your lifestyle</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p>Hand-selected premium materials and furnishings</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p>Seamless project management from concept to completion</p>
            </div>
          </div>

          <div className="side-matter-buttons">
            <button className="btn btn-primary">
              <FaCalendarAlt className="btn-icon" />
              BOOK CONSULTATION
              <FaArrowRight className="btn-icon" />
            </button>
            <a href="tel:+15551234567" className="btn btn-secondary">
              <FaPhoneAlt className="btn-icon" />
              +91 9505492525
            </a>
          </div>
        </div>

        {/* Image - Now on the left */}
        <div className="side-matter-image">
          <div className="image-frame">
            <img src={image} alt="Luxury Interior Design" />
          </div>
          <div className="image-badge">
            <span>25+</span>
            <p>Years of Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMatter;