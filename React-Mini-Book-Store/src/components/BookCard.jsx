export default function BookCard({title, author, year, price, img}) {
  return (
    <div data-testid="book-card" className="book-card">
      <img src={img} alt={title} />
      <b>
        <div className="book-card-title">
          {title}
          <span> ({year})</span>
        </div>
      </b>
      <div className="book-card-author">{author}</div>
      <div className="book-card-price">Price: ₹{price}</div>
    </div>
  );
}