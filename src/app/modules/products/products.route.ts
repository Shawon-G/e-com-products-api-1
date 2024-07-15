import express from 'express';
import { ProductsContollers } from './products.controller';

const router = express.Router();

// Product Route
router.post('/', ProductsContollers.createProducts);
