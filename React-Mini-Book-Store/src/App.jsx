import '../src/BookCard.css'
import { useState } from "react";
import Fiction from "./components/Fiction"
import NonFiction from "./components/NonFiction"

function App() {
  const [toggle, settoggle] = useState(true)
  return (
    <div className="book-store">
      <h1>Mini Book Store</h1>
      <button className='toggle-button' data-testid="toggle-btn" onClick={()=>settoggle(!toggle)}>Show {toggle ? "Non-Fiction" : "Fictional"} Books</button>

      <div data-testid="conditional-container">
        {toggle ? <Fiction /> : <NonFiction />}
      </div>
    </div>
  );
}
export default App;