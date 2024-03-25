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

  const style = { background: "red", paddingTop: "5rem", textAlign: "center" };

  return (
    <div style={style}>
      <h1 className="title">{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
