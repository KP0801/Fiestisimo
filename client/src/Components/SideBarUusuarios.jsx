import { Link } from "react-router-dom";
import useAuthUsers from "../hooks/useAuthUsers";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const SideBarUusuarios = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10">
      {location.pathname === "/InicioUsers" ? (
        ""
      ) : (
        <p
          onClick={() => navigate(-1)}
          className="mb-5 px-4 py-3 bg-sky-600 hover:bg-sky-700 text-white flex justify-center cursor-pointer rounded-lg shadow-md"
        >
          <IoMdArrowBack size={25} />
        </p>
      )}
      <Link
        to="crear-proyecto"
        className="bg-sky-600 w-full text-white uppercase font-bold block mt-5  text-center rounded-lg p-3"
      >
        Mas visitados{" "}
      </Link>
    </aside>
  );
};

export default SideBarUusuarios;
