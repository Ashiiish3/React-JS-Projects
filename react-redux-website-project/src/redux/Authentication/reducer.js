import { Login_failed, Login_Request, Login_Successful } from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  token: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Login_Request:
      return { ...initialState, isLoading: true };
    case Login_Successful:
      return { ...initialState, token: action.payload };
    case Login_failed:
      return { ...initialState, isError: true };
    default:
      return state;
  }
};