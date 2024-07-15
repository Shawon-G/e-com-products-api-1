import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductsRoutes } from './app/modules/products/products.route';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application Routes:
app.use('/api/products', ProductsRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello!');
});


export default app;
