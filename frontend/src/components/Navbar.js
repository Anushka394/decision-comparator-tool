import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">DecisionAI</span>
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
          {isAuthenticated && (
            <li className="nav-item">
              <Link 
                to="/history" 
                className={location.pathname === '/history' ? 'nav-link active' : 'nav-link'}
              >
                History
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </li>
          
          {isAuthenticated ? (
            <>
              <li className="nav-item user-info">
                <span className="user-name">{user?.name}</span>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link logout-btn">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link 
                  to="/login" 
                  className={location.pathname === '/login' ? 'nav-link active' : 'nav-link'}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/register" 
                  className="nav-link register-btn"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
