import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-b-2 border-white"
              : "text-gray-400 hover:text-white"
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/Products"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-b-2 border-white"
              : "text-gray-400 hover:text-white"
          }
        >
          <li>Products</li>
        </NavLink>
        <NavLink
          to="/Login"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-b-2 border-white"
              : "text-gray-400 hover:text-white"
          }
        >
          <li>Login</li>
        </NavLink>
      </ul>
    </div>
  );
}
