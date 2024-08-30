import { Login_failed, Login_Request, Login_Successful } from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  token: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Login_Request:
      return { isError: false, isLoading: true, token: null };
    case Login_Successful:
      return { isError:false, isLoading: false, token: action.payload };
    case Login_failed:
      return { isLoading: false, token: null, isError: true };
    default:
      return state;
  }
};