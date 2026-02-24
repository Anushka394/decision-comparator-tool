const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
require('./config/database');

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/decisions', require('./routes/decisionRoutes'));

// Legacy route for backward compatibility (without auth)
app.post('/api/compare', (req, res) => {
  const { problem, option1, option2 } = req.body;
  
  // Simple mock response for non-authenticated users
  res.json({
    problem,
    option1: {
      name: option1,
      pros: [
        `${option1} offers immediate benefits`,
        `Lower initial risk`,
        `Proven track record`
      ],
      cons: [
        `May limit long-term growth`,
        `Could require more maintenance`,
        `Less flexibility`
      ]
    },
    option2: {
      name: option2,
      pros: [
        `${option2} provides better scalability`,
        `More innovative approach`,
        `Aligns with future trends`
      ],
      cons: [
        `Higher initial investment`,
        `Steeper learning curve`,
        `Less established support`
      ]
    },
    tradeOffs: [
      `Choosing ${option1} means prioritizing stability over innovation`,
      `${option2} offers growth potential but requires more commitment`,
      `Consider your timeline and risk tolerance`
    ],
    recommendation: `Based on the analysis, consider your priorities. ${option1} for stability, ${option2} for growth. Sign up to save your decisions!`
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server is running',
    database: 'MySQL connected'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
