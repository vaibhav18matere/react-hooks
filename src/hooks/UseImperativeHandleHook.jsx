import React, { useRef } from "react";
import ImperativeButton from "../pages/ImperativeButton";

function UseImperativeHandleHook() {
  const btnToggleRef = useRef(null);

  return (
    <>
      <h2 className="hook">UseImperativeHandleHook</h2>
      <button
        onClick={() => {
          btnToggleRef.current.changeToggleHandle();
        }}
      >
        parent component btn
      </button>
      <ImperativeButton ref={btnToggleRef} />
    </>
  );
}

export default UseImperativeHandleHook;
