import FormInput from "./Components/FormInput"
import "./app.css";
import { useState } from 'react';
export const foo = 12

//import { useRef } from "react";




const App = () => {
// Funcion Para Registrar
  const [values, setValues] = useState({
    NombreCompleto: "",
    Email: "",
    Telefono: "",
    Password: "",
  });


 
  

  const inputs = [
    {
      id: 1,
      name: "NombreCompleto",
      type: "text",
      placeholder: "Nombre Completo",
      errorMessage:"Nombre tiene que ser mas de 5 Caracteres",
      label: "Nombre Completo",
      
      require:true,
    },
    {
      id: 2,
      name: "Email",
      type: "Email",
      errorMessage:'Email no valido!',
      placeholder: "Email",
      label: "Email",
      require:true,
    },
    {
      id: 3,
      name: "Telefono",
      type: "text",
      placeholder: "9999-9999",
      label: "Telefono",
      errorMessage:'Telefono no valido!',
      require:true,
    },
    {
      id: 4,
      name: "Password",
      type: "password",
      errorMessage:"Contraseña tiene que ser entre 8-20 caracteres y al menos 1 numero y caracter especial",
      placeholder: "Contraseña",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "Password",
      require:true,
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (

    <main className=" bg-indigo-300">
    
      <div className="app">
      
      <form onSubmit={handleSubmit} className=" bg-slate-50 py-5 px-[70px] rounded-lg mx-auto">
      <h1 className="  font-poppins mt-3  font-bold text-center text-2xl">REGISTRO</h1>
      <br></br>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}  />
        ))}
        <button
          type="Submit"
          className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
          Registrar
        </button>
      </form>
      </div>
    </main>



  )
        
}

export default App
