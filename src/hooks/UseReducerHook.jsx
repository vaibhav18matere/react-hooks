import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "DECREMENT":
      return { count: state.count - 1, showText: state.showText };
    case "TOGGLE_TEXT":
      return { count: state.count, showText: !state.showText };

    default:
      return state;
  }
};

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 5, showText: false });
  return (
    <>
      <h2 className="hook">2. useReducer hook</h2>
      <h5>{state.count}</h5>
      {state.showText && <h5>Text to toggle</h5>}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE_TEXT" });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        remove
      </button>
    </>
  );
}

export default UseReducerHook;
