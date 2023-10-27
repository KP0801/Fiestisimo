import { Link } from "react-router-dom";
const HeaderUsers = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-sky-600 font-black text-center">
          Fiestisimo
        </h2>
        <div className="flex items-center gap-4">
          <Link to="/pedidos" className="font-bold uppercase">
            Favoritos
          </Link>

          <button
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
