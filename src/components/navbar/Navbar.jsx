import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaFolderOpen, FaTools, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="creative-navbar">
      <div className="nav-container">
        {/* Logo with animated gradient */}
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <NavLink className="creative-logo" to="/">
            <span className="logo-text">INTERIOR</span>
            <span className="logo-highlight">DESIGN</span>
          </NavLink>
        </motion.div>

        {/* Mobile menu button */}
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation links with animated underline */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <motion.li whileHover={{ scale: 1.1 }}>
            <NavLink 
              className="nav-link" 
              to="/"
              onClick={() => setIsOpen(false)}
            >
              <FaHome className="nav-icon" />
              <span>Home</span>
              <div className="link-underline"></div>
            </NavLink>
          </motion.li>
          
          <motion.li whileHover={{ scale: 1.1 }}>
            <NavLink 
              className="nav-link" 
              to="/projects"
              onClick={() => setIsOpen(false)}
            >
              <FaFolderOpen className="nav-icon" />
              <span>Projects</span>
              <div className="link-underline"></div>
            </NavLink>
          </motion.li>
          
          <motion.li whileHover={{ scale: 1.1 }}>
            <NavLink 
              className="nav-link" 
              to="/design-tools"
              onClick={() => setIsOpen(false)}
            >
              <FaTools className="nav-icon" />
              <span>Tools</span>
              <div className="link-underline"></div>
            </NavLink>
          </motion.li>
          
          <motion.li whileHover={{ scale: 1.1 }}>
            <NavLink 
              className="nav-link" 
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
              <div className="link-underline"></div>
            </NavLink>
          </motion.li>

          {/* Decorative elements */}
          <div className="nav-decoration"></div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;  