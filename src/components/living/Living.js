import React from 'react';
import './Living.css';
import CountUp from 'react-countup';

const Living = () => {
  return (
    <div className="living-room-section">
      <div className="living-room-content">
        <h2>Simple way to make stylish living room</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam adipisicing elit. Suscipit earum accusantium tempore nam aliquid
        </p>

        <div className="living-room-stats">
          <div>
            <h3><CountUp end={15} duration={2} /></h3>
            <p>Years of Experience</p>
          </div>
          <div>
            <h3><CountUp end={350} duration={3} /></h3>
            <p>Happy Clients</p>
          </div>
          <div>
            <h3><CountUp end={34} duration={2.5} /></h3>
            <p>Award Gained</p>
          </div>
        </div>

        <button className="contact-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default Living;
