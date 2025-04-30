import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "LUXURY PENTHOUSE",
      location: "Miami Beach, FL",
      description: "A 5,000 sqft oceanfront penthouse with custom Italian finishes and smart home integration throughout.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      categories: ["Residential", "Luxury"]
    },
    {
      id: 2,
      title: "URBAN LOFT",
      location: "New York, NY",
      description: "Industrial-chic conversion of a 1920s warehouse into a modern live-work space with movable walls.",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      categories: ["Commercial", "Adaptive Reuse"]
    },
    {
      id: 3,
      title: "BIOPHILIC RETREAT",
      location: "Portland, OR",
      description: "Sustainable home featuring living walls, reclaimed materials, and passive solar design principles.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      categories: ["Sustainable", "Wellness"]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="section-title">CURATED PORTFOLIO</h2>
        <p className="section-subtitle">
          Where Vision Meets Precision — Explore Our Signature Transformations
        </p>
      </div>

      <div className="slider-container">
        <div 
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="slide">
              <div className="image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-number">0{project.id}</span>
                  <span className="project-categories">
                    {project.categories.join(" • ")}
                  </span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">{project.location}</p>
                <p className="project-description">{project.description}</p>
                <button className="view-details-btn">
                  VIEW CASE STUDY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <button onClick={prevSlide} className="slider-arrow">
          <FiChevronLeft size={24} />
        </button>
        <div className="slider-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="slider-arrow">
          <FiChevronRight size={24} />
        </button>
      </div>

      <div className="projects-footer">
        <h3 className="cta-title">READY TO CREATE YOUR SIGNATURE SPACE?</h3>
        <p className="cta-text">
          Each project begins with a conversation. Let's discuss how we can 
          transform your environment into something extraordinary.
        </p>
        <button className="cta-button">START YOUR PROJECT</button>
      </div>
    </div>
  );
};

export default Projects;