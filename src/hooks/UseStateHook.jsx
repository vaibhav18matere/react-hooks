import React, { useState } from "react";

function UseStateHook() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("name is");

  const [surname, setSurname] = useState("surname is");

  const incrementCountHandler = () => {
    setCounter((count) => count + 1);
  };

  //   const decrementCountHandler = () => {
  //     setCounter((count) => count - 1);
  //   };

  const inputTextHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onChangeHandler = (event) => {
    setSurname(event.target.value);
  };

  return (
    <>
      <h4>counter : {counter}</h4>
      <button onClick={incrementCountHandler}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decreament</button>
      <br />
      <br />
      <input placeholder="enter name" onInput={(e) => inputTextHandler(e)} />
      <h3>{inputValue}</h3>
      <small>1. using "onInput" attribute</small>
      <br />
      <br />
      <input placeholder="enter surname" onChange={onChangeHandler} />
      <h3>{surname}</h3>
      <small>2. using "onInput" attribute</small>
    </>
  );
}

export default UseStateHook;
