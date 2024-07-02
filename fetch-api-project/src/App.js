import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import ProductList from './Components/ProductList';
import axios from 'axios';

function App() {
  const [productData, setproductData] = useState([])
  const [updatePrice, setupdatePrice] = useState()
  const [productId, setproductId]= useState()
    const getData = async ()=>{
        try{
            let res = await axios.get("http://localhost:3000/product")
            setproductData(res.data)
            console.log(res.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getData()
    }, [])
    const deleteProduct = async (id)=>{
      try{
        let response = await axios.delete(`http://localhost:3000/product/${id}`)
        alert("Product has been Deleted.")
        getData()
      }catch(error){
        console.log("error")
      }
    }
    const updateOnlyPrice = (id, price)=>{
      
      // try{
      //     let response = await axios.get(`http://localhost:3000/product/${id}`)
      //     console.log(response.data.price)
      // }catch(error){
      //     console.log(error)
      // }
  }
  return (
    <div className="App">
      <div className='form-side'>
        <Form getData={getData} updateOnlyPrice={updateOnlyPrice}  />
      </div>
      <div className='content-side'>
        <ProductList productData={productData} deleteProduct={deleteProduct} updateOnlyPrice={updateOnlyPrice} />
      </div>
    </div>
  );
}
export default App;