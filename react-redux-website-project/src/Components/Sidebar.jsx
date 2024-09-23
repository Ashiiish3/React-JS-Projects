import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Sidebar() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [allCategories, setAllCategories] = useState(searchParams.getAll("category") || [])
    useEffect(()=>{
        setSearchParams({category: allCategories})
    }, [allCategories])
    const hadleChange = (value) => {
        let filterData = [...allCategories]
        if(filterData.includes(value)){
            filterData = filterData.filter((ele)=> ele != value)
        } else{
            filterData.push(value)
        }
        setAllCategories(filterData)
    }
  return (
    <div className="flex flex-col space-y-2 mt-4">
      <div className="flex items-center">
        <input type="checkbox" id="men" className="mr-2" value={"men's clothing"} checked={allCategories.includes("men's clothing")} onChange={(e)=>hadleChange(e.target.value)} />
        <label htmlFor="men" className="text-gray-700">
          Men
        </label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="women" value={"women's clothing"} checked={allCategories.includes("women's clothing")} onChange={(e)=>hadleChange(e.target.value)} className="mr-2" />
        <label htmlFor="women" className="text-gray-700">
          Women
        </label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="electronics" value={"electronics"} checked={allCategories.includes("electronics")} onChange={(e)=>hadleChange(e.target.value)} className="mr-2" />
        <label htmlFor="electronics" className="text-gray-700">
          Electronics
        </label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="jewelery" value={"jewelery"} checked={allCategories.includes("jewelery")} onChange={(e)=>hadleChange(e.target.value)} className="mr-2" />
        <label htmlFor="jewelery" className="text-gray-700">
          Jewelery
        </label>
      </div>
    </div>
  );
}
