import express, { Request, Response } from 'express';
import { getBestSellers } from '../utils/getBestSellers'; 

const router = express.Router();

router.get('/best-sellers', (req: Request, res: Response) => {
  try {
    const bestSellers = getBestSellers(10); 
    res.json(bestSellers); 
  } catch (error) {
    console.error('Error fetching best sellers:', error);
    res.status(500).json({ message: 'Error fetching best sellers' });
  }
});

export default router;
