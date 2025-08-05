import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductGallery from "../components/ProductGallery";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["/imagenes/hero1.jpg", "/imagenes/hero2.jpg", "/imagenes/hero3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero - Carrusel automático sin contenido encima */}
      <section className="relative h-screen md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Hero ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>

      {/* Sección Sobre */}
      <section className="max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-teal-600 mb-4">¿Quiénes somos?</h2>
          <p className="text-gray-600 mb-6">
            Somos un equipo especializado en cuidado veterinario, con experiencia y pasión por los animales.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>✅ Medicina preventiva y especializada</li>
            <li>✅ Adopción responsable y seguimiento post-adopción</li>
            <li>✅ Tienda de accesorios y productos de calidad</li>
          </ul>
        </div>
        <div>
          <img src="/imagenes/equipo.jpg" alt="Veterinaria" className="rounded-lg shadow-lg"/>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-teal-600 mb-12">Servicios destacados</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Consultas médicas", desc: "Diagnóstico y cuidado profesional." },
              { title: "Vacunación & desparasitación", desc: "Protección completa para tu mascota." },
              { title: "Cirugía & emergencias", desc: "Atención inmediata y especializada." },
            ].map(s => (
              <div key={s.title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adopciones */}
      <section id="adopciones" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">Adopta un amigo</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {["Max", "Luna", "Rocky"].map(nombre => (
            <div key={nombre} className="bg-white shadow-md rounded-xl overflow-hidden group">
              <img src={`/imagenes/${nombre.toLowerCase()}.jpg`} alt={nombre} className="w-full h-56 object-cover group-hover:scale-105 transition" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{nombre}</h3>
                <Link to="/contacto#adopcion" className="text-teal-600 font-medium hover:underline">
                  Más información
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Productos */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          
          <ProductGallery />
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Lo que dicen nuestros clientes</h2>
          <p className="italic">“Excelente atención, íbamos con miedo y salimos muy tranquilos. 100% recomendados.”</p>
          <p className="mt-4 italic">“El personal es muy amable y profesional.”</p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">Contáctanos</h2>
        <form className="grid gap-6 md:grid-cols-2">
          <input type="text" placeholder="Nombre" className="p-4 border rounded-lg" />
          <input type="email" placeholder="Correo electrónico" className="p-4 border rounded-lg" />
          <textarea rows="4" placeholder="Mensaje" className="p-4 border rounded-lg md:col-span-2" />
          <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 rounded-lg font-semibold md:col-span-2">
            Enviar mensaje
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">HuellaVet</h3>
            <p>Calle 123, Bogotá • (+57)300-1234567</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Enlaces</h4>
            <ul className="space-y-2">
              <li><Link to="/terminos" className="hover:text-white">Términos y condiciones</Link></li>
              <li><Link to="/privacidad" className="hover:text-white">Política de privacidad</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Síguenos</h4>
            <p>Instagram • Facebook • WhatsApp</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} HuellaVet. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Home;
