import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Services/Firebase'
import { GetDataContext } from '../ContextAPI/GetDataContext'

export default function EditProduct() {
    const { getDataFromFirebase } = useContext(GetDataContext)
    const EditObj = {
        image: "",
        title: "",
        price: "",
        category: ""
      }
      const {id}= useParams()
      const [editData, setEditData] = useState(EditObj)
      const {image, title, price, category} = editData
      const getDataForEdit = async () => {
        getDoc(doc(db, "Products", id)).then((res)=>{
            setEditData(res.data())
        }).catch((err)=>console.log(err))
      }
      useEffect(()=>{
        getDataForEdit()
    },[])
      const EditInputChange = (e)=>{
        setEditData({...editData, [e.target.name]: e.target.value})
      }
      const submitEditForm = async (e)=>{
        e.preventDefault()
        try{
            setDoc(doc(db, "Products", id), editData).then((res)=>{
              alert("Product has been Edited.")
              getDataFromFirebase()
              editData.image = ""
              editData.title = ""
              editData.price = ""
              editData.category = ""
            }).catch((err)=>console.log(err))
        }
        catch(err){
            console.log(err)
        }
      }
      return (
        <div className='mt-8 w-[20%] mx-auto py-5 px-10 border-2 border-gray-300'>
          <h1 className='text-2xl font-medium mb-5'>Edit Product</h1>
          <form className='grid grid-cols-1' onSubmit={(e)=>submitEditForm(e)}>
            <input type="text" className='border border-slate-400 rounded-md my-2 px-2 py-2' placeholder='Enter Image URL' name='image' value={image} onChange={(e)=>EditInputChange(e)} required />
            <input type="text" className='border border-slate-400 rounded-md my-2 px-2 py-2' placeholder='Enter Title' name='title' value={title} onChange={(e)=>EditInputChange(e)} required />
            <input type="text" className='border border-slate-400 rounded-md my-2 px-2 py-2' placeholder='Enter Price' name='price' value={price} onChange={(e)=>EditInputChange(e)} required />
            <input type="text" className='border border-slate-400 rounded-md my-2 px-2 py-2' placeholder='Enter Category' name='category' value={category} onChange={(e)=>EditInputChange(e)} required />
            <button className='bg-blue-600 w-40 h-8 text-white m-auto mt-5 rounded-3xl'>Edit Product</button>
          </form>
        </div>
      )
}
