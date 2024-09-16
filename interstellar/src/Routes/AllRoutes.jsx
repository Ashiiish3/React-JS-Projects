import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";

export function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/Dashboard"} element={<Dashboard />}></Route>
      <Route path={"/Login"} element={<Login />}></Route>
      <Route path={"*"} element={<h1>Page Note Found</h1>}></Route>
    </Routes>
  );
}