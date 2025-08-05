// controllers/petController.js
import Pet from '../models/Pet.js';

export const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createPet = async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Mascota eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
