import { useState } from "react";

const Counter = () => {
  //   let counter = 10;

  const [counter, setCounter] = useState(12); // Initial state set to the value of

  const increase = () => {
    setCounter(counter + 1);
  };

  //   const decrease = () => {
  //     setCounter(counter - 1);
  //   };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
