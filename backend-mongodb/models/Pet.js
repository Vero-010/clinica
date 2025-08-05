// models/Pet.js
import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  nombre: String,
  propietario: String,
  edad: Number,
  genero: String,
  tipo: String,
  peso: String,
  vacunado: Boolean,
  esterilizado: Boolean,
  foto: String,
}, { timestamps: true });

const Pet = mongoose.model('Pet', petSchema);
export default Pet;
