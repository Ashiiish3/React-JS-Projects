import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import ProductList from './Components/ProductList';
import axios from 'axios';
import { Loader } from './Components/Loader';
import { useSearchParams } from 'react-router-dom';

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  let updateAllValuesObj = {
    image: "",
    title: "",
    category: "",
  }
  const [productData, setproductData] = useState([])
  const [updatePrice, setupdatePrice] = useState("")
  const [productId, setproductId] = useState("")
  const [updateAllValues, setupdateAllValues] = useState(updateAllValuesObj)
  const [page, setPage] = useState(1)
  const [hasMorePages, setHasMorePages] = useState(true);
  const [loading, setLoading] = useState(false)
  const filterCategory = searchParams.get("filterCategory")
  const order = searchParams.get("order")
  const getData = async () => {
    setLoading(true)
    try {
      let res = await axios.get("https://to-do-list-json-server-5spg.onrender.com/product", {
        params: {
          _limit: 10,
          _page: page,
          category: filterCategory || null,
          _sort: "price",
          _order: order
        }
      })
      setLoading(false)
      if (res.data.length === 0) {
        setHasMorePages(false);
      } else {
        setproductData(res.data)
        setHasMorePages(true);
      }
    } catch (error) {
      setLoading(true)
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [page, searchParams])
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://to-do-list-json-server-5spg.onrender.com/product/${id}`)
      alert("This Product has been deleted.")
      getData()
    } catch (error) {
      console.log("error")
    }
  }
  const HandlePrice = (id, image, title, price, category) => {
    setproductId(id)
    setupdatePrice(price)
    setupdateAllValues({ ...updateAllValues, image: image, title: title, category: category })
  }
  return (
    <div className="App">
      <div className='form-side'>
        <Form getData={getData} productId={productId} setproductId={setproductId} updatePrice={updatePrice} setupdatePrice={setupdatePrice} updateAllValues={updateAllValues} setupdateAllValues={setupdateAllValues} />
      </div>
      <div className='content-side'>
       {loading ? <Loader /> : <ProductList productData={productData} deleteProduct={deleteProduct} HandlePrice={HandlePrice} page={page} setPage={setPage} hasMorePages={hasMorePages} setHasMorePages={setHasMorePages} />}
      </div>
    </div>
  );
}
export default App;