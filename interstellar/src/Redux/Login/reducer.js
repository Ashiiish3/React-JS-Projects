import { Login_Request, Request_Error, Request_Successful } from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  token: null,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Login_Request:
      return { isLoading: true, isError: false, token: null };
    case Request_Successful:
      return { isLoading: false, isError: false, token: action.payload };
    case Request_Error:
      return { isLoading: false, isError: true, token: null };
    default:
      return state;
  }
};