import { addDoc, collection } from 'firebase/firestore';
import React, { useContext } from 'react'
import { useState } from 'react'
import { db } from '../Services/Firebase';
import { GetDataContext } from '../ContextAPI/GetContext';

export default function AddProducts() {
  const formObj = {
    image: "",
    title: "",
    price: "",
    category: "",
  };
  const {getDataFromFirebase} = useContext(GetDataContext)
  const [formData, setFormData] = useState(formObj);
  const { image, title, price, category } = formData;
  const InputChangeHandle = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try{
      const docRef = await addDoc(collection(db, "Products"),formData)
      console.log("Document written with ID: ", docRef.id);
      getDataFromFirebase()
      formData.image = "";
      formData.title = "";
      formData.price = "";
      formData.category = "";
    }
    catch(err){
      console.log(err)
    }
  };
  return (
    <div className="mt-8 w-[20%] mx-auto py-5 px-10 border-2 border-gray-300">
      <h1 className="text-2xl font-medium mb-5">Add Product</h1>
      <form className="grid grid-cols-1" onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          className="border border-slate-400 rounded-md my-2 px-2 py-2"
          placeholder="Enter Image URL"
          name="image"
          value={image}
          onChange={(e) => InputChangeHandle(e)}
          required
        />
        <input
          type="text"
          className="border border-slate-400 rounded-md my-2 px-2 py-2"
          placeholder="Enter Title"
          name="title"
          value={title}
          onChange={(e) => InputChangeHandle(e)}
          required
        />
        <input
          type="text"
          className="border border-slate-400 rounded-md my-2 px-2 py-2"
          placeholder="Enter Price"
          name="price"
          value={price}
          onChange={(e) => InputChangeHandle(e)}
          required
        />
        <input
          type="text"
          className="border border-slate-400 rounded-md my-2 px-2 py-2"
          placeholder="Enter Category"
          name="category"
          value={category}
          onChange={(e) => InputChangeHandle(e)}
          required
        />
        <button className="bg-blue-600 w-40 h-8 text-white m-auto mt-5 rounded-3xl">
          Add Product
        </button>
      </form>
    </div>
  );
}
