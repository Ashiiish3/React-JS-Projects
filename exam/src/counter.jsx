import { useState } from "react";
import { useEffect } from "react";

export default function CounterFun() {
  const [counter, setcounter] = useState(0);
  function Handle() {
    setcounter(counter + 1);
  }

  function primeNumber(counter) {
    let count = 0;
    for (let i = 1; i <= counter; i++) {
      if (counter % i == 0) {
        count = count + 1;
      }
    }
    if (count == 2) {
      return "true";
    } else {
      return "false";
    }
  }
  return (
    <div className="counter-box">
      <div>
        <h1>Welcome to counter 2.0</h1>
        <button
          onClick={() => setcounter(counter - 1)}
          disabled={counter === 0}
        >
          -1
        </button>
        <button onClick={Handle} className="ms-3">+1</button>
        <button onClick={() => setcounter(0)} className="d-block m-auto mt-3">Reset Button</button>
        <h3 onChange={() => setcounter(counter)} className="mt-3">Count: <span>{counter}</span></h3>
        <h3>This Number is: <span>{counter % 2 == 0 ? "Even" : "Odd"}</span></h3>
        <h3>Prime Number: <span>{primeNumber(counter)}</span></h3>
      </div>
    </div>
  );
}
