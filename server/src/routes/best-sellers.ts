import express, { Request, Response, Router } from 'express';
import products from '../data/products.json';

const router: Router = express.Router();

router.get('/best-sellers', (req: Request, res: Response) => {
  // Flatten the categories, subcategories and products to extract products with salesCount > 0
  const bestSellers = products
    .flatMap(category => 
      category.categories.flatMap(subcategory => 
        subcategory.subcategories.flatMap(sub => 
          sub.products.filter(product => product.salesCount > 0) 
        )
      )
    )
    .sort((a, b) => b.salesCount - a.salesCount) 
    .slice(0, 10); 
  res.json(bestSellers); 
});

export default router;
