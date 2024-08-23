import React from 'react'
import { Route, Routes } from "react-router-dom";
import ProductList from '../Components/ProductList';
import EditProduct from '../Components/EditProduct';

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<ProductList />} ></Route>
        <Route path='/EditProduct/:id' element={<EditProduct />} ></Route>
        <Route path='*' element={<h1>Page Not Found.</h1>} ></Route>
    </Routes>
  )
}