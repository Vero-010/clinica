import React, { useState } from 'react';

const MisMascotas = () => {
  // Estado para las mascotas del usuario
  const [mascotas, setMascotas] = useState([
    {
      id: 1,
      nombre: "Fluffy Tiger",
      imagen: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=300&fit=crop&crop=face",
      tipo: "Gato",
      edad: "2 años",
      peso: "4.5 kg",
      genero: "Macho",
      vacunado: "Sí",
      esterilizado: "Sí",
      propietario: "Juan Pérez"
    },
    {
      id: 2,
      nombre: "Little Smokey",
      imagen: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=300&fit=crop&crop=face",
      tipo: "Perro",
      edad: "1 año",
      peso: "8.2 kg",
      genero: "Hembra",
      vacunado: "Sí",
      esterilizado: "No",
      propietario: "María García"
    },
    {
      id: 3,
      nombre: "Spotty",
      imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=face",
      tipo: "Perro",
      edad: "3 años",
      peso: "12.1 kg",
      genero: "Macho",
      vacunado: "Sí",
      esterilizado: "Sí",
      propietario: "Carlos López"
    },
    {
      id: 4,
      nombre: "Luna",
      imagen: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=300&fit=crop&crop=face",
      tipo: "Perro",
      edad: "4 años",
      peso: "15.3 kg",
      genero: "Hembra",
      vacunado: "Sí",
      esterilizado: "Sí",
      propietario: "Ana Martínez"
    },
    {
      id: 5,
      nombre: "Max",
      imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=face",
      tipo: "Perro",
      edad: "2 años",
      peso: "18.7 kg",
      genero: "Macho",
      vacunado: "Sí",
      esterilizado: "No",
      propietario: "Pedro Rodríguez"
    },
    {
      id: 6,
      nombre: "Miau",
      imagen: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=300&fit=crop&crop=face",
      tipo: "Gato",
      edad: "1 año",
      peso: "3.2 kg",
      genero: "Hembra",
      vacunado: "Sí",
      esterilizado: "Sí",
      propietario: "Sofía Hernández"
    }
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Función para eliminar mascota
  const eliminarMascota = (id) => {
    setMascotas(mascotas.filter(mascota => mascota.id !== id));
  };

  // Función para agregar nueva mascota
  const agregarMascota = () => {
    setMostrarFormulario(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-6">
        {/* Botón para agregar nueva mascota */}
        <div className="mb-8 text-center">
          <button 
            onClick={agregarMascota}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            <span className="text-xl">+</span>
            Agregar Nueva Mascota
          </button>
        </div>

        {/* Primera fila de mascotas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mascotas.slice(0, 3).map((mascota) => (
            <div key={`top-${mascota.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                <img 
                  src={mascota.imagen} 
                  alt={mascota.nombre}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => eliminarMascota(mascota.id)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"
                >
                  ×
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center mb-3">{mascota.nombre}</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Propietario:</span>
                    <span>{mascota.propietario}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Edad Aproximada:</span>
                    <span>{mascota.edad}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Género:</span>
                    <span>{mascota.genero}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tipo:</span>
                    <span>{mascota.tipo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peso:</span>
                    <span>{mascota.peso}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vacunado:</span>
                    <span>{mascota.vacunado}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Esterilizado:</span>
                    <span>{mascota.esterilizado}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors">
                    EDITAR
                  </button>
                  <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors">
                    VER PERFIL
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Segunda fila de mascotas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mascotas.slice(3, 6).map((mascota) => (
            <div key={`bottom-${mascota.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                <img 
                  src={mascota.imagen} 
                  alt={mascota.nombre}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => eliminarMascota(mascota.id)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"
                >
                  ×
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center mb-3">{mascota.nombre}</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Propietario:</span>
                    <span>{mascota.propietario}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Edad Aproximada:</span>
                    <span>{mascota.edad}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Género:</span>
                    <span>{mascota.genero}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tipo:</span>
                    <span>{mascota.tipo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peso:</span>
                    <span>{mascota.peso}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vacunado:</span>
                    <span>{mascota.vacunado}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Esterilizado:</span>
                    <span>{mascota.esterilizado}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors">
                    EDITAR
                  </button>
                  <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors">
                    VER PERFIL
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección inferior con estadísticas */}
        <div className="bg-teal-500 text-white py-8 px-6 rounded-lg mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">GESTIONA TUS MASCOTAS</h2>
            <p className="text-lg">Total de mascotas registradas: {mascotas.length}</p>
          </div>
        </div>

        {/* Galería de todas las mascotas */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {mascotas.map((mascota, index) => (
            <div key={`gallery-${mascota.id}`} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer">
              <img 
                src={mascota.imagen} 
                alt={mascota.nombre}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-2">
                <span className="text-white font-semibold text-sm text-center">
                  {mascota.nombre}
                </span>
              </div>
              {/* Fallback cuando la imagen no carga */}
              <div className="absolute inset-0 bg-gray-300 hidden items-center justify-center flex-col">
                <div className="text-4xl mb-2">🐾</div>
                <span className="text-gray-600 font-medium text-sm text-center px-2">
                  {mascota.nombre}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Alert para mostrar cuando se hace clic en agregar */}
      {mostrarFormulario && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Agregar Nueva Mascota</h3>
            <p className="text-gray-600 mb-4">
              Aquí podrías implementar un formulario para agregar una nueva mascota con campos como:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Nombre de la mascota</li>
              <li>Tipo (Perro, Gato, etc.)</li>
              <li>Edad</li>
              <li>Peso</li>
              <li>Género</li>
              <li>Estado de vacunación</li>
              <li>Foto</li>
            </ul>
            <div className="flex gap-2">
              <button 
                onClick={() => setMostrarFormulario(false)}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
              >
                Cerrar
              </button>
              <button 
                onClick={() => setMostrarFormulario(false)}
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded transition-colors"
              >
                Crear Formulario
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MisMascotas;