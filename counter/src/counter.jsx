import { useState } from "react";
import Button from 'react-bootstrap/Button';

function CounterApp() {
  const [value, setValue]= useState(0)
  return (
    <div className="counter-box">
        <h1>Counter App</h1>
        <h1 className="mt-4">{value}</h1>
        <Button variant="success" onClick={()=>setValue(value+1)}>Increment</Button>
        <Button variant="danger" onClick={()=>setValue(value-1)} disabled={value===0}>Decrement</Button>
        <Button onClick={()=>setValue(0)} className="reset-button">Reset</Button>
    </div>
  );
}
export default CounterApp