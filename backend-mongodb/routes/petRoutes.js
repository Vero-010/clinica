// routes/petRoutes.js
import express from 'express';
import {
  getAllPets,
  createPet,
  deletePet,
} from '../controllers/petController.js';

const router = express.Router();

router.get('/', getAllPets);
router.post('/', createPet);
router.delete('/:id', deletePet);

export default router;
