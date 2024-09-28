import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Form = ({ getData, productId, setproductId, updatePrice, setupdatePrice, updateAllValues, setupdateAllValues }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  useEffect(() => {
    setSearchParams({ order, filterCategory })
  }, [order, filterCategory])
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
        const response = await axios.post("https://to-do-list-json-server-5spg.onrender.com/product", {
          image: formData.image,
          title: formData.title,
          category: formData.category,
          price: formData.price,
        });
        formData.image = ""
        formData.title = ""
        formData.category = ""
        formData.price = ""
        alert("Product has been Added.")
        getData()
      } catch (error) {
        console.log(error);
      }
    };
    PostData();
  };
  const updateOnlyPrice = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.patch(`https://to-do-list-json-server-5spg.onrender.com/product/${productId}`, {
        "price": updatePrice
      })
      updateAllValues.image = ""
      updateAllValues.title = ""
      updateAllValues.category = ""
      setproductId("")
      setupdatePrice("")
      alert("Price has been Updated.")
      getData()
    } catch (error) {
      console.log(error)
    }
  }
  const updateAllProducts = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.put(`https://to-do-list-json-server-5spg.onrender.com/product/${productId}`, {
        "image": updateAllValues.image,
        "title": updateAllValues.title,
        "category": updateAllValues.category,
        "price": updatePrice
      })
      updateAllValues.image = ""
      updateAllValues.title = ""
      updateAllValues.category = ""
      setproductId("")
      setupdatePrice("")
      alert("All Data has been Updated.")
      getData()
    } catch (error) {
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
        <form onSubmit={(event) => updateAllProducts(event)}>
          <h1>Update Product</h1>
          <input type="text" placeholder="Enter Id" value={productId} />
          <input type="text" placeholder="Enter Image URL" onChange={(e) => setupdateAllValues({ ...updateAllValues, image: e.target.value })} value={updateAllValues.image} />
          <input type="text" placeholder="Enter Title" onChange={(e) => setupdateAllValues({ ...updateAllValues, title: e.target.value })} value={updateAllValues.title} />
          <input type="text" placeholder="Enter Category" onChange={(e) => setupdateAllValues({ ...updateAllValues, category: e.target.value })} value={updateAllValues.category} />
          <input type="text" placeholder="Enter Price" value={updatePrice} onChange={(e) => setupdatePrice(e.target.value)} />
          <button className="btn btn-primary w-100 text-uppercase">Update Product</button>
        </form>
      </div>
      <hr className="mt-4 mb-3" />
      <div className="updataPrice">
        <form onSubmit={(event) => updateOnlyPrice(event)}>
          <h1>Update Price</h1>
          <input type="text" placeholder="Enter Id" value={productId} />
          <input type="text" placeholder="Enter Price" value={updatePrice} onChange={(e) => setupdatePrice(e.target.value)} />
          <button className="btn btn-primary w-100 text-uppercase">Update Price</button>
        </form>
      </div>
      <hr className="mt-4 mb-3" />
      <div className="my-4">
        <h4 className="text-xl font-semibold mb-2">Sort Based On Price</h4>
        <button id="sort-low-to-high" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200" value={"asc"} onClick={(e) => setOrder(e.target.value)}>
          Sort Low To High
        </button>
        <button id="sort-high-to-low" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 mt-2" value={"desc"} onClick={(e) => setOrder(e.target.value)}>
          Sort High To Low
        </button>
      </div>
      <hr className="mt-4 mb-3" />
      <div className="my-4">
        <h4 className="text-xl font-semibold mb-2">Filter Based On Category</h4>
        <button id="filter-Food" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200" onClick={()=>setFilterCategory("Food")}>
          Food
        </button>
        <button id="filter-Electronics" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 mt-2" onClick={()=>setFilterCategory("Electronics")}>
          Electronics
        </button>
        <button id="filter-Shoes" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 mt-2" onClick={()=>setFilterCategory("Shoes")}>
          Shoes
        </button>
        <button id="filter-Clothes" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 mt-2" onClick={()=>setFilterCategory("Clothes")}>
          Clothes
        </button>
        <button id="filter-Furniture" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 mt-2" onClick={()=>setFilterCategory("Furniture")}>
          Furniture
        </button>
      </div>
    </div>
  );
};
export default Form;