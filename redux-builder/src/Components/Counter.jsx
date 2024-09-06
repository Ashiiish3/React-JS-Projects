import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AddValue, ReduceValue } from "../redux/Counter/action";

export default function Counter() {
  const {counter} = useSelector((data)=>data.CounterReducer)
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6 dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Counter
      </h1>
      <h1 className="text-2xl font-bold">{counter}</h1>
      <div className="flex space-x-4">
        <button className="w-36 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition" onClick={()=>dispatch(AddValue())}>
          Add
        </button>
        <button className="w-36 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={()=>dispatch(ReduceValue())}>
          Reducer
        </button>
      </div>
    </div>
  );
}