import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About DecisionAI</h1>
        <p className="about-subtitle">
          Empowering better decisions through artificial intelligence
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            We believe that making important decisions shouldn't be overwhelming. 
            DecisionAI was created to help people make confident, well-informed choices 
            by providing AI-powered analysis and insights in seconds.
          </p>
        </section>

        <section className="about-section">
          <div className="section-icon">💡</div>
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Describe Your Decision</h3>
              <p>Tell us what choice you're trying to make</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Enter Your Options</h3>
              <p>Provide the two alternatives you're considering</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Get AI Analysis</h3>
              <p>Receive detailed pros, cons, and recommendations</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Make Your Choice</h3>
              <p>Decide confidently with comprehensive insights</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-icon">🚀</div>
          <h2>Key Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>Comprehensive Analysis</h4>
                <p>Get detailed pros and cons for each option</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>Trade-off Insights</h4>
                <p>Understand what you gain and lose with each choice</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>Smart Recommendations</h4>
                <p>Receive AI-powered suggestions tailored to your situation</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>Decision History</h4>
                <p>Track and review all your past comparisons</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>Fast & Intuitive</h4>
                <p>Get results in seconds with a beautiful interface</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>Privacy Focused</h4>
                <p>Your decisions are stored locally on your device</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section tech-stack">
          <div className="section-icon">⚙️</div>
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-logo">⚛️</div>
              <h4>React</h4>
              <p>Modern UI Framework</p>
            </div>
            <div className="tech-card">
              <div className="tech-logo">🟢</div>
              <h4>Node.js</h4>
              <p>Backend Runtime</p>
            </div>
            <div className="tech-card">
              <div className="tech-logo">🚀</div>
              <h4>Express</h4>
              <p>Web Framework</p>
            </div>
            <div className="tech-card">
              <div className="tech-logo">🤖</div>
              <h4>AI/ML</h4>
              <p>Decision Analysis</p>
            </div>
          </div>
        </section>

        <section className="about-section cta-section">
          <h2>Ready to Make Better Decisions?</h2>
          <p>Start comparing your options now and make confident choices</p>
          <a href="/compare" className="cta-button">
            Try DecisionAI Now
          </a>
        </section>
      </div>
    </div>
  );
}

export default About;
