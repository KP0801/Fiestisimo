import { Link } from "react-router-dom";
import useAuthUsers from "../hooks/useAuthUsers";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const SideBarUusuarios = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authUsers } = useAuthUsers();
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10">
      {location.pathname === "/InicioUsers" ? (
        <>
          <div className="w-full mt-10 justify-center items-center flex">
            <img
              src="/assets/Perfil.jpg"
              alt="PerfilVacio"
              className="w-40 h-40 rounded-full"
            />
          </div>
          <div className="flex justify-center mt-5">
            <p className="text-base text-sky-700 font-bold">{authUsers.name}</p>
          </div>
        </>
      ) : (
        <p
          onClick={() => navigate(-1)}
          className="mb-5 px-4 py-3 bg-sky-600 hover:bg-sky-700 text-white flex justify-center cursor-pointer rounded-lg shadow-md"
        >
          <IoMdArrowBack size={25} />
        </p>
      )}
    </aside>
  );
};

export default SideBarUusuarios;
