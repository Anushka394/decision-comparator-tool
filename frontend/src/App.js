import React, { useState } from 'react';
import axios from 'axios';

function App() {
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
    } catch (err) {
      setError('Failed to compare options. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Decision Comparison Tool</h1>
        <p>Compare two options and get insights to make better decisions</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="problem">What decision are you trying to make?</label>
            <textarea
              id="problem"
              name="problem"
              value={formData.problem}
              onChange={handleInputChange}
              placeholder="Describe your problem or decision..."
              required
            />
          </div>

          <div className="options-row">
            <div className="form-group">
              <label htmlFor="option1">Option 1</label>
              <input
                id="option1"
                name="option1"
                type="text"
                value={formData.option1}
                onChange={handleInputChange}
                placeholder="Enter first option..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="option2">Option 2</label>
              <input
                id="option2"
                name="option2"
                type="text"
                value={formData.option2}
                onChange={handleInputChange}
                placeholder="Enter second option..."
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={loading}
          >
            {loading ? 'Comparing...' : 'Compare Options'}
          </button>
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
          <h2>Comparison Results</h2>
          <p><strong>Problem:</strong> {results.problem}</p>
          
          <div className="comparison-grid">
            <div className="option-card">
              <h3>{results.option1.name}</h3>
              
              <div className="pros-cons pros">
                <h4>Pros</h4>
                <ul>
                  {results.option1.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>

              <div className="pros-cons cons">
                <h4>Cons</h4>
                <ul>
                  {results.option1.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="option-card">
              <h3>{results.option2.name}</h3>
              
              <div className="pros-cons pros">
                <h4>Pros</h4>
                <ul>
                  {results.option2.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>

              <div className="pros-cons cons">
                <h4>Cons</h4>
                <ul>
                  {results.option2.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="trade-offs">
            <h3>Trade-offs</h3>
            <ul>
              {results.tradeOffs.map((tradeOff, index) => (
                <li key={index}>{tradeOff}</li>
              ))}
            </ul>
          </div>

          <div className="recommendation">
            <h3>Recommendation</h3>
            <p>{results.recommendation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;