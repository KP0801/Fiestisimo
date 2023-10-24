import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { Outlet } from "react-router-dom";
import Products from "../../Products/Products";
import SideBar2 from "../../SideBar/SideBar2";

const Productos = () => {



<main className="px-3 lg:px-10">
  
      <Navbar />
      <hr />
      <div className="container mx-10">
        <Outlet />
      </div>
    </main>

return (
<div>
<SideBar2/>
<Products/>

</div>
);


}


export default Productos;
