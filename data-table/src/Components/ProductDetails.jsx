import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export default function ProductDetails() {
    let {id} = useParams()
    const [singleData, setSignleData] = useState({})
    const getSingleData = async ()=>{
        try{
            const response = await axios.get(`http://localhost:3000/product/${id}`)
            setSignleData(response.data)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getSingleData()
    },[])
  return (
    <div>
        <div className='m-auto w-[40%] p-10 my-10 border-2 border-gray-300 '>
            <img src={singleData.image} alt="" className='w-[40%] m-auto mb-8' />
            <h1 className='text-xl font-medium cursor-pointer'>{singleData.title}</h1>
            <h4 className='cursor-pointer'>Category: {singleData.category}</h4>
            <h4 className='cursor-pointer'>Price: {singleData.price}$</h4>
            <p>{singleData.description}</p>
        </div>
    </div>
  )
}