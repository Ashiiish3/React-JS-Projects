import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";

export default function Counter() {
  const {theme} = useSelector((data)=>data.ThemeReducer)
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-10 border-[2px] border-black w-[50%] h-[70vh] m-auto" style={{backgroundColor: theme ? "white": "black"}}>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100" style={{color: theme ? "black": "white"}}>
        Counter
      </h1>
      <CounterValue />
      <CounterButtons />
    </div>
  );
}