import { Decrement, Increment } from "../actionType";

const initialState = {
  counter: 0,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Increment:
      return { counter: state.counter + action.payload };
    case Decrement:
      return { counter: state.counter - action.payload };
    default:
      return {counter: 0};
  }
};