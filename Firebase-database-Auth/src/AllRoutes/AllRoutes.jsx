import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import CreatePage from "../Pages/CreatePage";
import PrivateRoutes from "../Pages/PrivateRoutes";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route
        path="/Dashboard"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/SignUp" element={<CreatePage />}></Route>
      <Route path="*" element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  );
}
