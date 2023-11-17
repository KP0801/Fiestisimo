import { useState, useEffect } from "react";
import axios from "axios";
import CardPoductos from "../Components/Productos/CardPoductos";
const ProductosView = () => {
  const [productos, setProductos] = useState([]);
  const [check, setCheck] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = productos.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(productos.length / productsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const getProductos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios(
          "http://localhost:3000/fiestisimo/products/cheap/products",
          config
        );
        console.log("data de productos", data);
        setProductos(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProductos();
  }, [check]);

  return (
    <>
      <div className="w-full h-auto grid grid-cols-4 gap-5 cursor-pointer">
        {currentProduct.map((prod) => (
          <div key={prod.id_product} className="col-span-1 mt-5">
            <CardPoductos
              prod={prod}
              setProductos={setProductos}
              productos={productos}
              setCheck={setCheck}
              check={check}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-10">
        {/* ... */}
        <div className="flex justify-center mt-4">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`mx-1 px-2 py-1 rounded ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductosView;
