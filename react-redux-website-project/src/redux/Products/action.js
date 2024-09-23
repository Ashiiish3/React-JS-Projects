import axios from "axios";
import {
  Product_Data_Request,
  Product_Request_Failed,
  Product_Request_Successful,
} from "../actionType";

export const getData = (paramObj) => (dispatch) => {
  dispatch({ type: Product_Data_Request });
  axios
    .get(`http://localhost:3000/Products`, {
      params: paramObj.params
    })
    .then((res) => {
      dispatch({ type: Product_Request_Successful, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: Product_Request_Failed });
      console.log(err);
    });
};