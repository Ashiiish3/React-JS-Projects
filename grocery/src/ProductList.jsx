import { useEffect, useState } from "react"
import Product from "./product"

export default function AllProducts(){
    const [groceries, setgroceries]= useState([])
    const fetchData = ()=>{
        fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries")
        .then((res)=>res.json()).then((groceryData)=>setgroceries(groceryData.data)).catch((err)=>console.log(err))
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div className="product-list pt-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px"}}>
            {
                groceries.map((ele)=><Product id={ele.id} image={ele.image} name={ele.name} price={ele.price} />)
            }
        </div>
    )
}