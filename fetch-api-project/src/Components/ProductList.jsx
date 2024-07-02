import Product from "./Product"

export default function ProductList({productData, deleteProduct, updateOnlyPrice}){
    return(
        <div className="container">
            <div className="product-list">
                {productData.map((ele, i)=> <Product key={i} id={ele.id} image={ele.image} title={ele.title} price={ele.price} category={ele.category} deleteProduct={deleteProduct} updateOnlyPrice={updateOnlyPrice} />)}
            </div>
        </div>
    )
}