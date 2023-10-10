import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "./Components/Description";
import Login from "./pages/Login&Registro/Login";
import RecoverPassword from "./pages/Login&Registro/RecoverPassword";
import Register from "./pages/Login&Registro/Register";
import AuthLayouts from "./layouts/AuthLayouts";
import PrincipalPage from "./pages/PrincipalPage";
import RutaProtegida from "./layouts/RutaProtegida";
import PaginaInicio from "./pages/PaginaInicio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayouts />}>
          <Route index element={<PrincipalPage />} />
        </Route>
        <Route path="quienes-somos" element={<Description />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recover-password" element={<RecoverPassword />} />
        <Route path="/Inicio" element={<RutaProtegida />}>
          <Route index element={<PaginaInicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
