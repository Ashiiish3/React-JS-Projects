import React from 'react'
import { Link } from 'react-router-dom'
import AddProduct from './AddProduct'
import { useContext } from 'react'
import { GetDataContext } from '../context/GetDataContext'

export default function ProductList() {
    const {productData} = useContext(GetDataContext)
  return (
    <div>
         <AddProduct />
        <div className='w-[70%] m-auto my-10 grid grid-cols-4 gap-10'>
        {productData.map((product)=>(
            <div key={product.id} className='shadow-xl p-5'>
                <Link to={`/ProductDetails/${product.id}`}>
                    <img src={product.image} alt="" className='h-56 w-56 m-auto mb-5 cursor-pointer' />
                    <h1 className='text-xl font-medium cursor-pointer'>{product.title}</h1>
                    <h4 className='cursor-pointer'>Category: {product.category}</h4>
                    <h4 className='cursor-pointer'>Price: {product.price}$</h4>
                </Link>
                <div className='flex justify-evenly mt-5'>
                    <button className='bg-blue-600 h-10 w-24 rounded-3xl text-white'>Edit</button>
                    <button className='bg-blue-600 h-10 w-24 rounded-3xl text-white'>Delete</button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}