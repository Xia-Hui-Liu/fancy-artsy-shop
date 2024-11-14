import express from 'express';
import productRoutes from './routes/products';
import exp from 'constants';

const app = express();

app.use(express.json());
app.use('/api', productRoutes);

export default app;