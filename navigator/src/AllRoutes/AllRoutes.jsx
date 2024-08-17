import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Products from '../Components/Products'
import Login from '../Page/Login'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  )
}
