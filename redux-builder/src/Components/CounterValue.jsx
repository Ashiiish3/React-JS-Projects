import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterValue() {
  const {counter} = useSelector((data)=>data.CounterReducer)
  const {theme} = useSelector((data)=>data.ThemeReducer)
  return (
    <div>
      <h1 className="text-2xl font-bold" style={{color: theme ? "black": "white"}}>{counter}</h1>
    </div>
  )
}