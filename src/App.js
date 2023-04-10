import "./App.css";
import UseReducerHook from "./hooks/UseReducerHook";
import UseStateHook from "./hooks/UseStateHook";

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseReducerHook />
    </div>
  );
}

export default App;
