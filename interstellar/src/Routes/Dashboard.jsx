import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductsTable from "../Components/ProductsTable";

function Dashboard() {
  const { token } = useSelector((data) => data.loginReducer);
  const [data, setData] = useState([])
  const getData = async () => {
    try {
      let response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products')
      setData(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h3 className="text-2xl font-bold text-center mb-6">Dashboard</h3>
      <div className="flex flex-col items-center space-y-4">
        <button
          data-testid="logout-btn"
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Logout
        </button>
        <p className="text-lg">
          Token: {token}
          <b data-testid="user-token" className="ml-2 text-indigo-600"></b>
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        {/* Products table */}
        <ProductsTable data={data} />
      </div>
    </div>
  );
}
export default Dashboard;