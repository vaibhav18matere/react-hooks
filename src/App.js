import "./App.css";
import UseStateHook from "./hooks/UseStateHook";
import UseReducerHook from "./hooks/UseReducerHook";
import UseEffectHook from "./hooks/UseEffectHook";
import UseRefHook from "./hooks/UseRefHook";

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseReducerHook />
      <UseEffectHook />
      <UseRefHook />
    </div>
  );
}

export default App;
