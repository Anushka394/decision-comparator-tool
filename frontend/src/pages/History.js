import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './History.css';

function History() {
  const [history, setHistory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get('/api/decisions/history');
      setHistory(response.data.data);
    } catch (error) {
      console.error('Failed to fetch history:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/decisions/${id}`);
      setHistory(history.filter(item => item.id !== id));
      if (selectedItem?.id === id) {
        setSelectedItem(null);
      }
    } catch (error) {
      console.error('Failed to delete decision:', error);
    }
  };

  const handleClearAll = async () => {
    if (window.confirm('Are you sure you want to clear all history?')) {
      try {
        await Promise.all(history.map(item => axios.delete(`/api/decisions/${item.id}`)));
        setHistory([]);
        setSelectedItem(null);
      } catch (error) {
        console.error('Failed to clear history:', error);
      }
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner-large"></div>
        <p>Loading history...</p>
      </div>
    );
  }

  return (
    <div className="history-container">
      <div className="history-header">
        <h1>Decision History</h1>
        <p>Review your past comparisons and decisions</p>
      </div>

      {history.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h2>No History Yet</h2>
          <p>Your decision comparisons will appear here</p>
        </div>
      ) : (
        <>
          <div className="history-actions">
            <div className="history-count">
              {history.length} {history.length === 1 ? 'Decision' : 'Decisions'}
            </div>
            <button className="clear-btn" onClick={handleClearAll}>
              🗑️ Clear All
            </button>
          </div>

          <div className="history-grid">
            <div className="history-list">
              {history.map((item) => (
                <div
                  key={item.id}
                  className={`history-item ${selectedItem?.id === item.id ? 'active' : ''}`}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="history-item-header">
                    <h3>{item.problem}</h3>
                    <button
                      className="delete-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(item.id);
                      }}
                    >
                      ✕
                    </button>
                  </div>
                  <div className="history-item-options">
                    <span className="option-tag">{item.option1.name}</span>
                    <span className="vs-text">vs</span>
                    <span className="option-tag">{item.option2.name}</span>
                  </div>
                  <div className="history-item-date">
                    {formatDate(item.timestamp)}
                  </div>
                </div>
              ))}
            </div>

            {selectedItem && (
              <div className="history-detail">
                <div className="detail-header">
                  <h2>Decision Details</h2>
                  <span className="detail-date">{formatDate(selectedItem.timestamp)}</span>
                </div>

                <div className="detail-problem">
                  <strong>Problem:</strong> {selectedItem.problem}
                </div>

                <div className="detail-comparison">
                  <div className="detail-option">
                    <h3>{selectedItem.option1.name}</h3>
                    <div className="detail-section">
                      <h4 className="pros-title">✓ Pros</h4>
                      <ul>
                        {selectedItem.option1.pros.map((pro, idx) => (
                          <li key={idx}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4 className="cons-title">✗ Cons</h4>
                      <ul>
                        {selectedItem.option1.cons.map((con, idx) => (
                          <li key={idx}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="detail-option">
                    <h3>{selectedItem.option2.name}</h3>
                    <div className="detail-section">
                      <h4 className="pros-title">✓ Pros</h4>
                      <ul>
                        {selectedItem.option2.pros.map((pro, idx) => (
                          <li key={idx}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4 className="cons-title">✗ Cons</h4>
                      <ul>
                        {selectedItem.option2.cons.map((con, idx) => (
                          <li key={idx}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="detail-tradeoffs">
                  <h4>⚖️ Trade-offs</h4>
                  <ul>
                    {selectedItem.tradeOffs.map((tradeOff, idx) => (
                      <li key={idx}>{tradeOff}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-recommendation">
                  <h4>💡 Recommendation</h4>
                  <p>{selectedItem.recommendation}</p>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default History;
