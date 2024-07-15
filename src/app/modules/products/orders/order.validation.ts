import { z } from 'zod';

const OrderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid ObjectId'),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

export { OrderValidationSchema };
