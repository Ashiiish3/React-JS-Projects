import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import AddProduct from "../Pages/AddProduct";
import { NavLink, useSearchParams } from "react-router-dom";
import { getData } from "../redux/Products/action";
import axios from "axios";
import Sidebar from "../Components/Sidebar";

export default function Products() {
  const [order, setOrder] = useState(null)
  const [search, setSearch] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { isLoading, isError, products } = useSelector(
    (data) => data.ProductReducer
  );
  const dispatch = useDispatch();
  const deleteProduct = (id) => {
    try {
      axios.delete(`http://localhost:3000/Products/${id}`);
      alert("Your Product has been deleted.");
      dispatch(getData);
    } catch (error) {
      console.log(error);
    }
  };
  const paramObj = {
    params: {
      category: searchParams.getAll("category") || [],
      _sort: "price",
      _order: order,
      q: search
    }
  }
  useEffect(() => {
    const timeFun = setTimeout(() => {
      dispatch(getData(paramObj));
    }, 1000);
    return ()=> clearTimeout(timeFun)
  }, [order, search, searchParams]);
  return isLoading ? (
    <Loading />
  ) : isError ? (
    <h1>something went wrong</h1>
  ) : (
    <div>
      <AddProduct />
      <div className="w-[80%] m-auto text-start">
        <div className="flex items-center space-x-4 mt-4">
          <select
            name="sorting"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={order}
            onChange={(e)=>setOrder(e.target.value)}
          >
            <option value="">Sorting Product</option>
            <option value="asc">Price low to high</option>
            <option value="desc">Price high to low</option>
          </select>
          <input
            type="search"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
      <Sidebar />
        <div className="w-full m-auto text-center my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((ele, ind) => (
            <div
              key={ind}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <NavLink to={`/description/${ele.id}`}>
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src={ele.image}
                    alt={ele.title}
                    className="h-full object-cover"
                  />
                </div>
              </NavLink>
              <div className="p-4">
                <h1 className="text-xl font-semibold mb-2">{ele.title}</h1>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Price: ${ele.price}
                </h4>
                <p className="text-md text-gray-600">
                  Category: {ele.category}
                </p>
              </div>
              <div className="p-4 flex justify-center gap-5">
                <NavLink to={"/EditProduct"}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Edit
                  </button>
                </NavLink>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  onClick={() => deleteProduct(ele.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}