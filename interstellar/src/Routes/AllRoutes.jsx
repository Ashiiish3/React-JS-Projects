import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SingleProductPage from "./SingleProductPage";

export function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/dashboard"} element={<Dashboard />}></Route>
      <Route path={"/login"} element={<Login />}></Route>
      <Route path={"/some-path/:id"} element={<SingleProductPage />}></Route>
      <Route path={"*"} element={<h1>Page Note Found</h1>}></Route>
    </Routes>
  );
}