import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import petRoutes from './routes/petRoutes.js'; // <-- importamos rutas de mascotas

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/api', authRoutes);
app.use('/api/productos', productRoutes);
app.use('/api/pets', petRoutes); // <-- ruta para mascotas
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
