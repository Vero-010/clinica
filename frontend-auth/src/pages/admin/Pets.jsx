import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminAddPetForm from "../../components/AdminAddPetForm";

const Pets = () => {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/pets");
      setPets(res.data);
    } catch (error) {
      console.error("Error al obtener mascotas:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/pets/${id}`);
      fetchPets();
    } catch (error) {
      console.error("Error al eliminar mascota:", error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestión de Mascotas</h2>
      <AdminAddPetForm onPetAdded={fetchPets} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div key={pet._id} className="bg-white rounded shadow p-4">
            {pet.foto && <img src={pet.foto} alt={pet.nombre} className="w-full h-40 object-cover mb-2 rounded" />}
            <h3 className="text-lg font-semibold">{pet.nombre}</h3>
            <p>Tipo: {pet.tipo}</p>
            <p>Propietario: {pet.propietario}</p>
            <p>Edad: {pet.edad}</p>
            <p>Género: {pet.genero}</p>
            <p>Peso: {pet.peso}</p>
            <p>Vacunado: {pet.vacunado ? "Sí" : "No"}</p>
            <p>Esterilizado: {pet.esterilizado ? "Sí" : "No"}</p>
            <button onClick={() => handleDelete(pet._id)} className="text-red-500 mt-2 hover:underline">Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
