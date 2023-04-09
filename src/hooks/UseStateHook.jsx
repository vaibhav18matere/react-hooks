import React, { useState } from "react";

function UseStateHook() {
  const [counter, setCounter] = useState(0);

  const incrementCountHandler = () => {
    setCounter((count) => count + 1);
  };

  //   const decrementCountHandler = () => {
  //     setCounter((count) => count - 1);
  //   };

  return (
    <>
      <h4>counter : {counter}</h4>
      <button onClick={incrementCountHandler}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decreament</button>
    </>
  );
}

export default UseStateHook;
