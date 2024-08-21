import { signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../Service/Firebase";

export default function Navbar() {
  const ClickLogOut =()=>{
    signOut(auth).then(() => {
      alert('Log-out successful.')
    }).catch((error) => {
      console.log('An error happened.')
    });
  }
  return (
    <div className="h-16 border-b-[1px] border-gray-300 flex items-center sticky top-0 bg-white">
      <ul className="flex justify-between items-center w-[80%] m-auto">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"Dashboard"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/Login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"/SignUp"}>Sign Up</NavLink>
        </li>
        <li>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={ClickLogOut}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
