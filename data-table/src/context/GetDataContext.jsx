import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const GetDataContext = createContext()
export function GetDataContextProvider({children}){
    const [productData, setProductData]=  useState([])
    const getData = async ()=>{
        try{
            const response = await axios.get("http://localhost:3000/product")
            setProductData(response.data)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return <GetDataContext.Provider value={{productData, setProductData, getData}}>{children}</GetDataContext.Provider>
}
