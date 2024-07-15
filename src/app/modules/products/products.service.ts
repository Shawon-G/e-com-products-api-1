import { TProducts } from './products.interface';
import { ProductModel } from './products.model';

// create product DB
const createProductIntoDB = async (productsData: TProducts) => {
  const result = await ProductModel.create(productsData);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
