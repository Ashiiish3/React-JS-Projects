import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../Services/Firebase";
import { GetDataContext } from "../ContextAPI/GetDataContext";

export default function AddProduct() {
  const { getDataFromFirebase } = useContext(GetDataContext);
  const formObj = {
    image: "",
    title: "",
    price: "",
    category: "",
  };
  const [formData, setFormData] = useState(formObj);
  const { image, title, price, category } = formData;
  const InputChangeHandle = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      addDoc(collection(db, "Products"), formData)
        .then((res) => {
          alert("Product has been Added.");
          getDataFromFirebase();
          formData.image = "";
          formData.title = "";
          formData.price = "";
          formData.category = "";
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mx-4 mt-8 lg:mx-auto py-5 px-4 sm:px-6 md:px-8 lg:px-10 border-2 border-gray-300 max-w-md sm:max-w-lg md:max-w-xl">
      <h1 className="text-xl sm:text-2xl font-medium mb-5 text-center">
        Add Product
      </h1>
      <form className="grid grid-cols-1 gap-4" onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          className="border border-slate-400 rounded-md px-3 py-2"
          placeholder="Enter Image URL"
          name="image"
          value={image}
          onChange={(e) => InputChangeHandle(e)}
          required
        />
        <input
          type="text"
          className="border border-slate-400 rounded-md px-3 py-2"
          placeholder="Enter Title"
          name="title"
          value={title}
          onChange={(e) => InputChangeHandle(e)}
          required
        />
        <input
          type="text"
          className="border border-slate-400 rounded-md px-3 py-2"
          placeholder="Enter Price"
          name="price"
          value={price}
          onChange={(e) => InputChangeHandle(e)}
          required
        />
        <input
          type="text"
          className="border border-slate-400 rounded-md px-3 py-2"
          placeholder="Enter Category"
          name="category"
          value={category}
          onChange={(e) => InputChangeHandle(e)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 w-full sm:w-40 h-10 text-white mt-5 rounded-3xl m-auto"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}