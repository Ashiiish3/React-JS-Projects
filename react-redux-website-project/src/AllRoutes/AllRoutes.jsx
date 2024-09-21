import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import Description from '../Pages/Description'
import { Private } from '../Components/Private'
import EditProduct from '../Pages/EditProduct'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/EditProduct' element={<EditProduct />} />
        <Route path='/Products' element={
          <Private>
            <Products />
          </Private>
          } />
        <Route path='/description/:id' element={
          <Private>
            <Description />
          </Private>
          } />
        <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}