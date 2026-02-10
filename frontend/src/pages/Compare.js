import React, { useState } from 'react';
import axios from 'axios';
import './Compare.css';

function Compare() {
  const [formData, setFormData] = useState({
    problem: '',
    option1: '',
    option2: ''
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('/api/compare', formData);
      setResults(response.data);
      
      // Save to localStorage for history
      const history = JSON.parse(localStorage.getItem('decisionHistory') || '[]');
      history.unshift({
        ...response.data,
        timestamp: new Date().toISOString(),
        id: Date.now()
      });
      localStorage.setItem('decisionHistory', JSON.stringify(history.slice(0, 20)));
    } catch (err) {
      setError('Failed to compare options. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ problem: '', option1: '', option2: '' });
    setResults(null);
    setError('');
  };

  return (
    <div className="compare-container">
      <div className="compare-header">
        <h1>Compare Your Options</h1>
        <p>Enter your decision details and let AI help you choose wisely</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="problem">
              <span className="label-icon">🤔</span>
              What decision are you trying to make?
            </label>
            <textarea
              id="problem"
              name="problem"
              value={formData.problem}
              onChange={handleInputChange}
              placeholder="E.g., Should I switch careers or stay in my current job?"
              required
            />
          </div>

          <div className="options-row">
            <div className="form-group">
              <label htmlFor="option1">
                <span className="label-icon">🅰️</span>
                Option 1
              </label>
              <input
                id="option1"
                name="option1"
                type="text"
                value={formData.option1}
                onChange={handleInputChange}
                placeholder="E.g., Switch to new career"
                required
              />
            </div>

            <div className="vs-divider">VS</div>

            <div className="form-group">
              <label htmlFor="option2">
                <span className="label-icon">🅱️</span>
                Option 2
              </label>
              <input
                id="option2"
                name="option2"
                type="text"
                value={formData.option2}
                onChange={handleInputChange}
                placeholder="E.g., Stay in current job"
                required
              />
            </div>
          </div>

          <div className="button-group">
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Analyzing...
                </>
              ) : (
                <>
                  <span>🔍</span>
                  Compare Options
                </>
              )}
            </button>
            
            {results && (
              <button 
                type="button" 
                className="reset-btn"
                onClick={handleReset}
              >
                ↻ New Comparison
              </button>
            )}
          </div>
        </form>

        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            <span>{error}</span>
          </div>
        )}
      </div>

      {results && (
        <div className="results-container">
          <div className="results-header">
            <h2>📊 Analysis Results</h2>
            <p className="problem-statement">
              <strong>Decision:</strong> {results.problem}
            </p>
          </div>
          
          <div className="comparison-grid">
            <div className="option-card option-1">
              <div className="option-header">
                <h3>{results.option1.name}</h3>
                <span className="option-badge">Option A</span>
              </div>
              
              <div className="pros-cons pros">
                <h4>
                  <span className="section-icon">✓</span>
                  Advantages
                </h4>
                <ul>
                  {results.option1.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>

              <div className="pros-cons cons">
                <h4>
                  <span className="section-icon">✗</span>
                  Disadvantages
                </h4>
                <ul>
                  {results.option1.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="option-card option-2">
              <div className="option-header">
                <h3>{results.option2.name}</h3>
                <span className="option-badge">Option B</span>
              </div>
              
              <div className="pros-cons pros">
                <h4>
                  <span className="section-icon">✓</span>
                  Advantages
                </h4>
                <ul>
                  {results.option2.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>

              <div className="pros-cons cons">
                <h4>
                  <span className="section-icon">✗</span>
                  Disadvantages
                </h4>
                <ul>
                  {results.option2.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="trade-offs">
            <h3>
              <span className="section-icon">⚖️</span>
              Key Trade-offs
            </h3>
            <ul>
              {results.tradeOffs.map((tradeOff, index) => (
                <li key={index}>{tradeOff}</li>
              ))}
            </ul>
          </div>

          <div className="recommendation">
            <h3>
              <span className="section-icon">💡</span>
              Our Recommendation
            </h3>
            <p>{results.recommendation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Compare;
