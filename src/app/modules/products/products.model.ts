import { Schema, model } from 'mongoose';
import { TInventory, TProducts, TVariants } from './products.interface';

const VarientSchema = new Schema<TVariants>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const InventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const ProductsSchema = new Schema<TProducts>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [VarientSchema],
    required: true,
  },
  inventory: {
    type: InventorySchema,
    required: true,
  },
});

export const ProductsModel = model<TProducts>('Product', ProductsSchema);
