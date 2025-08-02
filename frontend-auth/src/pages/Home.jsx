import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CircleType from "circletype";
import ProductGallery from "../components/ProductGallery";

const Home = () => {
  const [user, setUser] = useState(null);
  const arcTextRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }

    if (arcTextRef.current) {
      new CircleType(arcTextRef.current).radius(250);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div 
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/imagenes/fondo degradado azul.jpg')" }}
      >
        <section className="relative w-full h-[500px]">
          {/* Imagen decorativa */}
          <img
            src="/imagenes/fondo-ultimo.png"
            alt="Decoración"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none z-5"
          />

          {/* Texto curvado */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
            <div
              ref={arcTextRef}
              className="font-roboto-slab text-white text-5xl md:text-6xl font-bold text-center translate-x-10 -translate-y-9"
            >
              ¡Bienvenido a HuellaVet!
            </div>
          </div>
        </section>

        <header className="w-full max-w-4xl flex justify-start items-center py-6">
          {/* Puedes agregar aquí botones, logotipo, navegación, etc. */}
        </header>
      </div>

      {/* Sección de servicios */}
      <section id="features" className="w-full max-w-6xl py-16 text-center">
        <p className="inline-block bg-blue-100 text-blue-500 font-semibold px-4 py-1 rounded-lg">
          Conoce las diferentes formas en que cuidamos a tu mascota
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Nuestros Servicios
        </h3>

        {/* Aquí irían tus tarjetas o componentes de servicios */}
      </section>

      {/* Galería de productos */}
      <ProductGallery />

      {/* Footer */}
      <footer className="w-full text-center text-gray-600 py-6">
        © {new Date().getFullYear()} Vet+cotas. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Home;
