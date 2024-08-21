import React from 'react'
import ProductList from '../Pages/ProductList'
import { Route, Routes } from 'react-router-dom'
import AddProducts from '../Components/AddProducts'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path={'/'} element={<ProductList />}></Route>
        <Route path={'/AddProducts'} element={<AddProducts />}></Route>
        <Route path={'*'} element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  )
}     