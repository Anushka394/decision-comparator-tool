const db = require('../config/database');

// Create Decision (Compare)
exports.createDecision = async (req, res) => {
  try {
    const { problem, option1, option2 } = req.body;
    const userId = req.user.userId;

    // Validation
    if (!problem || !option1 || !option2) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all fields' 
      });
    }

    // Mock AI analysis (you can integrate real AI later)
    const analysis = generateAnalysis(problem, option1, option2);

    // Insert decision
    const [decisionResult] = await db.query(
      'INSERT INTO decisions (user_id, problem, option1_name, option2_name, recommendation) VALUES (?, ?, ?, ?, ?)',
      [userId, problem, option1, option2, analysis.recommendation]
    );

    const decisionId = decisionResult.insertId;

    // Insert pros for option 1
    for (const pro of analysis.option1.pros) {
      await db.query(
        'INSERT INTO pros_cons (decision_id, option_number, type, content) VALUES (?, ?, ?, ?)',
        [decisionId, 1, 'pro', pro]
      );
    }

    // Insert cons for option 1
    for (const con of analysis.option1.cons) {
      await db.query(
        'INSERT INTO pros_cons (decision_id, option_number, type, content) VALUES (?, ?, ?, ?)',
        [decisionId, 1, 'con', con]
      );
    }

    // Insert pros for option 2
    for (const pro of analysis.option2.pros) {
      await db.query(
        'INSERT INTO pros_cons (decision_id, option_number, type, content) VALUES (?, ?, ?, ?)',
        [decisionId, 2, 'pro', pro]
      );
    }

    // Insert cons for option 2
    for (const con of analysis.option2.cons) {
      await db.query(
        'INSERT INTO pros_cons (decision_id, option_number, type, content) VALUES (?, ?, ?, ?)',
        [decisionId, 2, 'con', con]
      );
    }

    // Insert trade-offs
    for (const tradeOff of analysis.tradeOffs) {
      await db.query(
        'INSERT INTO tradeoffs (decision_id, content) VALUES (?, ?)',
        [decisionId, tradeOff]
      );
    }

    res.status(201).json({
      success: true,
      data: {
        id: decisionId,
        problem,
        option1: analysis.option1,
        option2: analysis.option2,
        tradeOffs: analysis.tradeOffs,
        recommendation: analysis.recommendation
      }
    });
  } catch (error) {
    console.error('Create decision error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while creating decision' 
    });
  }
};

// Get User's Decision History
exports.getDecisions = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Get all decisions for user
    const [decisions] = await db.query(
      'SELECT * FROM decisions WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );

    // Get pros/cons and tradeoffs for each decision
    const decisionsWithDetails = await Promise.all(
      decisions.map(async (decision) => {
        const [prosConsRows] = await db.query(
          'SELECT * FROM pros_cons WHERE decision_id = ?',
          [decision.id]
        );

        const [tradeoffsRows] = await db.query(
          'SELECT content FROM tradeoffs WHERE decision_id = ?',
          [decision.id]
        );

        const option1Pros = prosConsRows
          .filter(row => row.option_number === 1 && row.type === 'pro')
          .map(row => row.content);
        
        const option1Cons = prosConsRows
          .filter(row => row.option_number === 1 && row.type === 'con')
          .map(row => row.content);

        const option2Pros = prosConsRows
          .filter(row => row.option_number === 2 && row.type === 'pro')
          .map(row => row.content);
        
        const option2Cons = prosConsRows
          .filter(row => row.option_number === 2 && row.type === 'con')
          .map(row => row.content);

        return {
          id: decision.id,
          problem: decision.problem,
          option1: {
            name: decision.option1_name,
            pros: option1Pros,
            cons: option1Cons
          },
          option2: {
            name: decision.option2_name,
            pros: option2Pros,
            cons: option2Cons
          },
          tradeOffs: tradeoffsRows.map(row => row.content),
          recommendation: decision.recommendation,
          timestamp: decision.created_at
        };
      })
    );

    res.json({
      success: true,
      count: decisionsWithDetails.length,
      data: decisionsWithDetails
    });
  } catch (error) {
    console.error('Get decisions error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while fetching decisions' 
    });
  }
};

// Delete Decision
exports.deleteDecision = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    // Check if decision belongs to user
    const [decisions] = await db.query(
      'SELECT * FROM decisions WHERE id = ? AND user_id = ?',
      [id, userId]
    );

    if (decisions.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Decision not found' 
      });
    }

    // Delete decision (cascade will delete related records)
    await db.query('DELETE FROM decisions WHERE id = ?', [id]);

    res.json({
      success: true,
      message: 'Decision deleted successfully'
    });
  } catch (error) {
    console.error('Delete decision error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while deleting decision' 
    });
  }
};

// Helper function to generate analysis
function generateAnalysis(problem, option1, option2) {
  return {
    problem,
    option1: {
      name: option1,
      pros: [
        `${option1} offers immediate benefits`,
        `Lower initial risk with ${option1}`,
        `Proven track record in similar situations`
      ],
      cons: [
        `May limit long-term growth potential`,
        `Could require more maintenance over time`,
        `Less flexibility for future changes`
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
        `Higher initial investment required`,
        `Steeper learning curve`,
        `Less established support system`
      ]
    },
    tradeOffs: [
      `Choosing ${option1} means prioritizing stability over innovation`,
      `${option2} offers growth potential but requires more upfront commitment`,
      `Consider your timeline and risk tolerance when deciding`
    ],
    recommendation: `Based on the analysis, if you value stability and proven results, ${option1} might be better. However, if you're looking for long-term growth and can handle initial challenges, ${option2} could be the right choice. Consider your specific circumstances and priorities.`
  };
}

module.exports = exports;
