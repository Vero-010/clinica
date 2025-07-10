import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Mis Mascotas", path: "/mis-mascotas" },
    { name: "Productos y Ofertas", path: "/productos" },
    { name: "Servicios", path: "/servicios" },
    { name: "Vacunación", path: "/campanas-vacunacion" },
  ];

  return (
    <header className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center relative">
      <Link to="/" className="text-xl font-bold">
        HuellaVet
      </Link>

      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-700 md:hidden z-10">
          <ul className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`hover:text-yellow-300 ${
                    location.pathname === link.path ? "text-yellow-300" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Menú escritorio */}
      <nav className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`hover:text-yellow-300 ${
              location.pathname === link.path ? "text-yellow-300" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
