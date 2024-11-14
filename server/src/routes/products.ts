import express, { Router } from 'express';
import products from '../data/products.json';

const router = express.Router();

router.get('/products', (req, res) => {
    res.json(products);
});

export default router;