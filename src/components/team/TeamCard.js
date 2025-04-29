import React from 'react';
import './TeamCard.css'; // Assuming the styles are in this file

// Image imports (Ensure you have correct paths)
import johnImage from '../image/men1.jpg';
import alexImage from '../image/men2.jpg';
import georgeImage from '../image/girl.jpg';

const TeamCard = () => {
  return (
    <div className="team-card-container">
      {/* Team Member 1 */}
      <div className="team-card">
        <img src={johnImage} alt="John Doe" className="team-card-image" />
        <h3>Akash</h3>
        <p className="role">Designer</p>
        <div className="rating">⭐⭐⭐⭐⭐</div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Team Member 2 */}
      <div className="team-card">
        <img src={alexImage} alt="Alex" className="team-card-image" />
        <h3>Rajesh</h3>
        <p className="role">Developer</p>
        <div className="rating">⭐⭐⭐⭐⭐</div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Team Member 3 */}
      <div className="team-card">
        <img src={georgeImage} alt="George" className="team-card-image" />
        <h3>Riya</h3>
        <p className="role">Manager</p>
        <div className="rating">⭐⭐⭐⭐⭐</div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
