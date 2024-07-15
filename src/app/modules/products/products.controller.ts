import { Request, Response } from 'express';
import { ProductServices } from './products.service';

// create all products ( Posting to DB)
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

// get a single product from DB

const getASingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await ProductServices.getASingleProductFromDB(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: product,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductsContollers = {
  createProducts,
  getASingleProduct,
};
