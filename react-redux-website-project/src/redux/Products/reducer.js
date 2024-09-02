import { Product_Data_Request, Product_Request_Failed, Product_Request_Successful } from "../actionType";

const initialState = {
    isLoading: false,
    isError: false,
    products: []
}
export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case Product_Data_Request:
      return {isLoading: true, isError: false, products: []};
    case Product_Request_Successful:
      return {isLoading: false, isError: false, products: action.payload};
    case Product_Request_Failed:
      return {isLoading: false, isError: true, products: []};
    default:
      return state;
  }
};