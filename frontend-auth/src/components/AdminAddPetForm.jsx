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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre.trim() || !formData.tipo.trim() || !formData.genero) {
      console.error("Por favor completa los campos obligatorios.");
      return;
    }

    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-lg rounded-lg space-y-4 max-w-md mx-auto"
    >
      <h3 className="text-xl font-bold text-gray-800 border-b pb-2">
        Agregar Nueva Mascota
      </h3>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre *
        </label>
        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ej: Rocky"
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-green-200"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Propietario
        </label>
        <input
          name="propietario"
          value={formData.propietario}
          onChange={handleChange}
          placeholder="Nombre del propietario"
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-green-200"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Edad
          </label>
          <input
            name="edad"
            type="number"
            min="0"
            value={formData.edad}
            onChange={handleChange}
            placeholder="Años"
            className="w-full border rounded p-2 mt-1 focus:ring focus:ring-green-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Peso (kg)
          </label>
          <input
            name="peso"
            type="number"
            min="0"
            step="0.1"
            value={formData.peso}
            onChange={handleChange}
            placeholder="Ej: 5.2"
            className="w-full border rounded p-2 mt-1 focus:ring focus:ring-green-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tipo de animal *
        </label>
        <input
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          placeholder="Ej: Perro, Gato"
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-green-200"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Género *
        </label>
        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-green-200"
          required
        >
          <option value="">Selecciona género</option>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          URL de la foto
        </label>
        <input
          name="foto"
          type="url"
          value={formData.foto}
          onChange={handleChange}
          placeholder="https://ejemplo.com/imagen.jpg"
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-green-200"
        />
      </div>

      <div className="flex items-center space-x-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="vacunado"
            checked={formData.vacunado}
            onChange={handleChange}
            className="mr-2"
          />
          Vacunado
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            name="esterilizado"
            checked={formData.esterilizado}
            onChange={handleChange}
            className="mr-2"
          />
          Esterilizado
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 rounded text-white font-semibold ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {loading ? "Guardando..." : "Guardar Mascota"}
      </button>
    </form>
  );
};

export default AdminAddPetForm;

