import Product from "./product"
import GroceryData from "./grocery.json"

export default function AllProducts(){
    return(
        <div className="product-list pt-4 px-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px"}}>
            {
                GroceryData.data.map((ele)=><Product
                key={ele.id}
                image={ele.image}
                name={ele.name}
                price={ele.price}
              />)
            }
        </div>
    )
}