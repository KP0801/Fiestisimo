import "./SideBar2.css"
import Categoria from "./Categoria/Categoria"
import Precio from "./Precio/Precio"
import { BsSearch } from "react-icons/bs"

function SideBar2() {
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
        <h1><BsSearch /></h1>
        <Categoria />
        <Precio />
      </div>

    
    </section>

    </>
  );
}
export default SideBar2