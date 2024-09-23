import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <ul className="flex space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-b-2 border-white"
              : "text-gray-400 hover:text-white transition duration-300"
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/Products"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-b-2 border-white"
              : "text-gray-400 hover:text-white transition duration-300"
          }
        >
          <li>Products</li>
        </NavLink>
        <NavLink
          to="/Login"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-b-2 border-white"
              : "text-gray-400 hover:text-white transition duration-300"
          }
        >
          <li>Login</li>
        </NavLink>
      </ul>
    </div>
  );
}