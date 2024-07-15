import { ProductsModel } from '../products.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

// Order creates: ----------
const createOrderDB = async (orderData: TOrder) => {
  const product = await ProductsModel.findById(orderData.productId); // Getting the product by its ID
  if (!product) {
    throw new Error('Product not found');
  }
  if (product.inventory.quantity < orderData.quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }
  product.inventory.quantity -= orderData.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();
  const result = await Order.create(orderData);
  return result;
};

export const OrderServices = {
  createOrderDB,
};
