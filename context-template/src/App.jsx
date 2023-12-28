import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import AboutPage from "./components/AboutPage";
import Navbar from "./components/Navbar";
import { UserProvider } from "./contexts/UserProvider";
//Link nos permite que no se vuelva a cargar la aplicación, si usamos <a></a>. Habra un refresh.
const App = () => {
  return (
    <>
      <UserProvider>
        <Navbar />
        <div className="p-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            {/* No hace falta usar el / antes del route */}
            <Route path="about" element={<AboutPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
            {/* Con el navigate te redirige a la ruta del to para que no quede la url */}
          </Routes>
        </div>
      </UserProvider>
    </>
  );
};

export default App;
