import React from 'react'

export default function EditProduct() {
  return (
    <div className='mt-8 w-[20%] mx-auto py-5 px-10 border-2 border-gray-300'>
      <h1 className='text-2xl font-medium mb-5'>Add Product</h1>
      <form className='grid grid-cols-1'>
        <input type="text" className='border border-slate-400 rounded-md my-2 px-2 py-2' placeholder='Enter Image URL' name='image' value={image} required />
        <input type="text" className='border border-slate-400 rounded-md my-2 px-2 py-2' placeholder='Enter Title' name='title' value={title} required />
        <input type="text" className='border border-slate-400 rounded-md my-2 px-2 py-2' placeholder='Enter Price' name='price' value={price} required />
        <input type="text" className='border border-slate-400 rounded-md my-2 px-2 py-2' placeholder='Enter Category' name='category' value={category} required />
        <button className='bg-blue-600 w-40 h-8 text-white m-auto mt-5 rounded-3xl'>Add Product</button>
      </form>
    </div>
  )
}
