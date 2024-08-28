import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Error_Product_Data, Get_Product_Data, Request_Product_Data } from '../Redux/actionType'

export default function Products() {
    const {isLoading, isError, product} = useSelector((productData)=>productData.productReducer)
    const dispatch = useDispatch()
    const getData = async () => {
        dispatch({type: Request_Product_Data})
        try {
            const response = await axios.get(`http://localhost:3000/products`)
            dispatch({type: Get_Product_Data, payload: response.data})
        } catch (error) {
            dispatch({type: Error_Product_Data})
            console.log(error)
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return isLoading ? <h1>Loading...</h1> : isError ? <h1>something went wrong</h1> :  (
    <div className='w-[80%] m-auto my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {product.map((ele, ind)=>(
        <div
        key={ind}
        className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <img
              src={ele.image}
              alt={ele.title}
              className="h-full object-cover"
            />
          </div>
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-2">{ele.title}</h1>
          <h4 className="text-lg font-bold text-gray-800 mb-2">
            Price: ${ele.price}
          </h4>
          <p className="text-md text-gray-600">Category: {ele.category}</p>
        </div>
      </div>
      ))}
    </div>
  )
}