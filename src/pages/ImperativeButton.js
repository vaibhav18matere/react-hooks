import React, { useState, forwardRef, useImperativeHandle } from "react";

const ImperativeButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    changeToggleHandle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button>child component btn</button>
      {toggle && (
        <h4>Toggle text in child component which is handled from parent</h4>
      )}
    </>
  );
});

export default ImperativeButton;
