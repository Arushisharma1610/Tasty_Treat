// import express, { Router } from "express"
// import { addToCart, removeFromCart, getCart } from "../controllers/cartController"
// import authMiddleware from "../middleware/auth";

// const router = express.Router();

// router.post("/add",authMiddleware, addToCart)
// router.post("/remove",authMiddleware, removeFromCart)
// router.post("/get",authMiddleware, getCart)

// export default router;


import express from 'express';
import { addToCart, removeFromCart, getCart } from '../controllers/cartController.js';
import verifyToken from '../middleware/auth.js'; // Import the middleware

const router = express.Router();

router.post('/add', verifyToken, addToCart);
// router.post('/add', addToCart);
router.delete('/remove', verifyToken, removeFromCart);
router.get('/get', verifyToken, getCart);
// router.post('/removeAll', verifyToken, removeAllFromCart);

export default router;
