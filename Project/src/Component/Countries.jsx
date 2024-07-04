import { useEffect, useState } from "react";
import axios from 'axios';
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

function Countries() {
  const [countryData, setcountryData]= useState([])
  const [page, setpage]= useState(1)
  const [total, settotal]= useState()
  const [loading, setloading] = useState(false)
  const getCountryData = async ()=>{
    setloading(true)
    try{
      let response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
      setloading(false)
      setcountryData(response.data.data)
      settotal(response.data.totalPages)
    }
    catch(error){
      console.log(error)
    }
  }
  const onChange =(value)=>{
    setpage(value)
  }
  useEffect(()=>{
    getCountryData()
  },[page])
  return loading ? <LoadingIndicator /> : (
    <div>
      <h1 data-testid="countries-header">Country List</h1>
      <div data-testid="countries-container">
        {countryData.map((ele)=> <CountriesCard key={ele.id} country={ele.country} Rank={ele.Rank} population={ele.population} />)}
      </div>
      <div>
        <Pagination total={total} current={page} onChange={onChange} />
      </div>
    </div>
  );
}
export default Countries;