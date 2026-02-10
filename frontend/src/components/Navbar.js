import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">⚖️</span>
          <span className="logo-text">DecisionAI</span>
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/compare" 
              className={location.pathname === '/compare' ? 'nav-link active' : 'nav-link'}
            >
              Compare
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/history" 
              className={location.pathname === '/history' ? 'nav-link active' : 'nav-link'}
            >
              History
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
