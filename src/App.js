import "./App.css";
import UseStateHook from "./hooks/UseStateHook";
import UseReducerHook from "./hooks/UseReducerHook";
import UseEffectHook from "./hooks/UseEffectHook";

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseReducerHook />
      <UseEffectHook />
    </div>
  );
}

export default App;
