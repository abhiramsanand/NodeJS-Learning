const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authmiddleware');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected-route', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

module.exports = router;
