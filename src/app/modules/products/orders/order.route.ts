import { Router } from 'express';
import { OrderControllers } from './order.controler';

const router = Router();

// Order routes
// create order:
router.post('/', OrderControllers.createOrder);

export const OrderRoutes = router;
