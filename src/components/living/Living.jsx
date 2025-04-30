import React from 'react';
import './Living.css';
import CountUp from 'react-countup';
import { FaTrophy, FaHeart, FaHistory } from 'react-icons/fa';
import livingRoomImage from '../image/hero.png'; // Update path as needed

const Living = () => {
  return (
    <div className="living-section">
      {/* Background Elements */}
      <div className="living-bg-pattern"></div>
      <div className="living-bg-overlay"></div>

      {/* Content Container */}
      <div className="living-container">
        {/* Text Content */}
        <div className="living-content">
          <span className="section-tag">DESIGN PHILOSOPHY</span>
          <h2>
            <span className="title-line">Redefining</span>
            <span className="title-line accent">Living Spaces</span>
            <span className="title-line">Through Design</span>
          </h2>
          
          <p className="living-description">
            We transform ordinary rooms into extraordinary experiences through intentional design, premium materials, and innovative space planning.
          </p>

          {/* Stats with Icons */}
          <div className="living-stats">
            <div className="stat-card">
              <div className="stat-icon-container">
                <FaHistory className="stat-icon" />
              </div>
              <div className="stat-content">
                <h3><CountUp end={15} duration={2} />+</h3>
                <p>Years Mastering Design</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-container">
                <FaHeart className="stat-icon" />
              </div>
              <div className="stat-content">
                <h3><CountUp end={350} duration={3} />+</h3>
                <p>Transformed Spaces</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-container">
                <FaTrophy className="stat-icon" />
              </div>
              <div className="stat-content">
                <h3><CountUp end={34} duration={2.5} /></h3>
                <p>Design Awards Won</p>
              </div>
            </div>
          </div>

          <button className="living-cta">
            BEGIN YOUR DESIGN JOURNEY
            <span className="cta-arrow">→</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="living-image-container">
          <img src={livingRoomImage} alt="Modern Living Room" className="living-image" />
          <div className="image-badge">
            <span>Featured</span>
            <p>2023 Design Award Winner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Living;