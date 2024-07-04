import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import ProductList from './Components/ProductList';
import axios from 'axios';

function App() {
  let updateAllValuesObj = {
    image: "",
    title: "",
    category: "",
  }
  const [productData, setproductData] = useState([])
  const [updatePrice, setupdatePrice] = useState("")
  const [productId, setproductId]= useState("")
  const [updateAllValues, setupdateAllValues] = useState(updateAllValuesObj)
    const getData = async ()=>{
        try{
            let res = await axios.get("http://localhost:3000/product")
            setproductData(res.data)
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
        alert("This Product has been deleted.")
        getData()
      }catch(error){
        console.log("error")
      }
    }
    const HandlePrice = (id, image, title, price, category)=>{
      setproductId(id)
      setupdatePrice(price)
      setupdateAllValues({...updateAllValues, image: image, title: title, category: category})
  }
  return (
    <div className="App">
      <div className='form-side'>
        <Form getData={getData} productId={productId} setproductId={setproductId} updatePrice={updatePrice} setupdatePrice={setupdatePrice} updateAllValues={updateAllValues} setupdateAllValues={setupdateAllValues} />
      </div>
      <div className='content-side'>
        <ProductList productData={productData} deleteProduct={deleteProduct} HandlePrice={HandlePrice} />
      </div>
    </div>
  );
}
export default App;