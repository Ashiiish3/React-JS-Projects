import React from 'react'
import ProductData from '../db.json'
import Card from './Card'

export default function ProductList() {
    
  return (
    <div className='flex gap-40 flex-wrap w-[80%] bg-green-300 m-auto'>
      {ProductData.product.map((el)=>{
        return  <Card key={el.id} image={el.image} category={el.category} discount={el.discount} />
      })}
    </div>
  )
}
