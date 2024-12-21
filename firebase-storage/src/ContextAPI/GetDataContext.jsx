import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../Services/Firebase";

export const GetDataContext = createContext()

export function GetDataContextProvider({children}){
    const [productData, setProductData] = useState([])
    const getDataFromFirebase = () => {
        getDocs(collection(db, "Products")).then((res)=>{
            let products = res.docs.map((ele)=>({...ele.data(), id:ele.id}))
            setProductData(products)
        }).catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getDataFromFirebase()
    },[])
    const DeleteProductFromFirebase = (id) => {
        deleteDoc(doc(db, "Products", id)).then((res)=>{
            alert("Product has been Deleted.")
            getDataFromFirebase()
        }).catch((err)=>console.log(err))
    }
    return <GetDataContext.Provider value={{getDataFromFirebase, productData, setProductData, DeleteProductFromFirebase}}>{children}</GetDataContext.Provider>
}