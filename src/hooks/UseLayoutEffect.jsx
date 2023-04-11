import React, { useEffect, useLayoutEffect } from "react";

function UseLayoutEffect() {
  useEffect(() => {
    console.log("useEffect hook");
  }, []);

  useLayoutEffect(() => {
    console.log("this will print first => useLayoutEffect hook");
  }, []);
  // useLayoutEffect calls earlier stage of page rendering

  return (
    <>
      <h2 className="hook">useLayoutEffect</h2>
      <small>
        you will use this hook, where you have to change layout of your
        application before it actually prints to the user
      </small>
      <small>
        useLayoutEffect can hurt performance. Prefer useEffect when possible.
      </small>
    </>
  );
}

export default UseLayoutEffect;
