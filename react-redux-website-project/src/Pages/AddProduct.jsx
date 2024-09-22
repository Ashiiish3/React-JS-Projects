import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function AddProduct() {
  const ProductObj = {
    image: "",
    title: "",
    category: "",
    price: "",
    description: ""
  }
  const [productData, setProductData] = useState(ProductObj)
  const {image, title, category, price, description} = productData
  const PostProductData = (event) => {
    event.preventDefault()
    try {
      let response = axios.post(`http://localhost:3000/Products`, productData)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  const inputChange = (e) => {
    setProductData({...productData, [e.target.name]: e.target.value})
  }
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <form className="space-y-4" onSubmit={(event)=>PostProductData(event)}>
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={image}
          onChange={(e)=>inputChange(e)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e)=>inputChange(e)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <select
        name="category"
        value={category}
        onChange={(e)=>inputChange(e)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="">Select Your Category</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={price}
          onChange={(e)=>inputChange(e)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e)=>inputChange(e)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Add Product"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        />
      </form>
    </div>
  )
}