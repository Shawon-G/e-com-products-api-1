import { Router } from 'express';
import { OrderControllers } from './order.controler';

const router = Router();

// Order routes
// create order:
router.post('/', OrderControllers.createOrder);

router.get('/', (req, res) => {
  if (req.query.email) {
    OrderControllers.getOrdersByEmailFromDB(req, res); // Route to fetch orders by email
  } else {
    OrderControllers.getAllOrdersFromDB(req, res); // Default route to fetch all orders
  }
});

export const OrderRoutes = router;
