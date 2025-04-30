import React, { useState } from 'react';
import { FaPalette, FaCube, FaChair, FaRuler, FaLightbulb, FaSwatchbook } from 'react-icons/fa';
import './Design.css';

const DesignTools = () => {
  const [activeTab, setActiveTab] = useState('software');

  const tools = {
    software: [
      {
        name: "AutoCAD",
        description: "Industry-standard CAD software for precision drafting",
        icon: <FaCube className="tool-icon" />,
        category: "3D Modeling"
      },
      {
        name: "SketchUp Pro",
        description: "Intuitive 3D modeling for architectural visualization",
        icon: <FaCube className="tool-icon" />,
        category: "3D Modeling"
      },
      {
        name: "Revit",
        description: "BIM software for intelligent 3D design documentation",
        icon: <FaCube className="tool-icon" />,
        category: "BIM"
      }
    ],
    color: [
      {
        name: "Adobe Color",
        description: "Create and explore color schemes with advanced tools",
        icon: <FaPalette className="tool-icon" />,
        category: "Color Theory"
      },
      {
        name: "Coolors",
        description: "Generate perfect color palettes in seconds",
        icon: <FaSwatchbook className="tool-icon" />,
        category: "Palettes"
      },
      {
        name: "Pantone Studio",
        description: "Digital color standards for professional designers",
        icon: <FaPalette className="tool-icon" />,
        category: "Color Matching"
      }
    ],
    planning: [
      {
        name: "Planner 5D",
        description: "Easy room planning and furniture arrangement",
        icon: <FaChair className="tool-icon" />,
        category: "Space Planning"
      },
      {
        name: "Roomstyler",
        description: "Drag-and-drop interior design in 3D",
        icon: <FaRuler className="tool-icon" />,
        category: "Layout"
      },
      {
        name: "Houzz",
        description: "Visual ideabooks and product sourcing",
        icon: <FaLightbulb className="tool-icon" />,
        category: "Inspiration"
      }
    ]
  };

  return (
    <div className="design-tools-container">
      <div className="hero-section">
        <h1 className="hero-title">DESIGN <span className="highlight">TOOLKIT</span></h1>
        <p className="hero-subtitle">
          The professional arsenal we use to transform visions into breathtaking realities
        </p>
      </div>

      <div className="tabs-container">
        <button 
          className={`tab-button ${activeTab === 'software' ? 'active' : ''}`}
          onClick={() => setActiveTab('software')}
        >
          <FaCube /> 3D & Modeling
        </button>
        <button 
          className={`tab-button ${activeTab === 'color' ? 'active' : ''}`}
          onClick={() => setActiveTab('color')}
        >
          <FaPalette /> Color Tools
        </button>
        <button 
          className={`tab-button ${activeTab === 'planning' ? 'active' : ''}`}
          onClick={() => setActiveTab('planning')}
        >
          <FaChair /> Space Planning
        </button>
      </div>

      <div className="tools-grid">
        {tools[activeTab].map((tool, index) => (
          <div key={index} className="tool-card">
            <div className="tool-header">
              <div className="icon-wrapper">
                {tool.icon}
              </div>
              <span className="tool-category">{tool.category}</span>
            </div>
            <h3 className="tool-name">{tool.name}</h3>
            <p className="tool-description">{tool.description}</p>
            <button className="explore-button">
              EXPLORE <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2 className="cta-title">Want to master these tools?</h2>
        <p className="cta-text">
          Join our professional workshops and take your design skills to the next level
        </p>
        <button className="cta-button">
          VIEW WORKSHOPS
        </button>
      </div>
    </div>
  );
};

export default DesignTools;