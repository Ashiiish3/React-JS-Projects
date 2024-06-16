import fictionData from "../fiction.json"
import BookCard from "./BookCard";

export default function Fiction() {
  return (
    <div>
      <h1>Fictional Books</h1>
      <div className="books-container" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {fictionData.map((ele)=><BookCard title={ele.title} author={ele.author} year={ele.year} price={ele.price} img={ele.img} />)}
      </div>
    </div>
  );
}