import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Mis Mascotas", path: "/mis-mascotas" },
    { name: "Productos y Ofertas", path: "/productos" },
    { name: "Servicios", path: "/servicios" },
    { name: "Vacunación", path: "/campanas-vacunacion" },
  ];

  return (
    <header
      className="text-white px-4 py-3 flex justify-between items-center relative"
      style={{
        backgroundImage: "url('/imagenes/fondo degradado azul.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        imageRendering: "pixelated",
      }}
    >
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
        <nav className="absolute top-full left-0 w-full bg-black/70 md:hidden z-10 backdrop-blur-sm">
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

            {!user ? (
              <>
                <li>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded"
                  >
                    Iniciar sesión
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="bg-white text-black hover:bg-gray-300 px-3 py-1 rounded"
                  >
                    Registrarse
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      handleLogout();
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded w-full text-left"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}

      {/* Menú escritorio */}
      <div className="hidden md:flex items-center gap-6">
        <nav className="flex gap-6">
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

        {!user ? (
          <div className="flex gap-3">
            <Link
              to="/login"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="bg-white text-black hover:bg-gray-300 px-3 py-1 rounded"
            >
              Registrarse
            </Link>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/dashboard"
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
