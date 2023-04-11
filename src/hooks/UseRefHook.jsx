import React, { useRef } from "react";

function UseRefHook() {
  const inputRef = useRef(null);
  const pswdRef = useRef(null);

  const nameHandler = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
    // makes input field empty
    inputRef.current.focus();
    // after that the icon | focuses on input field
  };

  const passwordHandler = () => {
    pswdRef.current.value = "";
    pswdRef.current.focus();
  };

  return (
    <>
      <h2 className="hook">useRef hook</h2>
      <input type="text" placeholder="enter text" ref={inputRef} />
      <button onClick={nameHandler}>click here</button>
      <input type="password" placeholder="enter password" ref={pswdRef} />
      <button onClick={passwordHandler}>submit pswd</button>
    </>
  );
}

export default UseRefHook;
