import { z } from 'zod';

// Zod Schema for TVariant
const VariantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Zod Schema for TInventory
const InventoryValidationSchema = z.object({
  quantity: z.number().min(0),
  inStock: z.boolean(),
});

// Zod Schema for TProduct
const ProductValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantValidationSchema),
  inventory: InventoryValidationSchema,
});

export default ProductValidationSchema;
