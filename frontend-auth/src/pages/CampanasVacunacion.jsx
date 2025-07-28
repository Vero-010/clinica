import React, { useState } from 'react';

const CampanasVacunacion = () => {
  // Estado para las campañas de vacunación
  const [campanas, setCampanas] = useState([
    {
      id: 1,
      titulo: "Campaña Antirrábica 2024",
      descripcion: "Vacunación gratuita contra la rabia para perros y gatos. Protege a tu mascota y a tu familia con esta vacuna esencial.",
      fechaInicio: "2024-08-01",
      fechaFin: "2024-08-31",
      precio: "Gratuita",
      ubicacion: "Sede Principal HuellaVet",
      cupos: 150,
      cuposDisponibles: 89,
      imagen: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop",
      icono: "🐕",
      gradiente: "from-red-400 to-red-600",
      categoria: "Obligatoria",
      edad: "3+ meses",
      especies: ["Perros", "Gatos"]
    },
    {
      id: 2,
      titulo: "Vacunas Múltiples Caninas",
      descripcion: "Paquete completo de vacunas para cachorros: Parvovirus, Moquillo, Hepatitis, Parainfluenza y Leptospirosis.",
      fechaInicio: "2024-07-15",
      fechaFin: "2024-09-15",
      precio: "$120.000",
      ubicacion: "Todas las sedes",
      cupos: 200,
      cuposDisponibles: 156,
      imagen: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
      icono: "💉",
      gradiente: "from-blue-400 to-blue-600",
      categoria: "Esencial",
      edad: "6-16 semanas",
      especies: ["Perros"]
    },
    {
      id: 3,
      titulo: "Vacunación Felina Integral",
      descripcion: "Protección completa para gatos: Rinotraqueítis, Calicivirus, Panleucopenia y Leucemia felina.",
      fechaInicio: "2024-07-20",
      fechaFin: "2024-08-20",
      precio: "$95.000",
      ubicacion: "Sede Norte y Sur",
      cupos: 100,
      cuposDisponibles: 67,
      imagen: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=400&h=300&fit=crop",
      icono: "🐱",
      gradiente: "from-purple-400 to-purple-600",
      categoria: "Recomendada",
      edad: "8+ semanas",
      especies: ["Gatos"]
    },
    {
      id: 4,
      titulo: "Refuerzo Anual Plus",
      descripcion: "Refuerzo completo anual con descuento especial. Incluye vacunas básicas + desparasitación interna.",
      fechaInicio: "2024-08-01",
      fechaFin: "2024-10-31",
      precio: "$80.000",
      ubicacion: "Todas las sedes",
      cupos: 300,
      cuposDisponibles: 245,
      imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
      icono: "🎯",
      gradiente: "from-green-400 to-green-600",
      categoria: "Anual",
      edad: "1+ año",
      especies: ["Perros", "Gatos"]
    }
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [campanaSeleccionada, setCampanaSeleccionada] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');
  const [imagenCargada, setImagenCargada] = useState({});

  // Función para manejar carga de imagen
  const handleImageLoad = (campanaId) => {
    setImagenCargada(prev => ({ ...prev, [campanaId]: true }));
  };

  const handleImageError = (campanaId) => {
    setImagenCargada(prev => ({ ...prev, [campanaId]: false }));
  };

  // Función para inscribirse en campaña
  const inscribirseCampana = (campana) => {
    setCampanaSeleccionada(campana);
    setMostrarFormulario(true);
  };

  // Función para calcular porcentaje de cupos
  const calcularPorcentajeCupos = (disponibles, total) => {
    return ((total - disponibles) / total) * 100;
  };

  // Función para formatear fecha
  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-CO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Filtrar campañas
  const campanasFiltradas = filtroCategoria === 'Todas' 
    ? campanas 
    : campanas.filter(campana => campana.categoria === filtroCategoria);

  const categorias = ['Todas', ...new Set(campanas.map(c => c.categoria))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 via-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-6xl mb-4">💉🐾</div>
          <h1 className="text-4xl font-bold mb-4">Campañas de Vacunación</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Mantén a tu mascota protegida con nuestras campañas de vacunación. 
            Precios especiales, atención profesional y la tranquilidad de saber que tu compañero está seguro.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-6">
        
        {/* Filtros */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Filtrar por Categoría</h2>
          <div className="flex flex-wrap gap-3">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setFiltroCategoria(categoria)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filtroCategoria === categoria
                    ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Información importante */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
          <div className="flex items-start">
            <div className="text-2xl mr-4">⚠️</div>
            <div>
              <h3 className="font-bold text-yellow-800 mb-2">Información Importante</h3>
              <ul className="text-yellow-700 space-y-1 text-sm">
                <li>• Las mascotas deben estar en buen estado de salud</li>
                <li>• Traer carnet de vacunación anterior (si existe)</li>
                <li>• Los cupos son limitados - ¡Reserva con anticipación!</li>
                <li>• Consulta veterinaria gratuita incluida en todas las campañas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Grid de campañas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {campanasFiltradas.map((campana) => (
            <div key={campana.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative h-64">
                {/* Imagen con fallback */}
                <img 
                  src={campana.imagen} 
                  alt={campana.titulo}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imagenCargada[campana.id] === false ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleImageLoad(campana.id)}
                  onError={() => handleImageError(campana.id)}
                />
                
                {/* Fallback con gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-br ${campana.gradiente} flex items-center justify-center flex-col text-white ${
                  imagenCargada[campana.id] === false ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}>
                  <div className="text-6xl mb-4 drop-shadow-lg">{campana.icono}</div>
                  <span className="text-xl font-bold text-center px-4">
                    {campana.titulo}
                  </span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Badge de categoría */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm ${
                  campana.categoria === 'Obligatoria' ? 'bg-red-100 text-red-700' :
                  campana.categoria === 'Esencial' ? 'bg-blue-100 text-blue-700' :
                  campana.categoria === 'Recomendada' ? 'bg-purple-100 text-purple-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {campana.categoria}
                </div>

                {/* Indicador de cupos */}
                <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                  {campana.cuposDisponibles} cupos
                </div>

                {/* Título en overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl mb-2">{campana.icono}</div>
                  <h3 className="text-xl font-bold drop-shadow-lg">{campana.titulo}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {campana.descripcion}
                </p>

                {/* Información de la campaña */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Fechas:</span>
                    <span className="font-medium text-gray-700">
                      {formatearFecha(campana.fechaInicio)} - {formatearFecha(campana.fechaFin)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Precio:</span>
                    <span className={`font-bold ${campana.precio === 'Gratuita' ? 'text-green-600' : 'text-teal-600'}`}>
                      {campana.precio}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Ubicación:</span>
                    <span className="font-medium text-gray-700">{campana.ubicacion}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Especies:</span>
                    <span className="font-medium text-gray-700">{campana.especies.join(', ')}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Edad mínima:</span>
                    <span className="font-medium text-gray-700">{campana.edad}</span>
                  </div>
                </div>

                {/* Barra de progreso de cupos */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Cupos ocupados</span>
                    <span className="text-gray-600">
                      {campana.cupos - campana.cuposDisponibles}/{campana.cupos}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${calcularPorcentajeCupos(campana.cuposDisponibles, campana.cupos)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => inscribirseCampana(campana)}
                    disabled={campana.cuposDisponibles === 0}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 ${
                      campana.cuposDisponibles === 0 
                        ? 'bg-gray-400 text-white cursor-not-allowed' 
                        : 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white'
                    }`}
                  >
                    {campana.cuposDisponibles === 0 ? 'Sin cupos' : 'Inscribirse'}
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                    Más Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de beneficios */}
        <div className="bg-gradient-to-r from-teal-500 via-teal-600 to-blue-600 text-white py-12 px-6 rounded-xl mb-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Beneficios de Vacunar</h2>
            <p className="text-lg opacity-90">La prevención es la mejor medicina</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { icono: "🛡️", titulo: "Protección", texto: "Inmunidad contra enfermedades graves" },
              { icono: "💰", titulo: "Ahorro", texto: "Prevenir es más económico que curar" },
              { icono: "🏥", titulo: "Salud Pública", texto: "Protección para toda la comunidad" },
              { icono: "❤️", titulo: "Tranquilidad", texto: "Paz mental para toda la familia" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">{item.icono}</div>
                <h3 className="text-lg font-bold mb-2">{item.titulo}</h3>
                <p className="text-sm opacity-90">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calendario de próximas campañas */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Próximas Campañas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { mes: "Septiembre", campana: "Vacunación Escolar", fecha: "15-30 Sep", color: "bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700" },
              { mes: "Octubre", campana: "Mes de la Mascota", fecha: "Todo Octubre", color: "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700" },
              { mes: "Noviembre", campana: "Preparación Verano", fecha: "1-15 Nov", color: "bg-gradient-to-br from-green-100 to-green-200 text-green-700" }
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-4 rounded-xl text-center border shadow-sm`}>
                <h3 className="font-bold mb-2">{item.mes}</h3>
                <p className="text-sm font-medium">{item.campana}</p>
                <p className="text-xs opacity-75 mt-1">{item.fecha}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para inscripción */}
      {mostrarFormulario && campanaSeleccionada && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Inscripción: {campanaSeleccionada.titulo}
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border">
                <p><strong>Precio:</strong> {campanaSeleccionada.precio}</p>
                <p><strong>Fechas:</strong> {formatearFecha(campanaSeleccionada.fechaInicio)} - {formatearFecha(campanaSeleccionada.fechaFin)}</p>
                <p><strong>Ubicación:</strong> {campanaSeleccionada.ubicacion}</p>
                <p><strong>Cupos disponibles:</strong> {campanaSeleccionada.cuposDisponibles}</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Requisitos:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Mascota en buen estado de salud</li>
                  <li>• Edad mínima: {campanaSeleccionada.edad}</li>
                  <li>• Especies: {campanaSeleccionada.especies.join(', ')}</li>
                  <li>• Documento de identidad del propietario</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  setMostrarFormulario(false);
                  setCampanaSeleccionada(null);
                }}
                className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Cancelar
              </button>
              <button 
                onClick={() => {
                  // Aquí iría la lógica de inscripción
                  setMostrarFormulario(false);
                  setCampanaSeleccionada(null);
                  alert('¡Inscripción exitosa! Te contactaremos pronto.');
                }}
                className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Confirmar Inscripción
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampanasVacunacion;