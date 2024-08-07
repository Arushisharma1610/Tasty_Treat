import express from 'express';
import { signup, login, verifyToken } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify', verifyToken, (req, res) => res.status(200).json({ message: 'Token is valid' }));

export default router;
