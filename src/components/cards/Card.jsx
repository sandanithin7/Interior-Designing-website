import React from 'react';
import './Card.css';
import { FaGem, FaCouch, FaTags, FaStar, FaArrowRight } from 'react-icons/fa';

const Card = () => {
  return (
    <section className="card-section">
      <div className="card-header">
        <h2 className="card-title">ELEVATE YOUR SPACE</h2>
        <p className="card-subtitle">
          Premium design solutions tailored to your vision
        </p>
      </div>

      <div className="card-container">
        {/* Card 1 */}
        <div className="card luxury-card">
          <div className="card-icon-container">
            <FaGem className="card-icon" />
          </div>
          <div className="card-content">
            <h3>LUXURY EXPERIENCE</h3>
            <p>
              Bespoke interior solutions with premium materials and exclusive designer collaborations.
            </p>
            <div className="card-features">
              <span>• Custom Fabrication</span>
              <span>• Smart Home Integration</span>
              <span>• Premium Materials</span>
            </div>
          </div>
          <a href="#" className="card-link">
            EXPLORE <FaArrowRight className="arrow-icon" />
          </a>
        </div>

        {/* Card 2 */}
        <div className="card quality-card">
          <div className="card-icon-container">
            <FaCouch className="card-icon" />
          </div>
          <div className="card-content">
            <h3>CURATED QUALITY</h3>
            <p>
              Hand-selected furnishings from world-class artisans and sustainable manufacturers.
            </p>
            <div className="card-features">
              <span>• 10-Year Warranty</span>
              <span>• Eco-Friendly Options</span>
              <span>• Lifetime Support</span>
            </div>
          </div>
          <a href="#" className="card-link">
            DISCOVER <FaArrowRight className="arrow-icon" />
          </a>
        </div>

        {/* Card 3 */}
        <div className="card value-card">
          <div className="card-icon-container">
            <FaTags className="card-icon" />
          </div>
          <div className="card-content">
            <h3>EXCEPTIONAL VALUE</h3>
            <p>
              Transparent pricing with flexible financing options for every budget.
            </p>
            <div className="card-features">
              <span>• Price Match Guarantee</span>
              <span>• 0% Financing</span>
              <span>• Free Consultations</span>
            </div>
          </div>
          <a href="#" className="card-link">
            LEARN MORE <FaArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;