import express, { Request, Response, Router } from 'express';
import data from '../data/products.json';
import { getNewArrivals } from '../utils/getNewArrivals';

const router:Router = express.Router();

router.get('/new-arrivals', (req: Request, res: Response) => {
  try {
    const newArrivals = getNewArrivals(data);
    res.json(newArrivals);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch new arrivals', error });
  }
});

export default router;
