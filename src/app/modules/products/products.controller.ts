import { Request, Response } from 'express';
import { ProductServices } from './products.service';

// create product
const createProducts = async (req: Request, res: Response) => {
  try {
    const { TProducts: productsData } = req.body;
    const result = await ProductServices.createProductIntoDB(productsData);
    // send response
    res.status(200).json({
      success: true,
      message: 'Products is created sucessfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductsContollers = {
  createProducts,
};
