import React, { useState } from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux'
import { Login_failed, Login_Request, Login_Successful } from "../redux/actionType";

export default function Login() {
  const {isLoading, isError, token} = useSelector((data) => data.AuthReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const postData = (userData) => {
    dispatch({type: Login_Request})
    axios
      .post(`https://reqres.in/api/login`, userData)
      .then((res) => {
        dispatch({type: Login_Successful, payload: res.data.token})
        console.log(res.data.token)
    })
      .catch((err) => {
        dispatch({type: Login_failed})
        console.log(err)
    });
  };
  const SubmitForm = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    postData(userData);
  };
  return isLoading ? <h1>Loading...</h1> : isError ? <h1>Something went wrong</h1> : (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        data-testid="auth_form"
        onSubmit={(event) => SubmitForm(event)}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <input
          type="email"
          name="email"
          value={email}
          data-testid="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          value={password}
          data-testid="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-200"
        />
      </form>
    </div>
  );
}
