import React, { useState } from 'react';

const Servicios = () => {
  // Estado para los servicios
  const [servicios, setServicios] = useState([
    {
      id: 1,
      titulo: "Atención Médica",
      descripcion: "Consultas veterinarias, diagnósticos, tratamientos médicos y quirúrgicos. Atención de emergencias las 24 horas con profesionales especializados.",
      imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      precio: "Desde $80.000",
      duracion: "30-60 min",
      categoria: "Salud",
      disponible: true,
      icono: "🏥",
      gradiente: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      titulo: "Concentrados",
      descripcion: "Alimentos balanceados para perros, gatos y otras mascotas. Asesoría nutricional personalizada según las necesidades de tu mascota.",
      imagen: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop",
      precio: "Desde $35.000",
      duracion: "Consulta gratuita",
      categoria: "Nutrición",
      disponible: true,
      icono: "🥘",
      gradiente: "from-orange-400 to-orange-600"
    },
    {
      id: 3,
      titulo: "Pet Shop",
      descripcion: "Accesorios, juguetes, productos de higiene y todo lo necesario para el cuidado diario de tu mascota.",
      imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
      precio: "Precios variados",
      duracion: "Atención inmediata",
      categoria: "Productos",
      disponible: true,
      icono: "🛍️",
      gradiente: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      titulo: "Estética y Belleza",
      descripcion: "Baño, corte de pelo, arreglo de uñas y cuidado completo para mantener a tu mascota limpia y saludable.",
      imagen: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=300&fit=crop",
      precio: "Desde $25.000",
      duracion: "45-90 min",
      categoria: "Estética",
      disponible: true,
      icono: "✂️",
      gradiente: "from-pink-400 to-pink-600"
    }
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [imagenCargada, setImagenCargada] = useState({});

  // Función para manejar carga de imagen
  const handleImageLoad = (servicioId) => {
    setImagenCargada(prev => ({ ...prev, [servicioId]: true }));
  };

  const handleImageError = (servicioId) => {
    setImagenCargada(prev => ({ ...prev, [servicioId]: false }));
  };

  // Función para solicitar servicio
  const solicitarServicio = (servicio) => {
    setServicioSeleccionado(servicio);
    setMostrarFormulario(true);
  };

  // Función para agregar nuevo servicio (solo admin)
  const agregarServicio = () => {
    setMostrarFormulario(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Servicios</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            En HuellaVet ofrecemos una amplia gama de servicios veterinarios y productos 
            para el cuidado integral de tu mascota con la más alta calidad y profesionalismo.
          </p>
          
          {/* Botón para agregar servicio (admin) */}
          <button 
            onClick={agregarServicio}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="text-xl">+</span>
            Agregar Nuevo Servicio
          </button>
        </div>

        {/* Grid de servicios principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative h-64">
                {/* Imagen con fallback */}
                <img 
                  src={servicio.imagen} 
                  alt={servicio.titulo}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imagenCargada[servicio.id] === false ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleImageLoad(servicio.id)}
                  onError={() => handleImageError(servicio.id)}
                />
                
                {/* Fallback con gradiente colorido */}
                <div className={`absolute inset-0 bg-gradient-to-br ${servicio.gradiente} flex items-center justify-center flex-col text-white ${
                  imagenCargada[servicio.id] === false ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}>
                  <div className="text-6xl mb-4 drop-shadow-lg">{servicio.icono}</div>
                  <span className="text-xl font-bold text-center px-4">
                    {servicio.titulo}
                  </span>
                </div>
                
                {/* Overlay suave con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center pb-6">
                  <div className="text-center text-white">
                    <div className="text-3xl mb-2 drop-shadow-lg">{servicio.icono}</div>
                    <h3 className="text-xl font-bold drop-shadow-lg">{servicio.titulo}</h3>
                  </div>
                </div>

                {/* Badge de categoría */}
                <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                  {servicio.categoria}
                </div>

                {/* Indicador de disponibilidad */}
                <div className={`absolute top-4 left-4 w-3 h-3 rounded-full shadow-lg ${
                  servicio.disponible ? 'bg-green-400' : 'bg-red-400'
                }`}>
                  <div className={`w-3 h-3 rounded-full animate-ping ${
                    servicio.disponible ? 'bg-green-400' : 'bg-red-400'
                  }`}></div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {servicio.descripcion}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg border border-teal-200">
                    <span className="text-gray-500 block">Precio:</span>
                    <span className="font-semibold text-teal-700">{servicio.precio}</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200">
                    <span className="text-gray-500 block">Duración:</span>
                    <span className="font-semibold text-blue-700">{servicio.duracion}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => solicitarServicio(servicio)}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Solicitar Servicio
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                    Más Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de estadísticas */}
        <div className="bg-gradient-to-r from-teal-500 via-teal-600 to-blue-600 text-white py-12 px-6 rounded-xl mb-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegir HuellaVet?</h2>
            <p className="text-lg opacity-90">Compromiso, calidad y amor por las mascotas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { icono: "👨‍⚕️", numero: "+5", texto: "Veterinarios Especializados" },
              { icono: "🏥", numero: "24/7", texto: "Atención de Emergencias" },
              { icono: "❤️", numero: "+1000", texto: "Mascotas Atendidas" },
              { icono: "⭐", numero: "4.9", texto: "Calificación Promedio" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">{item.icono}</div>
                <h3 className="text-2xl font-bold mb-2">{item.numero}</h3>
                <p className="text-sm opacity-90">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios adicionales */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Servicios Adicionales</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nombre: "Vacunación", icono: "💉", color: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 border-blue-300" },
              { nombre: "Cirugías", icono: "🏥", color: "bg-gradient-to-br from-red-100 to-red-200 text-red-700 border-red-300" },
              { nombre: "Laboratorio", icono: "🔬", color: "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700 border-purple-300" },
              { nombre: "Rayos X", icono: "📱", color: "bg-gradient-to-br from-green-100 to-green-200 text-green-700 border-green-300" },
              { nombre: "Hospitalización", icono: "🛏️", color: "bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-700 border-yellow-300" },
              { nombre: "Farmacia", icono: "💊", color: "bg-gradient-to-br from-pink-100 to-pink-200 text-pink-700 border-pink-300" },
              { nombre: "Domicilios", icono: "🚗", color: "bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-700 border-indigo-300" },
              { nombre: "Consulta Online", icono: "💻", color: "bg-gradient-to-br from-teal-100 to-teal-200 text-teal-700 border-teal-300" }
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 cursor-pointer border shadow-sm hover:shadow-md`}>
                <div className="text-2xl mb-2">{item.icono}</div>
                <span className="font-medium text-sm">{item.nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para solicitar servicio */}
      {mostrarFormulario && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              {servicioSeleccionado ? `Solicitar: ${servicioSeleccionado.titulo}` : 'Agregar Nuevo Servicio'}
            </h3>
            
            {servicioSeleccionado ? (
              <div>
                <p className="text-gray-600 mb-4">
                  Estás a punto de solicitar el servicio de <strong>{servicioSeleccionado.titulo}</strong>.
                </p>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg mb-4 border">
                  <p><strong>Precio:</strong> {servicioSeleccionado.precio}</p>
                  <p><strong>Duración:</strong> {servicioSeleccionado.duracion}</p>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Te contactaremos pronto para coordinar la cita y confirmar los detalles del servicio.
                </p>
              </div>
            ) : (
              <div>
                <p className="text-gray-600 mb-4">
                  Aquí podrías implementar un formulario para agregar un nuevo servicio con campos como:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 text-sm">
                  <li>Nombre del servicio</li>
                  <li>Descripción detallada</li>
                  <li>Precio</li>
                  <li>Duración estimada</li>
                  <li>Categoría</li>
                  <li>Imagen del servicio</li>
                </ul>
              </div>
            )}
            
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  setMostrarFormulario(false);
                  setServicioSeleccionado(null);
                }}
                className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Cerrar
              </button>
              <button 
                onClick={() => {
                  setMostrarFormulario(false);
                  setServicioSeleccionado(null);
                }}
                className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {servicioSeleccionado ? 'Confirmar Solicitud' : 'Crear Formulario'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Servicios;