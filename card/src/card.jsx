import { IoIosArrowBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
function Card(){
    return(
        <div className="card">
            <div className="cardHeader">
                <span><IoIosArrowBack  className="arrow"/> back to all plants</span>
                <span className="heart"><CiHeart /></span>
            </div>
            <div className="cardBody">
                <div className="leftCard">
                    <img src="./plant-image.webp" alt="" />
                </div>
                <div className="cardInfo">
                    <h1>Classic Peace Lily</h1>
                    <h6>Popular House Plant</h6>
                    <h3>$18</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut dolore Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illo! Lorem ipsum, dolor sit amet consectetur que voluptates itaque temporibus voluptatem.</p>
                    <div className="card-button">
                        <button>Add to Cart</button>
                        <button>WishList</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card