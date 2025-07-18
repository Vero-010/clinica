import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductGallery from "../components/ProductGallery";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col items-center justify-center">
      <div 
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat" 
        style={{backgroundImage: "url('/imagenes/fondo degradado azul.jpg')"}}
      >
        {/* Imagen PNG sin fondo encima y ocupando todo el contenedor */}
  <img
    src="/imagenes/fondo-ultimo.png"
    alt="Decoración"
    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
    style={{ zIndex: 5 }}
  />
      <header className="w-full max-w-4xl flex justify-start items-center py-6">
  
</header>



      
     </div>
      <section id="features" className="w-full max-w-6xl py-16 text-center">
  <h3 className="text-2xl font-bold text-gray-800 mb-6">
    Nuestros Servicios
  </h3>
  <div className="grid md:grid-cols-3 gap-6 text-gray-700 px-4">
    <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{backgroundImage: "url('./imagenes/atencionmedica.jpg')"}}
      ></div>
      <div className="relative z-10">
        <h4 className="font-bold mb-2 text-gray-900 drop-shadow-lg">Atención Médica</h4>
        <p className="text-gray-800 font-medium drop-shadow-md">
          Consultas veterinarias, diagnósticos, tratamientos médicos y quirúrgicos. 
          Atención de emergencias las 24 horas con profesionales especializados.
        </p>
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{backgroundImage: "url('./imagenes/concentrados.jpg')"}}
      ></div>
      <div className="relative z-10">
        <h4 className="font-bold mb-2 text-gray-900 drop-shadow-lg">Concentrados</h4>
        <p className="text-gray-800 font-medium drop-shadow-md">
          Alimentos balanceados para perros, gatos y otras mascotas. 
          Asesoría nutricional personalizada según las necesidades de tu mascota.
        </p>
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{backgroundImage: "url('./imagenes/petshop.jpg')"}}
      ></div>
      <div className="relative z-10">
        <h4 className="font-bold mb-2 text-gray-900 drop-shadow-lg">Pet Shop</h4>
        <p className="text-gray-800 font-medium drop-shadow-md">
          Accesorios, juguetes, productos de higiene y 
          todo lo necesario para el cuidado diario de tu mascota.
        </p>
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{backgroundImage: "url('./imagenes/belleza.jpg')"}}
      ></div>
      <div className="relative z-10">
        <h4 className="font-bold mb-2 text-gray-900 drop-shadow-lg">Estética y Belleza</h4>
        <p className="text-gray-800 font-medium drop-shadow-md">
          Baño, corte de pelo, arreglo de uñas y 
          cuidado completo para mantener a tu mascota limpia y saludable.
        </p>
      </div>
    </div>
  </div>
</section>

      <ProductGallery />

      <footer className="w-full text-center text-gray-600 py-6">
        © {new Date().getFullYear()} Vet+cotas. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Home;
