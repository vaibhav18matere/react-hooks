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
      <h2 className="hook">1. UseState Hook</h2>
      <h5>counter : {counter}</h5>
      <button onClick={incrementCountHandler}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decreament</button>
      <br />
      <br />
      <input placeholder="enter name" onInput={(e) => inputTextHandler(e)} />
      <h5>{inputValue}</h5>
      <small>1. using "onInput" attribute</small>
      <br />
      <br />
      <input placeholder="enter surname" onChange={onChangeHandler} />
      <h5>{surname}</h5>
      <small>2. using "onChange" attribute</small>
    </>
  );
}

export default UseStateHook;
