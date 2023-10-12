#!/usr/bin/env node

import express from 'express';
import AuthController from '../controller/authController';
import ProductController from '../controller/productController';

const router = express.Router();

router
  .get('/auth/callback', AuthController.performOauth)
  .get('/api/products', ProductController.getProducts)
  .get('/api/collections', ProductController.getCollections)

export default router;
