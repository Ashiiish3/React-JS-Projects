import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "../Service/Firebase";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

export default function Login() {
  let formObj = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(formObj);
  const { email, password } = formData;
  const HandleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const SubmitForm = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("Login Successfull");
        navigate("/Dashboard");
      })
      .catch((error) => {
        alert("Login Failed. Please Sign Up first.");
      });
  };
  const SubmitLoginFromGoogleButton = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        alert("You are logged in Successfully using Google.");
        navigate("/Dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
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
          onChange={(e) => HandleInputChange(e)}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          value={password}
          data-testid="password"
          placeholder="Enter password"
          onChange={(e) => HandleInputChange(e)}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-200">
          Login
        </button>
        <div className="mt-5 m-auto flex justify-center">
          <GoogleButton 
            onClick={SubmitLoginFromGoogleButton}
          />
        </div>
      </form>
    </div>
  );
}