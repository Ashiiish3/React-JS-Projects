import React, { useReducer } from "react";

export default function Counter() {
  const initialstate = {
    counter: 0,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { counter: state.counter + action.payload };
      case "decrement":
        return (
            { counter: state.counter - action.payload }
        );
      default:
        return {counter: 0};
    }
  }
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className="counter-box text-center bg-gray-100 p-6 rounded-lg shadow-lg w-[400px] m-auto my-36">
      <h1 className="text-2xl font-bold mb-4">Counter App</h1>
      <h1 className="mt-4 text-3xl font-semibold">{state.counter}</h1>
      <div className="mt-5">
        <button
          className="bg-blue-500 text-white m-2 px-3 py-1 rounded-2xl hover:bg-blue-600"
          onClick={() => dispatch({ type: "increment", payload: 1 })}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white m-2 px-3 py-1 rounded-2xl hover:bg-red-600"
          onClick={() => dispatch({ type: "decrement", payload: 1 })}
          disabled={state.counter === 0}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 text-white m-2 px-3 py-1 rounded-2xl hover:bg-blue-600"
          onClick={() => dispatch({ type: "reset", payload: 0 })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}