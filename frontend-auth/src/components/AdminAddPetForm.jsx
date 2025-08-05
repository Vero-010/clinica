import React, { useState } from "react";
import axios from "axios";

const AdminAddPetForm = ({ onPetAdded }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    propietario: "",
    edad: "",
    genero: "",
    tipo: "",
    peso: "",
    vacunado: false,
    esterilizado: false,
    foto: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/pets", formData);
      onPetAdded();
      setFormData({
        nombre: "",
        propietario: "",
        edad: "",
        genero: "",
        tipo: "",
        peso: "",
        vacunado: false,
        esterilizado: false,
        foto: "",
      });
    } catch (error) {
      console.error("Error al agregar mascota:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-4">
      <h3 className="text-lg font-semibold mb-2">Agregar Nueva Mascota</h3>
      <input name="nombre" value={formData.nombre} placeholder="Nombre" onChange={handleChange} className="block w-full mb-2 border p-2 rounded" required />
      <input name="propietario" value={formData.propietario} placeholder="Propietario" onChange={handleChange} className="block w-full mb-2 border p-2 rounded" />
      <input name="edad" value={formData.edad} placeholder="Edad" type="number" onChange={handleChange} className="block w-full mb-2 border p-2 rounded" />
      <input name="tipo" value={formData.tipo} placeholder="Tipo" onChange={handleChange} className="block w-full mb-2 border p-2 rounded" />
      <input name="peso" value={formData.peso} placeholder="Peso" onChange={handleChange} className="block w-full mb-2 border p-2 rounded" />
      <input name="foto" value={formData.foto} placeholder="URL de la Imagen" onChange={handleChange} className="block w-full mb-2 border p-2 rounded" />

      <select name="genero" value={formData.genero} onChange={handleChange} className="block w-full mb-2 border p-2 rounded">
        <option value="">Selecciona género</option>
        <option value="Macho">Macho</option>
        <option value="Hembra">Hembra</option>
      </select>

      <label className="block mb-1">
        <input type="checkbox" name="vacunado" checked={formData.vacunado} onChange={handleChange} className="mr-2" />
        Vacunado
      </label>

      <label className="block mb-2">
        <input type="checkbox" name="esterilizado" checked={formData.esterilizado} onChange={handleChange} className="mr-2" />
        Esterilizado
      </label>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Guardar Mascota</button>
    </form>
  );
};

export default AdminAddPetForm;
