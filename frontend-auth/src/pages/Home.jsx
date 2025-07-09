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
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-4xl flex justify-between items-center py-6">
      <div className="flex items-start justify-start bg-transparent m-0 p-0">
      <img
        src="/imagenes/logo.png"
        alt="Logo"
        className="w-[300px] h-auto object-contain m-0 p-0"
      />
    </div>
        <nav className="space-x-2">
          {!user ? (
            <>
              <Link
                to="/login"
                className="inline-block px-5 py-2 bg-white text-blue-600 border border-blue-600 rounded-full font-medium hover:bg-blue-50 transition duration-200"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition duration-200"
              >
                Registrarse
              </Link>
            </>
          ) : (
            <Link
              to="/dashboard"
              className="inline-block px-5 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition duration-200"
            >
              Ir al Dashboard
            </Link>
          )}
        </nav>
      </header>

      <main className="flex-1 w-full max-w-3xl text-center py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
        <p>
            Bienvenido a{" "}
             <span>
               <span className="text-blue-600">Vet</span>
               <span className="text-green-600">+cotas</span>
             </span>
        </p>
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Más que perros y gatos!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {!user ? (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-base font-semibold"
            >
              Empezar
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-base font-semibold"
            >
              Ir al Dashboard
            </Link>
          )}
          <a
            href="#features"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition text-base font-semibold"
          >
            Ver más
          </a>
        </div>
      </main>

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
        © {new Date().getFullYear()} MiProyecto. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Home;
