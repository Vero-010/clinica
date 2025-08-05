// app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import petRoutes from './routes/petRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/pets', petRoutes);
app.use('/uploads', express.static('uploads'));


export default app;
