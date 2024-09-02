import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import Description from '../Pages/Description'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/description/:id' element={<Description />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}
