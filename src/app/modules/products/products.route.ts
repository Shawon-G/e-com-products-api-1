import express from 'express';
import { ProductsContollers } from './products.controller';

const router = express.Router();

// Products Route:-------
// Posting/creating all data into DB:
router.post('/', ProductsContollers.createProducts);

// Getting a single data from DB:
router.get('/:productId', ProductsContollers.getASingleProduct);

// Updating a data into DB:
router.put('/:productId', ProductsContollers.productUpdate);

export const ProductsRoutes = router;
