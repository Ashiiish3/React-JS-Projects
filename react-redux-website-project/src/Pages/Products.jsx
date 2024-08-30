import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Product_Data_Request,
  Product_Request_Failed,
  Product_Request_Successful,
} from "../redux/actionType";
import Loading from "../Components/Loading";

export default function Products() {
  const { isLoading, isError, products } = useSelector(
    (data) => data.ProductReducer
  );
  const dispatch = useDispatch();
  const getData = () => {
    dispatch({ type: Product_Data_Request });
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        dispatch({ type: Product_Request_Successful, payload: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({ type: Product_Request_Failed });
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return isLoading ? <Loading /> : isError ? (
    <h1>something went wrong</h1>
  ) : (
    <div className="w-[80%] m-auto my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((ele, ind) => (
        <div
          key={ind}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <img
              src={ele.image}
              alt={ele.title}
              className="h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">{ele.title}</h1>
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Price: ${ele.price}
            </h4>
            <p className="text-md text-gray-600">Category: {ele.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
