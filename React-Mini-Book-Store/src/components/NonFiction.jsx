import NonFictionalData from "../nonfiction.json"
import BookCard from "./BookCard";

export default function NonFiction() {
  return (
    <div>
      <h1>Non-Fiction Books</h1>
      <div className="books-container" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {NonFictionalData.map((ele)=><BookCard title={ele.title} author={ele.author} year={ele.year} price={ele.price} img={ele.img}/>)}
      </div>
    </div>
  );
}