const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({ message: `Hello user ${req.user.id}, welcome to the protected route!` });
});

module.exports = router;
