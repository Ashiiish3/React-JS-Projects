import axios from "axios";
import React from 'react'

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
    const DeleteProduct = (id)=>{
        try{
            const userConfirmed = window.confirm("Are you sure you want to delete this item?");
            if (userConfirmed) {
                const response = axios.delete(`http://localhost:3000/product/${id}`)
            }
            getData()
        }
        catch(error){
            console.log(error)
        }
    }
    return <GetDataContext.Provider value={{productData, setProductData, getData, DeleteProduct}}>{children}</GetDataContext.Provider>
}