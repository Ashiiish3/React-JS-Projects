import { useState } from "react"

export default function Product({id, image, title, price, category, deleteProduct, HandlePrice}){
    const [toggle, settoggle] = useState(true)
    const [counter, setcounter] = useState(1)
    const AddtoCart =()=>{
        return (
            <div className="cart-buttons" onClick={()=>settoggle(!toggle)}>
                <button className="add-cart-btn btn btn-primary text-uppercase">Add To Cart</button>
            </div>
        )
    }
    const decreaseQuantity =()=>{
        if(counter === 1){
            settoggle(true)
        }
        else(
            setcounter(counter-1)
        )
    }
    const QuantityHandler = ()=>{
        return (
            <div className="cart-buttons">
                <button className="Decrease-quantity" onClick={decreaseQuantity}>&#x2212;</button>
                <button className="quantity">{counter}</button>
                <button className="Increase-quantity" onClick={()=>setcounter(counter+1)}>+</button>
            </div>
        )
    }
    return(
        <div className="product">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-content">
                <h2 className="title mb-4 text-capitalize">{title}</h2>
                <h2 className="category mb-4">Category: {category}</h2>
                <h2 className="price mb-4">Price: ₹{price}</h2>
                <button className="btn btn-success text-uppercase me-2 w-25" onClick={()=>HandlePrice(id, image, title, price, category)}>Edit</button>
                <button className="btn btn-danger text-uppercase w-25" onClick={()=>deleteProduct(id)}>Delete</button>
                <div className="cart-box mt-2">
                    {toggle ? <AddtoCart /> : <QuantityHandler/> }
                </div>
            </div>
        </div>
    )
}