import { Link } from "react-router-dom";

const RecoverPassword = () => {
  return (
    <div className="container mx-auto md:w-2/3 lg:w-2/5 mb-10 mt-20">
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Restablece tu contraseña y no pierdas{" "}
        <span className="text-slate-700">Tus Pedidos</span>
      </h1>
      {/* {tokenValid &&( */}
      <form
        /* onSubmit={handleSubmit} */ className="my-20 bg-white p-10 shadow rounded-lg"
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-800 block text-xl font-bold"
            htmlFor="nuevo-password"
          >
            Nuevo Password
          </label>
          <input
            type="password"
            placeholder="Escribe tu nuevo password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="nuevo-password" /* value={password} onChange={e=>setPassword(e.target.value)} */
          />
        </div>
        <input
          type="submit"
          value="Guardar Nuevo Password"
          className="p-3 bg-sky-700 shadow w-full rounded-lg text-xl uppercase font-bold text-white hover:cursor-pointer hover:bg-sky-900 transition-colors"
        />
      </form>
      {/* )} */}
      {/* {passwordModificado && ( */}
      <Link
        className="block text-center my-2 text-slate-500 uppercase text-sm"
        to="/login"
      >
        Inicia Sesion
      </Link>
      {/* )} */}
    </div>
  );
};

export default RecoverPassword;
