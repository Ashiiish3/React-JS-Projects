export default function Product({id, image, name, price}){
    return(
        <div key={id} className="product">
            <div className="image-box">
                <img src={image} alt="" />
            </div>
            <div>
                <h5>{name}</h5>
                <h4>Price: ₹{price}</h4>
            </div>
        </div>
    )
}