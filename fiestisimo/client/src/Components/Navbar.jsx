import { Link,useLocation } from "react-router-dom";
import { BiSolidUserCircle, BiSolidUserPlus,BiCake } from "react-icons/bi";
const Navbar = () => {
  const location = useLocation();

  return (
    <div className="grid items-center justify-between lg:grid-cols-3 gap-2 lg:gap-20 px-20 mt-4 mb-4">
      <Link to="/">
        <img
          src="/assets/LogoReposteria1.1.png"
          alt="Logooo"
          width={200}
          height={25}
          className="mx-auto lg:mx-0"
        />
      </Link>
      <div className="flex gap-4 text-center">
        {/* <Link className="text-lg" to="/postres">
          Postres
        </Link>
        <Link className="text-lg" to="/panaderia">
          Panaderia
        </Link>
        <Link className="text-lg" to="/pasteles">
          Pasteles
        </Link>
        <Link className="text-lg" to="/populares">
          Populares
        </Link> */}
      </div>
      <div className="grid lg:grid-cols-3">
        <Link to="/login" className="flex items-center gap-2 cursor-pointer">
          <p className="text-lg">Iniciar Sesion</p>
          <BiSolidUserCircle size={30} />
        </Link>
        <Link to="register" className="flex items-center gap-2 cursor-pointer">
          <p className="text-lg">Registrarse</p>
          <BiSolidUserPlus size={30} />
        </Link>
        {location.pathname !=="/Productos" &&    
        (<Link to="Productos" className="flex items-center gap-2 cursor-pointer">
          <p className="text-lg">Productos</p>
          <BiCake size={30} />
        </Link>)}

      </div>
    </div>
  );
};

export default Navbar;
  