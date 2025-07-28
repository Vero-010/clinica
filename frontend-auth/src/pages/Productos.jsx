import React, { useState } from 'react';

const Productos = () => {
  // Estado para los productos
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Alimento Premium Perros",
      imagen: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop",
      categoria: "Alimentación",
      precio: "$45.000",
      descripcion: "Alimento balanceado premium para perros adultos",
      stock: 25,
      marca: "Royal Canin",
      peso: "15 kg"
    },
    {
      id: 2,
      nombre: "Champú Medicinal",
      imagen: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=300&h=300&fit=crop",
      categoria: "Higiene",
      precio: "$18.500",
      descripcion: "Champú especializado para problemas de piel",
      stock: 15,
      marca: "Veterinary Formula",
      peso: "500 ml"
    },
    {
      id: 3,
      nombre: "Juguete Interactivo",
      imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop",
      categoria: "Juguetes",
      precio: "$12.000",
      descripcion: "Juguete estimulante para mascotas",
      stock: 30,
      marca: "Kong",
      peso: "200 g"
    },
    {
      id: 4,
      nombre: "Collar Antipulgas",
      imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop",
      categoria: "Salud",
      precio: "$22.000",
      descripcion: "Collar de protección contra pulgas y garrapatas",
      stock: 20,
      marca: "Bayer",
      peso: "50 g"
    },
    {
      id: 5,
      nombre: "Cama Ortopédica",
      imagen: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300&h=300&fit=crop",
      categoria: "Accesorios",
      precio: "$85.000",
      descripcion: "Cama ortopédica para mascotas mayores",
      stock: 10,
      marca: "PetSafe",
      peso: "2 kg"
    },
    {
      id: 6,
      nombre: "Vitaminas Multiples",
      imagen: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=300&fit=crop",
      categoria: "Suplementos",
      precio: "$35.000",
      descripcion: "Complejo vitamínico para mascotas",
      stock: 18,
      marca: "Nutri-Vet",
      peso: "100 tabletas"
    }
  ]);

  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Obtener categorías únicas
  const categorias = ['Todos', ...new Set(productos.map(producto => producto.categoria))];

  // Filtrar productos por categoría
  const productosFiltrados = categoriaFiltro === 'Todos' 
    ? productos 
    : productos.filter(producto => producto.categoria === categoriaFiltro);

  // Función para eliminar producto
  const eliminarProducto = (id) => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  // Función para agregar nuevo producto
  const agregarProducto = () => {
    setMostrarFormulario(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-6">
        {/* Header con botón y filtros */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <button 
              onClick={agregarProducto}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <span className="text-xl">+</span>
              Agregar Nuevo Producto
            </button>
          </div>

          {/* Filtros por categoría */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaFiltro(categoria)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  categoriaFiltro === categoria
                    ? 'bg-teal-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Primera fila de productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {productosFiltrados.slice(0, 3).map((producto) => (
            <div key={`top-${producto.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback cuando la imagen no carga */}
                <div className="absolute inset-0 bg-gray-300 hidden items-center justify-center flex-col">
                  <div className="text-4xl mb-2">📦</div>
                  <span className="text-gray-600 font-medium text-sm text-center px-2">
                    {producto.nombre}
                  </span>
                </div>
                <button 
                  onClick={() => eliminarProducto(producto.id)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"
                >
                  ×
                </button>
                {/* Badge de categoría */}
                <div className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 rounded text-xs font-medium">
                  {producto.categoria}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center mb-2">{producto.nombre}</h3>
                <p className="text-2xl font-bold text-teal-600 text-center mb-3">{producto.precio}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Marca:</span>
                    <span>{producto.marca}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Categoría:</span>
                    <span>{producto.categoria}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peso/Tamaño:</span>
                    <span>{producto.peso}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stock:</span>
                    <span className={producto.stock > 10 ? 'text-green-600' : 'text-red-600'}>
                      {producto.stock} unidades
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-600 text-xs">{producto.descripcion}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors text-sm">
                    EDITAR
                  </button>
                  <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors text-sm">
                    VER DETALLES
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Segunda fila de productos */}
        {productosFiltrados.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {productosFiltrados.slice(3, 6).map((producto) => (
              <div key={`bottom-${producto.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback cuando la imagen no carga */}
                  <div className="absolute inset-0 bg-gray-300 hidden items-center justify-center flex-col">
                    <div className="text-4xl mb-2">📦</div>
                    <span className="text-gray-600 font-medium text-sm text-center px-2">
                      {producto.nombre}
                    </span>
                  </div>
                  <button 
                    onClick={() => eliminarProducto(producto.id)}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  >
                    ×
                  </button>
                  {/* Badge de categoría */}
                  <div className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {producto.categoria}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center mb-2">{producto.nombre}</h3>
                  <p className="text-2xl font-bold text-teal-600 text-center mb-3">{producto.precio}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Marca:</span>
                      <span>{producto.marca}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Categoría:</span>
                      <span>{producto.categoria}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Peso/Tamaño:</span>
                      <span>{producto.peso}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stock:</span>
                      <span className={producto.stock > 10 ? 'text-green-600' : 'text-red-600'}>
                        {producto.stock} unidades
                      </span>
                    </div>
                    <div className="mt-2">
                      <p className="text-gray-600 text-xs">{producto.descripcion}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors text-sm">
                      EDITAR
                    </button>
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors text-sm">
                      VER DETALLES
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sección inferior con estadísticas */}
        <div className="bg-teal-500 text-white py-8 px-6 rounded-lg mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">GESTIONA TU INVENTARIO</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
              <div>
                <p className="font-semibold">Total de productos:</p>
                <p className="text-3xl font-bold">{productos.length}</p>
              </div>
              <div>
                <p className="font-semibold">Categorías:</p>
                <p className="text-3xl font-bold">{categorias.length - 1}</p>
              </div>
              <div>
                <p className="font-semibold">Stock total:</p>
                <p className="text-3xl font-bold">{productos.reduce((total, producto) => total + producto.stock, 0)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Galería de productos en miniatura */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {productos.map((producto, index) => (
            <div key={`gallery-${producto.id}`} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer">
              <img 
                src={producto.imagen} 
                alt={producto.nombre}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-2">
                <div className="text-center">
                  <span className="text-white font-semibold text-xs block">
                    {producto.nombre}
                  </span>
                  <span className="text-teal-300 font-bold text-xs">
                    {producto.precio}
                  </span>
                </div>
              </div>
              {/* Fallback cuando la imagen no carga */}
              <div className="absolute inset-0 bg-gray-300 hidden items-center justify-center flex-col">
                <div className="text-2xl mb-1">📦</div>
                <span className="text-gray-600 font-medium text-xs text-center px-1">
                  {producto.nombre}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para agregar producto */}
      {mostrarFormulario && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Agregar Nuevo Producto</h3>
            <p className="text-gray-600 mb-4">
              Aquí podrías implementar un formulario para agregar un nuevo producto con campos como:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 text-sm">
              <li>Nombre del producto</li>
              <li>Categoría</li>
              <li>Precio</li>
              <li>Marca</li>
              <li>Descripción</li>
              <li>Stock inicial</li>
              <li>Peso/Tamaño</li>
              <li>Imagen del producto</li>
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

export default Productos;