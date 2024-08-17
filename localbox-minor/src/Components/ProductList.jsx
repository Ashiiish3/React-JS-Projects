import React, { useContext } from 'react'
import ProductData from '../db.json'
import Card from './Card'
import { ThemeContext } from '../Context/ThemeContext'

export default function ProductList() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`flex gap-16 flex-wrap w-[80%] m-auto my-8`}>
      {ProductData.product.map((el)=>{
        return  <Card key={el.id} image={el.image} category={el.category} discount={el.discount} />
      })}
    </div>
  )
}