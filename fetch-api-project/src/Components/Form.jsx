import axios from "axios";
import React, { useState } from "react";

const Form = ({getData, productId, setproductId, updatePrice, setupdatePrice, updateAllValues, setupdateAllValues}) => {
  let formObj = {
    image: "",
    title: "",
    category: "",
    price: "",
  };
  const [formData, setformData] = useState(formObj);
  const { image, title, category, price } = formData;
  
  const HandleInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const FormSub = (event) => {
    event.preventDefault();
    const PostData = async () => {
      try {
        const response = await axios.post("http://localhost:3000/product", {
          image: formData.image,
          title: formData.title,
          category: formData.category,
          price: formData.price,
        });
        formData.image= ""
        formData.title= ""
        formData.category= ""
        formData.price= ""
        alert("Product has been Added.")
        getData()
      } catch (error) {
        console.log(error);
      }
    };
    PostData();
  };
  const updateOnlyPrice= async (event)=>{
    event.preventDefault()
    try{
      let response = await axios.patch(`http://localhost:3000/product/${productId}`,{
        "price":updatePrice
      })
      updateAllValues.image=""
      updateAllValues.title=""
      updateAllValues.category=""
      setproductId("")
      setupdatePrice("")
      alert("Price has been Updated.")
      getData()
    }catch(error){
      console.log(error)
    }
  }
  const updateAllProducts = async (event)=>{
   event.preventDefault()
   try{
    let response = await axios.put(`http://localhost:3000/product/${productId}`,{
      "image":updateAllValues.image,
      "title":updateAllValues.title,
      "category":updateAllValues.category,
      "price": updatePrice
    })
    updateAllValues.image=""
    updateAllValues.title=""
    updateAllValues.category=""
    setproductId("")
    setupdatePrice("")
    alert("All Data has been Updated.")
    getData()
   }catch(error){
    console.log(error)
   }
  }
  return (
    <div className="form">
      <div className="addProduct">
        <form onSubmit={(event) => FormSub(event)}>
          <h1>Add Product</h1>
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => HandleInputChange(e)}
            placeholder="Enter Image URL"
          />
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => HandleInputChange(e)}
            placeholder="Enter Title"
          />
          <br />
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => HandleInputChange(e)}
            placeholder="Enter Category"
          />
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => HandleInputChange(e)}
            placeholder="Enter Price"
          />
          <br />
          <button className="btn btn-primary w-100 text-uppercase">Add Product</button>
        </form>
      </div>
      <hr className="mt-4 mb-3" />
      <div className="updateAllData">
        <form onSubmit={(event)=>updateAllProducts(event)}>
          <h1>Update Product</h1>
          <input type="text" placeholder="Enter Id" value={productId} />
          <input type="text" placeholder="Enter Image URL" onChange={(e)=>setupdateAllValues({...updateAllValues, image: e.target.value})} value={updateAllValues.image} />
          <input type="text" placeholder="Enter Title" onChange={(e)=>setupdateAllValues({...updateAllValues, title: e.target.value})} value={updateAllValues.title} />
          <input type="text" placeholder="Enter Category" onChange={(e)=>setupdateAllValues({...updateAllValues, category: e.target.value})} value={updateAllValues.category} />
          <input type="text" placeholder="Enter Price" value={updatePrice} onChange={(e)=>setupdatePrice(e.target.value)} />
          <button className="btn btn-primary w-100 text-uppercase">Update Product</button>
        </form>
      </div>
      <hr className="mt-4 mb-3" />
      <div className="updataPrice">
        <form onSubmit={(event)=>updateOnlyPrice(event)}>
          <h1>Update Price</h1>
          <input type="text" placeholder="Enter Id" value={productId} />
          <input type="text" placeholder="Enter Price" value={updatePrice} onChange={(e)=>setupdatePrice(e.target.value)} />
          <button className="btn btn-primary w-100 text-uppercase">Update Price</button>
        </form>
      </div>
    </div>
  );
};
export default Form;