import { createContext, useEffect, useState } from "react";
import { db } from "../Services/Firebase";
import { collection, getDocs } from "firebase/firestore";

export const GetDataContext = createContext()

export function GetDataProvider({Children}){
    const [productData, setProductData] = useState([]);
    const getDataFromFirebase = () => {
      getDocs(collection(db, "Products"))
        .then((res) => {
          let newArray = res.docs.map((ele) => ({ ...ele.data(), id: ele.id }));
          setProductData(newArray);
        })
        .catch((err) => console.log(err));
    };
    useEffect(() => {
      getDataFromFirebase();
    }, []);
    return <GetDataContext.Provider value={{productData, setProductData, getDataFromFirebase}} >{Children}</GetDataContext.Provider>
}