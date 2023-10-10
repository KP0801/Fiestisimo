import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { Outlet } from "react-router-dom";

const RutaProtegida = () => {
  return (
    <>
      {/* {auth._id ? ( */}
      <div className="bg-gray-100">
        <Header />
        <div className="md:flex md:min-h-screen">
          <SideBar />

          <main className="flex-1 p-10">
            {/* flex-1 hace que tome el resto del contenido de la pantalla */}
            <Outlet />
          </main>
        </div>
      </div>
      {/* ) : <Navigate to="/"/> } */}
    </>
  );
};

export default RutaProtegida;
