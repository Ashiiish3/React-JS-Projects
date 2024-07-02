import axios from "axios";
import React, { useState } from "react";

const Form = ({getData, updateOnlyPrice}) => {
  let formObj = {
    image: "",
    title: "",
    category: "",
    price: "",
  };
  console.log(updateOnlyPrice.id);
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
        alert("Product has been Added.")
        getData()
      } catch (error) {
        console.log(error);
      }
    };
    PostData();
  };
  const HandlePrice=(event)=>{
    event.preventDefault()
    // updateOnlyPrice(updatePrice)
    // updateOnlyPrice(productId)
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
        <form>
          <h1>Update Product</h1>
          <input type="text" placeholder="Enter Id" />
          <input type="text" placeholder="Enter Image URL" />
          <input type="text" placeholder="Enter Title" />
          <input type="text" placeholder="Enter Category" />
          <input type="text" placeholder="Enter Price" />
          <button className="btn btn-primary w-100 text-uppercase">Update Product</button>
        </form>
      </div>
      <hr className="mt-4 mb-3" />
      <div className="updataPrice">
        <form onSubmit={(event)=>HandlePrice(event)}>
          <h1>Update Price</h1>
          <input type="text" placeholder="Enter Id"  />
          <input type="text" placeholder="Enter Price" />
          <button className="btn btn-primary w-100 text-uppercase" >Update Price</button>
        </form>
      </div>
    </div>
  );
};
export default Form;