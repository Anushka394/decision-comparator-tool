import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Make Better Decisions with
            <span className="gradient-text"> AI-Powered Insights</span>
          </h1>
          <p className="hero-subtitle">
            Compare options, analyze trade-offs, and get intelligent recommendations 
            to make confident decisions in seconds.
          </p>
          <div className="hero-buttons">
            <Link to="/compare" className="btn-primary">
              Start Comparing
              <span className="btn-icon">→</span>
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="floating-card card-1">
            <div className="card-icon">✓</div>
            <div className="card-text">Smart Analysis</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">⚡</div>
            <div className="card-text">Fast Results</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🎯</div>
            <div className="card-text">Better Choices</div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">Why Choose DecisionAI?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>AI-Powered Analysis</h3>
            <p>Advanced algorithms analyze your options and provide detailed insights</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚖️</div>
            <h3>Pros & Cons</h3>
            <p>Get comprehensive lists of advantages and disadvantages for each option</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Trade-off Analysis</h3>
            <p>Understand what you gain and lose with each decision</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Smart Recommendations</h3>
            <p>Receive personalized suggestions based on your specific situation</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Decision History</h3>
            <p>Track and review your past comparisons anytime</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Get results in seconds, not hours of deliberation</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Make Better Decisions?</h2>
        <p>Join thousands of users who trust DecisionAI for their important choices</p>
        <Link to="/compare" className="btn-cta">
          Get Started Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
