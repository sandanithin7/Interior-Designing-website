import React from 'react';
import './Card.css';
import { FaGem, FaCouch, FaTags, FaStar } from 'react-icons/fa';

const Card = () => {
  return (
    <section className="card-section">
      <h2 className="card-title">What We Provide</h2>
      <p className="card-subtitle">
        Bring your dream home to life with one-on-one design help & hand-picked products.
      </p>

      <div className="card-container">
        <div className="card card-left">
          <FaGem className="card-icon" />
          <h3>Luxury Facilities</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.
          </p>
          <div className="star-rating">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
          <a href="#" className="card-link">Learn More</a>
        </div>

        <div className="card card-center">
          <FaCouch className="card-icon" />
          <h3>Quality Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.
          </p>
          <div className="star-rating">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
          <a href="#" className="card-link">Learn More</a>
        </div>

        <div className="card card-right">
          <FaTags className="card-icon" />
          <h3>Affordable Price</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="star-rating">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
          <a href="#" className="card-link">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Card;
