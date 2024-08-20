import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Login from '../Pages/Login'
import Home from '../Pages/Home'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  )
}