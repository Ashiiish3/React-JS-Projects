import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwitchToDark, SwitchToLight } from "../redux/actionType";

export default function Theme() {
  const {theme, disabled} = useSelector((data)=>data.ThemeReducer)
  console.log(theme, disabled)
  const dispatch = useDispatch()
  return (
    <div className="flex justify-center space-x-4 p-4" style={{backgroundColor: theme ? "white": "black"}}>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:bg-blue-300 disabled:cursor-not-allowed" onClick={()=>dispatch({type:SwitchToLight})}>
        Switch to Light
      </button>
      <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition" onClick={()=>dispatch({type:SwitchToDark})}>
        Switch to Dark
      </button>
    </div>
  );
}