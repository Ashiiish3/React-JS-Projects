import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header
        className="h-[96vh] relative bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-8 rounded-lg">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            E-Commerce Website
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8">
            Discover the best products at unbeatable prices!
          </p>
          <NavLink
            to={"/Products"}
            href="#featured-categories"
            className="inline-block bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-3 px-6 rounded-lg"
          >
            Shop Now
          </NavLink>
        </div>
      </header>
    </div>
  );
}
