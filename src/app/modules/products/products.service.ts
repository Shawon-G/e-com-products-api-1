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

// Update product service
const updateProductIntoDB = async (
  id: string,
  updatedProductData: Partial<TProducts>,
) => {
  const result = await ProductsModel.findByIdAndUpdate(id, updatedProductData, {
    new: true,
  });
  return result;
};

// Delete product service
const deleteProductIntoDB = async (id: string) => {
  const result = await ProductsModel.findByIdAndDelete(id);
  return result;
};

// Getting all data from DB
const getAllProductsFromDB = async () => {
  const result = await ProductsModel.find();
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getASingleProductFromDB,
  updateProductIntoDB,
  deleteProductIntoDB,
  getAllProductsFromDB,
};
