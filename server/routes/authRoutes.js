const express = require('express');
const authController = require('../controllers/AuthController');
const authMiddleware = require('../middlewares/AuthMiddleware');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('profile', authMiddleware(['user', 'admin', 'pupil']), authController.profile);

module.exports = router;

