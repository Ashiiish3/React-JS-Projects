import { decrement, increment } from "../actionType";

const initialState = {
  counter: 0,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case increment:
      return { counter: state.counter + action.payload };
    case decrement:
      return { counter: state.counter - action.payload };
    default:
      return state;
  }
};