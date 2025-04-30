import React from 'react';
import './Article.css';
import { FaArrowRight, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
import image from '../image/design1.jpg';

const Article = () => {
  return (
    <div className="article-wrapper">
      <div className="article-container">
        {/* Diagonal Split Background */}
        <div className="diagonal-bg"></div>
        
        {/* Content */}
        <div className="article-content">
          {/* Text Block with Floating Elements */}
          <div className="article-text">
            <div className="floating-badge">
              <FaUsers className="badge-icon" />
              <span>TEAM POWER</span>
            </div>
            
            <h2>
              <span className="title-line">Collective</span>
              <span className="title-line accent">Genius</span>
              <span className="title-line">Creates Masterpieces</span>
            </h2>
            
            <p className="article-description">
              Our multidisciplinary team merges diverse perspectives to craft spaces that tell unique stories through intentional design.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <FaHandshake className="stat-icon" />
                <div>
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Collaborations</span>
                </div>
              </div>
              <div className="stat-item">
                <FaLightbulb className="stat-icon" />
                <div>
                  <span className="stat-number">97%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
            
            <button className="cta-button">
              MEET OUR TEAM
              <FaArrowRight className="arrow-icon" />
            </button>
          </div>
          
          {/* Image with Cutout Effect */}
          <div className="article-image">
            <div className="image-container">
              <img src={image} alt="Design Team" />
              <div className="image-cutout"></div>
            </div>
            <div className="image-caption">
              <span>Featured Project:</span>
              <span>Oceanview Penthouse</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;