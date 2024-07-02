export default function Product({id, image, title, price, category, deleteProduct, updateOnlyPrice}){
    return(
        <div className="product">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-content">
                <h2 className="title mb-4 text-capitalize">{title}</h2>
                <h2 className="category mb-4">Category: {category}</h2>
                <h2 className="price mb-4">Price: ₹{price}</h2>
                <button className="btn btn-success text-uppercase me-2 w-25" onClick={()=>updateOnlyPrice(id, price)}>Edit</button>
                <button className="btn btn-danger text-uppercase w-25" onClick={()=>deleteProduct(id)}>Delete</button>
                <div className="cart-btn">
                    <button className="add-cart-btn btn btn-primary text-uppercase mt-2">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}