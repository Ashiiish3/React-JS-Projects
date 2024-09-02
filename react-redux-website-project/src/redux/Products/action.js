import axios from "axios";
import {
  Product_Data_Request,
  Product_Request_Failed,
  Product_Request_Successful,
} from "../actionType";

export const getData = () => {
  dispatch({ type: Product_Data_Request });
  axios
    .get(`https://fakestoreapi.com/products`)
    .then((res) => {
      dispatch({ type: Product_Request_Successful, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: Product_Request_Failed });
      console.log(err);
    });
};