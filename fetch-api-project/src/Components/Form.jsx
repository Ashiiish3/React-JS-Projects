import axios from "axios";
import React, { useState } from "react";

const Form = () => {
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
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    PostData();
  };
  return (
    <div>
      <div>
        <form onSubmit={(event) => FormSub(event)}>
          <h4>Add Product</h4>
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
          <button>Add Product</button>
        </form>
      </div>
    </div>
  );
};
export default Form;