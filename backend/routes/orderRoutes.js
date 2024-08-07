import express from 'express';
import { createOrder, getOrders, getOrderById, updateOrder, deleteOrder } from '../controllers/orderController.js';
import authenticate from "../middleware/auth.js"

const router = express.Router();

router.post('/',authenticate, createOrder);
router.get('/', getOrders);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);
// router.post('/webhook', express.raw({ type: 'application/json' }), handleStripeWebhook);

export default router;
