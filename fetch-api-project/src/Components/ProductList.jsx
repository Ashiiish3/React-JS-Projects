import Product from "./Product"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function ProductList({ productData, deleteProduct, HandlePrice, page, setPage, hasMorePages }) {
    return (
        <div className="container">
            <div className="product-list">
                {productData.map((ele, i) => <Product key={i} id={ele.id} image={ele.image} title={ele.title} price={ele.price} category={ele.category} deleteProduct={deleteProduct} HandlePrice={HandlePrice} />)}
            </div>
            <button className="pagination-btn" onClick={() => setPage(page - 1)} disabled={page===1}>
                <FaChevronLeft />
            </button>
            <button className="pagination-btn current-page">
                {page}
            </button>
            <button className="pagination-btn" onClick={() => setPage(page + 1)}  disabled={!hasMorePages}>
                <FaChevronRight />
            </button>
        </div>
    )
}