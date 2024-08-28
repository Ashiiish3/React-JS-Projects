import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterDecrease, counterIncrease } from "../Redux/Counter/action";

export default function Counter() {
  const { counter } = useSelector((data) => data.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Counter: {counter}</h1>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          onClick={() => dispatch(counterIncrease())}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-200"
          onClick={() => dispatch(counterDecrease())}
        >
          -
        </button>
        <button
          className="bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition duration-200"
          onClick={() => dispatch({ type: "Reset", payload: 0 })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}