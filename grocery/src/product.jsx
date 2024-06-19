import { useState } from "react";

export default function Product({ id, image, name, price }) {
  const [quantity, setquantity] = useState(1);
  return (
    <div key={id} className="product">
      <div className="image-box">
        <img src={image} alt="" />
      </div>
      <div className="mt-2">
        <h5>{name}</h5>
        <h4>Price: ₹{price}</h4>
      </div>
      <div className="mt-2">
        <button
          onClick={() => setquantity(quantity - 1)}
          disabled={quantity === 1}
        >
          -
        </button>
        <button>{quantity}</button>
        <button
          onClick={() => setquantity(quantity + 1)}
          disabled={quantity === 5}
        >
          +
        </button>
      </div>
    </div>
  );
}
