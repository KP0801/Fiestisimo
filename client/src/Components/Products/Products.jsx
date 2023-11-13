
import Navbar from "../Navbar"
import ProductCard from "./ProductCard";
import { useState } from "react";
import data from "../../data";
import SideBarProducts from "./SideBarProducts";



 const Products = () => {

     


  return (
   <>
   <Navbar></Navbar>
<div>
  <SideBarProducts></SideBarProducts>
<section id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {getListProducts()}
    </section>

</div>
    

   </>
    
    


  );
};

export default Products
