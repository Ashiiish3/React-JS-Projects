import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form'
import Certificate from './components/Certificate'

export default function Allroutes() {
  return (
    <Routes>
      <Route path='/' element={<Form />}></Route>
      <Route path='/certificate' element={<Certificate />}></Route>
      <Route path='*' element={<h1>Page Not Found.</h1>}></Route>
    </Routes>
  )
}