import express from 'express';
import { Router, Request, Response } from 'express';
import productsData from '../data/products.json';

// Define types to match your data structure
interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
}

interface Subcategory {
  id: number;
  name: string;
  products: Product[];
}

interface Category {
  id: number;
  name: string;
  subcategories: Subcategory[];
}

interface ProductData {
  id: number;
  name: string;
  categories: Category[];
}

const router: Router = express.Router();

// Route to get all categories
router.get('/collections', (_req: Request, res: Response): void => {
    res.json(productsData);
});

// Route to get category information by category ID
router.get('/collections/category/:categoryId', (req: Request, res: Response): void => {
    const { categoryId } = req.params;
    const product = productsData[0]; // Assuming there's only one main product
    const category = product.categories.find(cat => cat.id === parseInt(categoryId, 10));

    if (!category) {
        res.status(404).json({ message: 'Category not found' });
        return;
    }

    // Return only the category information, not including subcategories
    res.json({
        id: category.id,
        name: category.name,
        subcategoriesCount: category.subcategories.length
    });
});

// Route to get subcategories by category ID
router.get('/collections/category/:categoryId/subcategories', (req: Request, res: Response): void => {
    const { categoryId } = req.params;
    const product = productsData[0]; // Assuming there's only one main product
    const category = product.categories.find(cat => cat.id === parseInt(categoryId, 10));

    if (!category) {
        res.status(404).json({ message: 'Category not found' });
        return;
    }

    // Return the subcategories array, but only with essential information
    const simplifiedSubcategories = category.subcategories.map(sub => ({
        id: sub.id,
        name: sub.name,
        productsCount: sub.products.length
    }));

    res.json(simplifiedSubcategories);
});

// Route to get a specific subcategory by ID
router.get('/collections/subcategory/:subcategoryId', (req: Request, res: Response): void => {
    const { subcategoryId } = req.params;
    const product = productsData[0]; // Assuming there's only one main product

    for (const category of product.categories) {
        for (const subcategory of category.subcategories) {
            if (subcategory.id === parseInt(subcategoryId, 10)) {
                // Found the subcategory
                res.json({
                    id: subcategory.id,
                    name: subcategory.name,
                    products: subcategory.products
                });
                return;
            }
        }
    }

    res.status(404).json({ message: 'Subcategory not found' });
});

// Route to get a specific product by ID
router.get('/collections/item/:productId', (req: Request, res: Response): void => {
    const { productId } = req.params;
    const product = productsData[0]; // Assuming there's only one main product

    for (const category of product.categories) {
        for (const subcategory of category.subcategories) {
            const foundProduct = subcategory.products.find(prod => prod.id === parseInt(productId, 10));
            if (foundProduct) {
                res.json(foundProduct);
                return;
            }
        }
    }

    res.status(404).json({ message: 'Product not found' });
});

export default router;