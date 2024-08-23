import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GetDataContext } from "../ContextAPI/GetDataContext";
import AddProduct from "./AddProduct";

export default function ProductList() {
  const { productData, DeleteProductFromFirebase } = useContext(GetDataContext);
  return (
    <>
      <AddProduct />
      <div className="w-[70%] m-auto my-10 grid grid-cols-4 gap-10">
        {productData.map((product) => (
          <div key={product.id} className="shadow-xl p-5">
            <img
              src={product.image}
              alt=""
              className="h-56 w-56 m-auto mb-5 cursor-pointer"
            />
            <h1 className="text-xl font-medium cursor-pointer">
              {product.title}
            </h1>
            <h4 className="cursor-pointer">Category: {product.category}</h4>
            <h4 className="cursor-pointer">Price: {product.price}$</h4>
            <div className="flex justify-evenly mt-5">
              <Link to={`/EditProduct/${product.id}`}>
                <button className="bg-blue-600 h-10 w-24 rounded-3xl text-white">
                  Edit
                </button>
              </Link>
              <button className="bg-blue-600 h-10 w-24 rounded-3xl text-white" onClick={()=>DeleteProductFromFirebase(product.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
