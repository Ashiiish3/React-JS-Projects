import React from 'react'
import { useDispatch } from 'react-redux'
import { AddValue, ReduceValue } from "../redux/Counter/action";

export default function CounterButtons() {
  const dispatch = useDispatch()
  return (
    <div className="flex space-x-4">
        <button className="w-36 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition" onClick={()=>dispatch(AddValue())}>
          Add
        </button>
        <button className="w-36 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={()=>dispatch(ReduceValue())}>
          Reducer
        </button>
      </div>
  )
}