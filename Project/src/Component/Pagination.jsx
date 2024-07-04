function Pagination({current, onChange, total}) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={current===1}
      onClick={()=>onChange(current-1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={current === total}
      onClick={()=>onChange(current+1)}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container" className="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div className="total-pages-box">
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
}

export default Pagination;
