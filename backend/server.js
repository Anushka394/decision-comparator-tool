const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Decision comparison logic
const compareOptions = (problem, option1, option2) => {
  // Simple comparison logic - in a real app, this could use AI/ML
  const comparison = {
    problem,
    option1: {
      name: option1,
      pros: generatePros(option1, problem),
      cons: generateCons(option1, problem)
    },
    option2: {
      name: option2,
      pros: generatePros(option2, problem),
      cons: generateCons(option2, problem)
    },
    tradeOffs: generateTradeOffs(option1, option2, problem),
    recommendation: generateRecommendation(option1, option2, problem)
  };
  
  return comparison;
};

const generatePros = (option, problem) => {
  // Mock pros generation - replace with actual logic
  return [
    `${option} offers direct solution to the problem`,
    `Cost-effective approach for ${problem.toLowerCase()}`,
    `Quick implementation possible`
  ];
};

const generateCons = (option, problem) => {
  // Mock cons generation - replace with actual logic
  return [
    `${option} may have scalability limitations`,
    `Requires additional resources`,
    `Potential learning curve involved`
  ];
};

const generateTradeOffs = (option1, option2, problem) => {
  return [
    `${option1} prioritizes speed while ${option2} focuses on quality`,
    `Cost vs. long-term benefits consideration`,
    `Risk tolerance varies between options`
  ];
};

const generateRecommendation = (option1, option2, problem) => {
  // Simple recommendation logic
  return `For ${problem}, consider ${option1} if you need quick results, or ${option2} for long-term stability.`;
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Decision API is running' });
});

app.post('/api/compare', (req, res) => {
  try {
    const { problem, option1, option2 } = req.body;
    
    if (!problem || !option1 || !option2) {
      return res.status(400).json({ 
        error: 'Missing required fields: problem, option1, option2' 
      });
    }
    
    const comparison = compareOptions(problem, option1, option2);
    res.json(comparison);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});