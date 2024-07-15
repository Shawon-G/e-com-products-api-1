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

// get all orders

const getAllOrdersFromDB = async (req: Request, res: Response) => {
  try {
    const orders = await OrderServices.getAllOrdersFromDB();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully',
      data: orders,
    });
  } catch (err) {
    console.log(err);
  }
};

// get orders by email

const getOrdersByEmailFromDB = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email query parameter is required',
      });
    }
    const orders = await OrderServices.getOrdersByEmailFromDB(email);

    res.status(200).json({
      success: true,
      message: `Orders for email ${email} fetched successfully`,
      data: orders,
    });
  } catch (err) {
    console.log(err);
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrdersFromDB,
  getOrdersByEmailFromDB,
};
