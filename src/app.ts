import express from 'express';
import empRoutes from './routes/empRoutes';
import cors from 'cors';

const app = express();
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api', empRoutes);

export default app;