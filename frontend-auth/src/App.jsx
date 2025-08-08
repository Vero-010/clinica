import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Componentes de navegación
import Navbar from "./components/Navbar";

// Páginas públicas
import Home from "./pages/Home";
import MisMascotas from "./pages/mismascotas"; // pública
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import CampanasVacunacion from "./pages/CampanasVacunacion";
import Adoptame from "./pages/¡Adoptame!";
import NotFound from "./pages/NotFound";

// Autenticación y acceso
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";

// Dashboard
import Dashboard from "./pages/Dashboard";

// Panel Admin
import AdminLayout from "./components/AdminLayout";
import AdminWelcome from "./components/Welcome";
import Usuarios from "./pages/admin/UserList";
import ProductosAdmin from "./pages/admin/Productos";
import Reportes from "./pages/admin/Reportes";
import Pets from "./pages/admin/Pets"; // pública? no, esta es la admin
import MisMascotasAdmin from "./pages/mismascotas"; // <-- nueva página admin

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const onLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Router>
      {/* Navbar general para todas las rutas públicas */}
      <Navbar />

      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/mis-mascotas" element={<MisMascotas />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/campanas-vacunacion" element={<CampanasVacunacion />} />
        <Route path="/adoptame" element={<Adoptame />} />

        {/* Autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Dashboard usuario */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout user={user} onLogout={onLogout} />
            </AdminRoute>
          }
        >
          <Route index element={<AdminWelcome user={user} />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="productos" element={<ProductosAdmin />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="mascotas" element={<Pets />} />
          <Route path="mismascotas" element={<MisMascotasAdmin />} /> {/* <-- nueva ruta admin */}
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Notificaciones */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
};

export default App;
