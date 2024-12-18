import express, { Request, Response, NextFunction } from 'express';
import productRoutes from './routes/products';
import newArrivalsRoutes from './routes/newArrivals';
import bestSellersRoutes from './routes/bestSellers';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api', productRoutes);
app.use('/api', newArrivalsRoutes);
app.use('/api', bestSellersRoutes);

// Health check route
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('API is running...');
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
