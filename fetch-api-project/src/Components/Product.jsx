export default function Product({image, title, price, category}){
    return(
        <div className="product">
            <img src={image} alt={title} />
            <h2>Title: {title}</h2>
            <h2>Category: {category}</h2>
            <h2>Price: ₹{price}</h2>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}