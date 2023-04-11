import "./App.css";
import UseStateHook from "./hooks/UseStateHook";
import UseReducerHook from "./hooks/UseReducerHook";
import UseEffectHook from "./hooks/UseEffectHook";
import UseRefHook from "./hooks/UseRefHook";
import UseLayoutEffect from "./hooks/UseLayoutEffect";
import UseImperativeHandleHook from "./hooks/UseImperativeHandleHook";

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseReducerHook />
      <UseEffectHook />
      <UseRefHook />
      <UseLayoutEffect />
      <UseImperativeHandleHook />
    </div>
  );
}

export default App;
