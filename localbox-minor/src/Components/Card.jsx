import React from "react";

export default function Card({ image, category, discount }) {
  return (
    <div className="w-[250px] p-4 bg-white shadow-xl">
      <div>
        <div className="flex justify-between h-52 mb-5">
          <img src={image} alt="" className="m-auto" />
        </div>
        <p>{category}</p>
        <p>{discount}</p>
      </div>
    </div>
  );
}