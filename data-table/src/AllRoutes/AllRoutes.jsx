import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../Components/ProductDetails'
import ProductList from '../Components/ProductList'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<ProductList />}></Route> 
        <Route path='/ProductDetails/:id' element={<ProductDetails />}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  )
}