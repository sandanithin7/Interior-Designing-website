import React from 'react';
import './Article.css';
import { FaArrowRight } from 'react-icons/fa';
import image from '../image/design1.jpg'; // Make sure this is correct

const Article = () => {
  return (
    <div className="article-wrapper">
      <div className="article-container">
        <div className="article-text">
          <h2>We Believe that a team makes any project better</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam aliquid.
          </p>
          <button className="btn-discover">
            Discover Now <FaArrowRight />
          </button>
        </div>
        <div className="article-image">
          <img src={image} alt="Teamwork" />
        </div>
      </div>
    </div>
  );
};

export default Article;
