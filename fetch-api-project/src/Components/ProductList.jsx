import { useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios"
import Form from "./Form"

export default function ProductList(){
    const [allData, setallData]= useState([])
    useEffect(()=>{
        const getData = async ()=>{
            try{
                let res = await axios.get("http://localhost:3000/product")
                setallData(res.data)
                console.log(res.data)
            }catch(error){
                console.log(error)
            }
        }
        getData()
    },[])
    return(
        <div className="container">
            <Form />
            <div className="product-list">
                {allData.map((ele, i)=> <Product key={i} image={ele.image} title={ele.title} price={ele.price} category={ele.category} />)}
            </div>
        </div>
    )
}