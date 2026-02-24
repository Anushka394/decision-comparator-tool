const express = require('express');
const router = express.Router();
const decisionController = require('../controllers/decisionController');
const authMiddleware = require('../middleware/auth');

// All routes are protected
router.post('/compare', authMiddleware, decisionController.createDecision);
router.get('/history', authMiddleware, decisionController.getDecisions);
router.delete('/:id', authMiddleware, decisionController.deleteDecision);

module.exports = router;
