import React from 'react';
import './SideMatter.css';
import { FaArrowRight } from 'react-icons/fa';
import image from '../image/banner2.png'; // Ensure the path is correct

const SideMatter = () => {
  return (
    <div className="side-matter-container">
      <div className="side-matter-content">
        
        {/* Left Side - Text */}
        <div className="side-matter-text">
          <h2 className="side-matter-title">SKETCH LUXURY INTERIOR DESIGN</h2>
          <p className="side-matter-description">
            Bring your dream to life with one-on-one design help & hand-picked products tailored to your style, space, and budget.
          </p>
          <div className="side-matter-buttons">
            <button className="btn btn-primary">
              Get Started <FaArrowRight />
            </button>
            <button className="btn btn-outline-primary">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="side-matter-image">
          <img
            src={image}
            alt="Luxury Interior Design Sketch"
          />
        </div>

      </div>
    </div>
  );
};

export default SideMatter;
