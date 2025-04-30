import React from 'react';
import './TeamCard.css';
import { FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';
import johnImage from '../image/men1.jpg';
import alexImage from '../image/men2.jpg';
import georgeImage from '../image/girl.jpg';

const TeamCard = () => {
  const teamMembers = [
    {
      name: "Akash Patel",
      role: "Lead Designer",
      image: johnImage,
      rating: 5,
      description: "Specializes in modern minimalist designs with 8 years of industry experience.",
      social: {
        linkedin: "#",
        twitter: "#",
        dribbble: "#"
      }
    },
    {
      name: "Rajesh Kumar",
      role: "Senior Developer",
      image: alexImage,
      rating: 5,
      description: "Full-stack developer focused on creating seamless digital experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
        dribbble: "#"
      }
    },
    {
      name: "Riya Sharma",
      role: "Project Manager",
      image: georgeImage,
      rating: 5,
      description: "Ensures projects are delivered on time and exceed client expectations.",
      social: {
        linkedin: "#",
        twitter: "#",
        dribbble: "#"
      }
    }
  ];

  return (
    <div className="team-section">
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="card-image-container">
              <img src={member.image} alt={member.name} className="team-card-image" />
              <div className="image-overlay"></div>
              <div className="social-links">
                <a href={member.social.linkedin}><FaLinkedin /></a>
                <a href={member.social.twitter}><FaTwitter /></a>
                <a href={member.social.dribbble}><FaDribbble /></a>
              </div>
            </div>
            
            <div className="card-content">
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <div className="rating">
                  {[...Array(member.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              
              <p className="description">{member.description}</p>
              
              <div className="expertise-tags">
                <span>UI/UX</span>
                <span>Branding</span>
                <span>Prototyping</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;