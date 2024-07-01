export default function Product({id, image, title, price, category, deleteProduct}){
    return(
        <div className="product">
            <img src={image} alt={title} />
            <h2>Title: {title}</h2>
            <h2>Category: {category}</h2>
            <h2>Price: ₹{price}</h2>
            <button onClick={()=>deleteProduct(id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}