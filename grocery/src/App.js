import { useState } from 'react';
import './App.css';
import AllProducts from "./ProductList"
function App() {
  const [show, setshow] = useState(true);
  const showbtn = () => {
    return <button onClick={() => setshow(!show)} className='mt-4 groceryBtn'>Show Groceries</button>;
  };
  return (
    <div className="App">
      <div>{show ? showbtn() : <AllProducts />}</div>
    </div>
  );
}
export default App;