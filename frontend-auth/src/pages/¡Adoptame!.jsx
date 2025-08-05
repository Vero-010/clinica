import React from "react";

const mascotas = [
  { id: 1, nombre: "Max", imagen: "/imagenes/max.jpg" },
  { id: 2, nombre: "Luna", imagen: "/imagenes/luna.jpg" },
  { id: 3, nombre: "Rocky", imagen: "/imagenes/rocky.jpg" },
  { id: 4, nombre: "Canela", imagen: "/imagenes/canela.jpg" },
  { id: 5, nombre: "Toby", imagen: "/imagenes/toby.jpg" },
  { id: 6, nombre: "Nala", imagen: "/imagenes/nala.jpg" },
  { id: 7, nombre: "Simba", imagen: "/imagenes/simba.jpg" },
  { id: 8, nombre: "Bruno", imagen: "/imagenes/bruno.jpg" },
  { id: 9, nombre: "Milo", imagen: "/imagenes/milo.jpg" },
];

const Adoptame = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-100 py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">¡Adopta una mascota!</h1>
      <p className="text-center text-gray-600 mb-10">
        Estas adorables mascotas están buscando un hogar lleno de amor. ¡Haz clic en "Adóptame" para conocer más!
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mascotas.map((mascota) => (
          <div
            key={mascota.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-4"
          >
            <img
              src={mascota.imagen}
              alt={mascota.nombre}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {mascota.nombre}
            </h4>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition">
              ¡Adóptame!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adoptame;
