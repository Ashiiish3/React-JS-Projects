import { Decrement, Increment } from "../actionType";

export const counterIncrease = () => {
  return({ type: Increment, payload: 1 });
};
export const counterDecrease = () => {
  return({ type: Decrement, payload: 1 });
};