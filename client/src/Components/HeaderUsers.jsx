import { Link } from "react-router-dom";
import useAuthUsers from "../hooks/useAuthUsers";
import Logo from "../design/Logo1.png";

const HeaderUsers = () => {
  const { cerrarSesionUsers } = useAuthUsers();

  const handleCerrarSesion = () => {
    cerrarSesionUsers();
    localStorage.removeItem("token");
  };
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <Link to="">
          <img src={Logo} alt="LogoFiestisimo" className="w-32 h-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/pedidos" className="font-bold uppercase">
            Favoritos
          </Link>

          <button
            onClick={handleCerrarSesion}
            type="button"
            className="text-white text-sm bg-sky-600 uppercase shadow-md hover:bg-sky-800 p-3 rounded-md font-bold"
          >
            Cerrar Cesion
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderUsers;
