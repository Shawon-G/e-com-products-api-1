import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { TOrder } from './order.interface';

// Order Creation:
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData: TOrder = req.body;
    const result = await OrderServices.createOrderDB(orderData);
    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const OrderControllers = {
  createOrder,
};
