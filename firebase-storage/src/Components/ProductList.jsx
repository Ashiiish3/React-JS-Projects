import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GetDataContext } from "../ContextAPI/GetDataContext";
import AddProduct from "./AddProduct";

export default function ProductList() {
  const { productData, DeleteProductFromFirebase } = useContext(GetDataContext);
  return (
    <>
      <AddProduct />
      <div className="w-full lg:w-[70%] m-auto my-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((product) => (
          <div
            key={product.id}
            className="shadow-xl p-5 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt=""
              className="h-56 w-56 mb-5 object-contain"
            />
            <h1 className="text-lg md:text-xl font-medium text-center">
              {product.title}
            </h1>
            <h4 className="text-sm md:text-base text-center">
              Category: {product.category}
            </h4>
            <h4 className="text-sm md:text-base text-center">
              Price: {product.price}$
            </h4>
            <div className="flex flex-col sm:flex-row sm:justify-evenly mt-5 w-full">
              <Link to={`/EditProduct/${product.id}`}>
                <button className="bg-blue-600 h-10 w-full sm:w-24 rounded-3xl text-white mb-2 sm:mb-0">
                  Edit
                </button>
              </Link>
              <button
                className="bg-red-600 h-10 w-full sm:w-24 rounded-3xl text-white"
                onClick={() => DeleteProductFromFirebase(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}