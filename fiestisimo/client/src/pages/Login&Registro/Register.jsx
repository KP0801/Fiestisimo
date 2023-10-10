import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Register = () => {
  return (
    <>
      <Link to="/" className="flex items-center gap-4 mt-10 mx-20">
        <AiFillHome size={30} />
        <p className="text-lg font-bold">Volver</p>
      </Link>
      <div className="container mx-auto md:w-2/3 lg:w-2/5 mb-10 mt-10">
        <h1 className="text-sky-600 font-black text-5xl capitalize">
          Registrate en nuestro Sitio{" "}
          <span className="text-slate-700">Pasteleria Fiestisimo</span>
        </h1>
        <form
          /* onSubmit={handleSubmit} */ className="my-20 bg-white p-10 shadow rounded-lg"
        >
          <div className="my-5">
            <label
              className="uppercase text-gray-800 block text-xl font-bold"
              htmlFor="nombre"
            >
              Nombre Completo
            </label>
            <input
              /* onChange={e => setNombre(e.target.value)} value={nombre} */ type="text"
              placeholder="Escribe tu Nombre"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="nombre"
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-800 block text-xl font-bold"
              htmlFor="email"
            >
              Correo Electronico
            </label>
            <input
              /* value={email} onChange={e => setEmail(e.target.value)} */ type="email"
              placeholder="Escribe tu correo"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="email"
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-800 block text-xl font-bold"
              htmlFor="telefono"
            >
              Tel
            </label>
            <input
              /* value={email} onChange={e => setEmail(e.target.value)} */ type="text"
              placeholder="Escribe tu telefono"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="telefono"
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-800 block text-xl font-bold"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              /* value={password} onChange={e => setPassword(e.target.value)} */ type="password"
              placeholder="Escribe tu Contraseña"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="password"
            />
          </div>

          <div className="my-5">
            <label
              className="uppercase text-gray-800 block text-xl font-bold"
              htmlFor="password2"
            >
              Repetir Contraseña
            </label>
            <input
              /* value={password2} onChange={e => setPassword2(e.target.value)} */ type="password"
              placeholder="Repite tu Contraseña"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="password2"
            />
          </div>
          
         
          <input
            type="submit"
            value="Crear Cuenta"
            className="p-3 bg-sky-700 shadow w-full rounded-lg text-xl uppercase font-bold text-white hover:cursor-pointer hover:bg-sky-900 transition-colors"
          />
        </form>

        <nav className="lg:flex lg:justify-between ">
          <Link
            className="block text-center my-2 text-slate-500 uppercase text-sm"
            to="/login"
          >
            Ya tienes una Cuenta? Inicia Sesion
          </Link>
          <Link
            className="block text-center my-2 text-slate-500 uppercase text-sm"
            to="/recover-password"
          >
            Olvide mi Contrasena
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Register;
