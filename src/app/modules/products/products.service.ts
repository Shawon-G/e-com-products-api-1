import { TProducts } from './products.interface';
import { ProductsModel } from './products.model';

// create product DB
const createProductIntoDB = async (productsData: TProducts) => {
  const result = await ProductsModel.create(productsData);
  return result;
};

// get single product from db
const getASingleProductFromDB = async (id: string) => {
  const result = await ProductsModel.findOne({ productId: id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getASingleProductFromDB,
};
