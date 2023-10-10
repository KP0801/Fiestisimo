import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import Alerta from "../../Components/Alerta";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Los campos son Obligatorios",
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 5000);
      return;
    }

    try {
      const { data } = await axios.post("/usuarios/login", { email, password });
      setAlerta({});
      localStorage.setItem("token", data.token);
      /* setAuth(data) */
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 5000);
    }
  };

  const { msg } = alerta;

  return (
    <>
      <Link to="/" className="flex items-center gap-4 mt-10 mx-20">
        <AiFillHome size={30} />
        <p className="text-lg font-bold">Volver</p>
      </Link>
      <div className="container mx-auto md:w-2/3 lg:w-2/5 mb-10 mt-10">
        <h1 className="text-sky-600 font-black text-6xl capitalize">
          Inicia Sesion y pide tus{" "}
          <span className="text-slate-700">Productos</span>
        </h1>
        {msg && <Alerta alerta={alerta} />}
        <form
          onSubmit={handleSubmit}
          className="my-20  bg-white p-10 shadow rounded-lg"
        >
          <div className="my-5">
            <label
              className="uppercase text-gray-800 block text-xl font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Escribe tu email"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-800 block text-xl font-bold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Escribe tu password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesion"
            className="p-3 bg-sky-700 shadow w-full rounded-lg text-xl uppercase font-bold text-white hover:cursor-pointer hover:bg-sky-900 transition-colors"
          />
        </form>

        <nav className="lg:flex lg:justify-between ">
          <Link
            className="block text-center my-2 text-slate-500 uppercase text-sm"
            to="/register"
          >
            No tienes una Cuenta? Registrate
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

export default Login;
